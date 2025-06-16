document.addEventListener("DOMContentLoaded", function () {
    const text = "Saya merupakan seorang programmer yang berdedikasi dan minat dalam pembangunan web. Saya suka mengasah kemahiran teknikal sambil meneroka cara kreatif untuk membina penyelesaian digital yang praktikal dan menarik.";
    const typingText = document.getElementById("typing-text");
    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }
    type();

    if (document.cookie.includes("clicked=true")) {
        document.body.innerHTML = "Sorry, you’ve already clicked!";
    } else {
        // document.cookie = "clicked=true; path=/; max-age=31536000"; // 1 year
        document.cookie = "clicked=true; path=/; max-age=60"; // 1 minute
        // show page or perform action
    }

    for (let i = 1; i <= 5; i++) {
        const hoverTarget = document.getElementById('hoverTarget' + i);
        const hoverToast = document.getElementById('hoverToast' + i);

        if (hoverTarget && hoverToast && window.bootstrap) {
            const toast = new bootstrap.Toast(hoverToast);
            hoverTarget.addEventListener('mouseenter', () => toast.show());
        }
    }

    // Optional: Auto reload with sweet alert
    setTimeout(() => {
        Swal.fire({
            icon: 'info',
            title: '⏰ Masa dah cukup!',
            text: 'Page akan reload sekarang...',
            showConfirmButton: false,
            timer: 3000, // popup keluar 3 saat je
            allowOutsideClick: false
        });

        setTimeout(() => {
            location.reload();
            setTimeout(() => {
                if (document.cookie.includes("clicked=true")) {
                    document.body.innerHTML = "Sorry, you’ve already clicked!";
                }
            }, 100); // beri masa sikit untuk reload
        }, 3000);
    }, 60000);

});