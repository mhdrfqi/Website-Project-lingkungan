// script.js
document.getElementById("reportForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Mencegah form dari submit default

    const nama = document.getElementById("nama").value;
    const lokasi = document.getElementById("lokasi").value;
    const deskripsi = document.getElementById("deskripsi").value;

    // Siapkan data yang akan dikirim
    const data = { nama, lokasi, deskripsi };

    try {
        // Kirim data ke server menggunakan POST
        const response = await fetch("/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Tampilkan pesan respons
        const message = await response.text();
        document.getElementById("responseMessage").innerText = message;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "Terjadi kesalahan saat mengirim laporan.";
    }
});
