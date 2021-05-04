const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show() {
    navLinks.classList.remove('hide');
    navLinks.classList.add('show');
    closeMenu.style.display= 'block'
    openMenu.style.display = 'none'
    // navLinks.style.top = '0';
}

function close() {
    navLinks.classList.remove('show');
    navLinks.classList.add('hide');
    closeMenu.style.display= 'none'
    openMenu.style.display = 'block'
}