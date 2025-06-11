let startY = 0;
let endY = 0;

const swipeElement = document.getElementById('swipeUp');

// Saat sentuhan dimulai
swipeElement.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

// Saat sentuhan berakhir
swipeElement.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;

    // Cek apakah geser ke atas cukup jauh (contoh: > 50px)
    if (diffY > 50) {
        // Ganti halaman
        window.location.href = "../pages/find-username.html"; // ganti dengan halaman tujuanmu
    }
});