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
        // else {
        //     setTimeout(() => {
        //         typingText.textContent = "";
        //         i = 0;
        //         type();
        //     }, 1000); // Wait 1s before repeating
        // }
    }
    type();

    var hoverTarget = document.getElementById('hoverTarget');
    var hoverTarget2 = document.getElementById('hoverTarget2');
    var hoverTarget3 = document.getElementById('hoverTarget3');
    var hoverTarget4 = document.getElementById('hoverTarget4');
    var hoverTarget5 = document.getElementById('hoverTarget5');

    var hoverToast = document.getElementById('hoverToast');
    var hoverToast2 = document.getElementById('hoverToast2');
    var hoverToast3 = document.getElementById('hoverToast3');
    var hoverToast4 = document.getElementById('hoverToast4');
    var hoverToast5 = document.getElementById('hoverToast5');

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

    if (hoverTarget3 && hoverToast3 && window.bootstrap) {
        var toast3 = new bootstrap.Toast(hoverToast3);
        hoverTarget3.addEventListener('mouseenter', function () {
            toast3.show();
        });
    }
    if (hoverTarget4 && hoverToast4 && window.bootstrap) {
        var toast4 = new bootstrap.Toast(hoverToast4);
        hoverTarget4.addEventListener('mouseenter', function () {
            toast4.show();
        });
    }
    if (hoverTarget5 && hoverToast5 && window.bootstrap) {
        var toast5 = new bootstrap.Toast(hoverToast5);
        hoverTarget5.addEventListener('mouseenter', function () {
            toast5.show();
        });
    }
});