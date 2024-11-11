// Mencegah reload page saat form dikirim
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    // Data untuk dikirim ke server
    const data = {
        location: location,
        description: description
    };

    // Kirim data ke server menggunakan fetch
    fetch('https://your-backend-server.com/api/laporan', { // Ganti URL ini dengan alamat backend Anda
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Laporan berhasil dikirim!');
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, laporan gagal dikirim.');
    });
});
