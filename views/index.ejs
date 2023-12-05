<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cek Rekening / E-Wallet Indonesia</title>
    <link rel="stylesheet" href="/css/output.css" />
  </head>
  <body
    class="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 to-green-200"
  >
    <div class="flex-grow flex items-center justify-center p-4">
      <div
        class="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-6"
      >
        <h1 class="text-3xl font-semibold text-gray-800 text-center">
          Cek Rekening / E-Wallet
        </h1>
        <p class="text-sm text-gray-500 text-center mt-1">
          ** Hanya untuk rekening / e-wallet yang terdaftar di Indonesia
        </p>

        <div class="mt-6">
          <label class="block text-gray-700 text-sm font-medium mb-2"
            >Pilih Layanan</label
          >
          <select
            id="layanan"
            class="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            onchange="fetchData()"
          >
            <option value="" selected disabled>
              -- Silahkan pilih layanan --
            </option>
            <option value="bank">BANK</option>
            <option value="ewallet">E-WALLET</option>
          </select>
        </div>

        <div class="mt-6" id="data-list" style="display: none">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            id="data-label"
          ></label>
          <select
            id="data"
            class="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
          >
            <!-- Data options will be populated here -->
          </select>
        </div>

        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            for="account-number"
            >Nomor Akun</label
          >
          <input
            type="number"
            id="account-number"
            class="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            placeholder="Masukkan Nomor Akun"
          />
        </div>

        <div class="mt-6 flex justify-center">
          <button
            id="checkButton"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Check
          </button>
        </div>
        <div id="message" class="mt-6 text-center"></div>
      </div>
    </div>

    <footer class="text-center text-black-500 text-xs p-4">
      <p>
        Made with <span class="text-pink-500">♥</span> by
        <a href="https://github.com/pilarxyz/cek-rekening">pilarxyz</a>
      </p>
    </footer>

    <script>
      async function fetchData() {
        var layanan = document.getElementById("layanan").value;
        var dataList = document.getElementById("data-list");
        var dataSelect = document.getElementById("data");
        var dataLabel = document.getElementById("data-label");

        if (layanan) {
          dataList.style.display = "block";
          dataSelect.innerHTML = "";

          var initialOption = document.createElement("option");
          initialOption.textContent = `-- Silahkan pilih ${layanan} --`;
          initialOption.disabled = true;
          initialOption.selected = true;
          dataSelect.appendChild(initialOption);

          const response = await fetch(`/api/${layanan}`);
          const result = await response.json();

          if (result.status && result.data.length > 0) {
            result.data.forEach((item) => {
              var option = document.createElement("option");
              option.value = layanan === "bank" ? item.kodeBank : item.kodeBank;
              option.text = layanan === "bank" ? item.namaBank : item.namaBank;
              dataSelect.appendChild(option);
            });
          } else {
            var noDataOption = document.createElement("option");
            noDataOption.value = "";
            noDataOption.text = "Data tidak tersedia";
            dataSelect.appendChild(noDataOption);
          }

          dataLabel.innerText =
            layanan === "bank" ? "Nama Bank" : "Nama E-Wallet";
        } else {
          dataList.style.display = "none";
        }
      }

      document
        .getElementById("checkButton")
        .addEventListener("click", async function () {
          var layanan = document.getElementById("layanan").value;
          var bankCode = document.getElementById("data").value;
          var accountNumber = document.getElementById("account-number").value;
          var messageDiv = document.getElementById("message");

          if (!layanan || !bankCode || !accountNumber) {
            alert("Silakan pilih layanan dan masukkan nomor akun.");
            return;
          }

          try {
            const response = await fetch("/checkAccount", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ layanan, bankCode, accountNumber }),
            });
            const result = await response.json();

            if (result.status) {
              messageDiv.innerHTML = `${result.data.accountname}`;
              messageDiv.style.color = "green";
            } else {
              messageDiv.textContent =
                "Nomor akun yang anda masukan tidak sesuai!";
              messageDiv.style.color = "red";
            }
          } catch (error) {
            console.error("Error:", error);
            messageDiv.textContent =
              "Terjadi kesalahan saat memproses permintaan.";
            messageDiv.style.color = "red";
          }
        });
    </script>
  </body>
</html>
