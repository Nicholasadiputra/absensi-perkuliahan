document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('absensiChart').getContext('2d');
    new Chart(ctx, {
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
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});