# Cek Rekening & E-Wallet Indonesia

Aplikasi web untuk memeriksa informasi rekening bank dan e-Wallet di Indonesia. Aplikasi ini memungkinkan pengguna untuk mengakses informasi terkait rekening bank dan e-Wallet dengan menggunakan API yang disediakan.

## Fitur

- Daftar bank dan e-Wallet yang tersedia.
- Periksa nama pemilik akun bank dan e-Wallet.

## API

Aplikasi ini menggunakan API berikut untuk mendapatkan data:

- **Get List Bank**: `https://api-rekening.lfourr.com/listBank`
- **Get List E-Wallet**: `https://api-rekening.lfourr.com/listEmoney`
- **Get Account Bank**: `https://api-rekening.lfourr.com/getBankAccount?bankCode=${bankCode}&accountNumber=${accountNumber}`
- **Get Account E-Wallet**: `https://api-rekening.lfourr.com/getEwalletAccount?bankCode=${bankCode}&accountNumber=${accountNumber}`

## Penggunaan

Untuk menggunakan API ini, Anda perlu mendapatkan akses yang disetujui. Silakan hubungi kami untuk whitelist IP sebelum menggunakan API ini.

-- Update: API ini sudah dapat digunakan secara publik.

## Peringatan

Gunakan informasi yang diperoleh dari API ini secara bijak dan bertanggung jawab. Jangan menggunakan informasi ini untuk tujuan yang tidak etis atau ilegal.
