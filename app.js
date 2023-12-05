const express = require("express");
const axios = require("axios");
const app = express();

function checkReferer(req, res, next) {
  const referer = req.headers.referer;
  if (!referer || !referer.startsWith("https://cek-rekening.lfourr.com/")) {
    return res.status(403).send("Access Denied");
  }
  next();
}

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/bank", checkReferer, async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-rekening.lfourr.com/listBank"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bank data" });
  }
});

app.get("/api/ewallet", checkReferer, async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-rekening.lfourr.com/listEwallet"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching e-Wallet data" });
  }
});

app.post("/checkAccount", checkReferer, async (req, res) => {
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

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
