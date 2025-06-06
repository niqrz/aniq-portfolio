document.addEventListener("DOMContentLoaded", function () {
    const text = "Saya merupakan seorang programmer yang berdedikasi dan minat dalam pembangunan web. Saya merupakan pelajar Diploma Teknologi Maklumat (Teknologi Digital) dan saya suka mengasah kemahiran teknikal sambil meneroka cara kreatif untuk membina penyelesaian digital yang praktikal dan menarik.";
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

    var hoverTarget = document.getElementById('hoverTarget');
    var hoverTarget2 = document.getElementById('hoverTarget2');
    var hoverToast = document.getElementById('hoverToast');
    var hoverToast2 = document.getElementById('hoverToast2');
    if (hoverTarget && hoverToast && window.bootstrap) {
        var toast = new bootstrap.Toast(hoverToast);
        hoverTarget.addEventListener('mouseenter', function () {
            toast.show();
        });
    }

    if (hoverTarget2 && hoverToast2 && window.bootstrap) {
        var toast2 = new bootstrap.Toast(hoverToast2);
        hoverTarget2.addEventListener('mouseenter', function () {
            toast2.show();
        });
    }
});