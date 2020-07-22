const backToTheTop = document.querySelector("#back-to-the-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 50) {
        if(!backToTheTop.classList.contains("btnEntrance")) {
            backToTheTop.classList.remove("btnExit");
            backToTheTop.classList.add("btnEntrance");
            backToTheTop.style.display = "block";
        }
        
    } else {
        if(backToTheTop.classList.contains("btnEntrance")) {
            backToTheTop.classList.remove("btnEntrance");
            backToTheTop.classList.add("btnExit");
            setTimeout(() => {
                backToTheTop.style.display = "none";
            }, 250);    
        }
    }
}


backToTheTop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
/*
function smothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(stop);

    function stop(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(stop);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
        }
    };
}*/