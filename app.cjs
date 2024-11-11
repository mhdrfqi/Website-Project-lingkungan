const express = require("express");
const path = require("path");
const cors = require("cors");

// Inisialisasi aplikasi Express
const app = express();
const port = 3000;

// Middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware untuk mengizinkan CORS
app.use(cors());

// Mengatur folder 'public' untuk file statis (CSS, JS, dan lain-lain)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint untuk menerima data dari POST
app.post("/save", (req, res) => {
    const data = req.body;

    // Log data yang diterima ke konsol
    console.log("Data diterima:", data);

    // Kirim respons balik ke client
    res.send("Data berhasil disimpan");
});

// Endpoint untuk melayani halaman utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Jalankan server pada port yang ditentukan
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

app.use(cors({
    origin: "https://mhdrfqi.github.io/Website-Project-lingkungan/",  // Ganti dengan URL GitHub Pages Anda
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));
