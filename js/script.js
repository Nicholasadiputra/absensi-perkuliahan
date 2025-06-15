// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // ======================================================
    // == KODE UNTUK MEMBUAT MENU SIDEBAR (3 GARIS) BEKERJA ==
    // ======================================================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // Pastikan elemen menu dan sidebar ada di halaman
    if (menuToggle && sidebar) {
        // Tambahkan fungsi 'click' pada tombol menu
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }


    // =======================================================
    // == KODE UNTUK GRAFIK LINGKARAN DI HALAMAN UTAMA      ==
    // =======================================================
    // Cari elemen canvas dengan ID 'absensiChart'
    const ctx = document.getElementById('absensiChart');

    // Jika elemen canvas tersebut ada di halaman ini, maka buat grafiknya
    // Ini mencegah error di halaman lain yang tidak punya grafik
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Hadir', 'Izin', 'Sakit', 'Alpha'],
                datasets: [{
                    data: [34, 2, 1, 3],
                    backgroundColor: [
                        '#4CAF50', // Hadir
                        '#FFC107', // Izin
                        '#2196F3', // Sakit
                        '#F44336'  // Alpha
                    ]
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 0 // Disable all animations
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

});
