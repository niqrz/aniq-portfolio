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

    // // Cookie check stuff remains same
    // if (document.cookie.includes("clicked=true")) {
    //     document.body.innerHTML = "Terima Kasih kerana melayari laman web ini!";
    //     return; // stop further execution
    // } else {
    //     // Set cookie to expire in 1 day
    //     document.cookie = "clicked=true; path=/; max-age=86400";
    // }

    // Toast hover init remains same (keep your existing toast code here)...
    for (let i = 1; i <= 5; i++) {
        const hoverTarget = document.getElementById('hoverTarget' + i);
        const hoverToast = document.getElementById('hoverToast' + i);

        if (hoverTarget && hoverToast && window.bootstrap) {
            const toast = new bootstrap.Toast(hoverToast);
            hoverTarget.addEventListener('mouseenter', () => toast.show());
        }
    }
});
