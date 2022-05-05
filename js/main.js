window.addEventListener("scroll", (event) => {
    let distanceScrolled = this.scrollY;

    if (distanceScrolled >= 300) {
        document.querySelector('nav').classList.add('fixed-header');
        document.querySelector('nav div').classList.add('visible-title');
    } else {
        document.querySelector('nav').classList.remove('fixed-header');
        document.querySelector('nav div').classList.remove('visible-title');
    }

    if (distanceScrolled >= 50) {
        document.querySelector('.header-banner').classList.add('scaled-img');
    } else {
        document.querySelector('.header-banner').classList.remove('scaled-img');
    }

    /*
    if (distanceScrolled >= 80) {
        document.querySelector('.header-banner').style.filter = 'blur(10px)';
        console.log("fuck");
    } else {
        console.log("ok");
        document.querySelector('.header-banner').style.filter = 'none';
    }
    */
});
