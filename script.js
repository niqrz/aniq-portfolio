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
        document.body.innerHTML = "Sorry, you’ve already clicked!";
        return; // stop further execution
    } else {
        document.cookie = "clicked=true; path=/; max-age=30"; // Remove cookie immediately
    }

    // Toast hover init remains same (keep your existing toast code here)...

    // New countdown timer logic
    let countdown = 30; // seconds
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
                title: '⏰ Masa dah cukup!',
                text: 'Page akan reload sekarang...',
                showConfirmButton: false,
                timer: 3000,
                allowOutsideClick: false
            });

            setTimeout(() => {
                // Remove the "clicked" cookie before reload
                document.cookie = "clicked=true; path=/; max-age=0";
                window.location.reload();
            }, 3000);
        }
    }, 1000);
});
