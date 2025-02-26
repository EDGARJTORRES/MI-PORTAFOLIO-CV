document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("backToTopBtn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", function() {
        topFunction();
    });

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.animate-img',
        translateY: [
            { value: -30, duration: 300 },
            { value: 0, duration: 300 }
        ],
        opacity: [
            { value: 0.5, duration: 300 },
            { value: 1, duration: 300 }
        ],
        delay: anime.stagger(200, { start: 300 }), 
        loop: true,
        easing: 'easeInOutQuad'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.animate-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});