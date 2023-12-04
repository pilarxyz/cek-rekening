const express = require("express");
const axios = require("axios");
const app = express();

const ipWhitelist = ["xxx"];

function checkWhitelistedIp(req, res, next) {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (clientIp.substr(0, 7) === "::ffff:") {
    clientIp = clientIp.substr(7);
  }

  if (!ipWhitelist.includes(clientIp.split(",")[0])) {
    return res.status(403).send("Access Denied: " + clientIp);
  }
  next();
}

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

// app.use(checkWhitelistedIp);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/bank", checkWhitelistedIp, async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-rekening.lfourr.com/listBank"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bank data" });
  }
});

app.get("/api/emoney", checkWhitelistedIp, async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-rekening.lfourr.com/listEmoney"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching e-Wallet data" });
  }
});

app.post("/checkAccount", checkWhitelistedIp, async (req, res) => {
  const { layanan, bankCode, accountNumber } = req.body;
  const apiUrl =
    layanan === "bank"
      ? `https://api-rekening.lfourr.com/getBankAccount?bankCode=${bankCode}&accountNumber=${accountNumber}`
      : `https://api-rekening.lfourr.com/getEwalletAccount?bankCode=${bankCode}&accountNumber=${accountNumber}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching account data",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
