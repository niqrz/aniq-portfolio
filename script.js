document.addEventListener("DOMContentLoaded", function () {
    const text = "Saya merupakan seorang programmer yang berdedikasi dan minat dalam pembangunan web. Saya suka mengasah kemahiran teknikal sambil meneroka cara kreatif untuk membina penyelesaian digital yang praktikal dan menarik.";
    const typingText = document.getElementById("typing-text");
    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();

    // Cookie check stuff remains same
    if (document.cookie.includes("clicked=true")) {
        document.body.innerHTML = "Terima Kasih kerana melayari laman web ini!";
        return; // stop further execution
    } else {
        // Set cookie to expire in 1 day
        document.cookie = "clicked=true; path=/; max-age=86400";
    }

    // Toast hover init remains same (keep your existing toast code here)...

    // New countdown timer logic
    let countdown = 20; // seconds
    const countdownElem = document.getElementById("countdown-timer");

    const intervalId = setInterval(() => {
        countdown--;
        if (countdownElem) {
            countdownElem.textContent = `⏳ Masa tinggal: ${countdown} saat`;
        }

        if (countdown <= 0) {
            clearInterval(intervalId);

            Swal.fire({
                icon: 'info',
                title: '⏰ Masa tamat!',
                text: 'Page akan reload sekarang...',
                showConfirmButton: false,
                timer: 3000,
                allowOutsideClick: false
            });

            setTimeout(() => {
                window.location.reload();
                setTimeout(() => {
                    if (document.cookie.includes("clicked=true")) {
                        document.body.innerHTML = "Terima Kasih kerana melayari laman web ini!";
                    }
                }, 100); // beri masa sikit untuk reload
            }, 3000);
        }
    }, 1000);
});
