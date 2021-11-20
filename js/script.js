const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    if ( window.scrollY > 1 ) {
    navbar.classList.replace('bg-transparent','nav-color');
    } else if (window.scrollY <= 1) {
        navbar.classList.replace('nav-color','bg-transparent');
    }
});

const body = document.getElementsByTagName('body')[0];
body.addEventListener('touchmove', function() {
    if ( window.scrollY > 1 ) {
        navbar.classList.replace('bg-transparent','nav-color');
    } else if (window.scrollY <= 1) {
        navbar.classList.replace('nav-color','bg-transparent');
    }
});
