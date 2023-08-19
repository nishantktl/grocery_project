let header = document.querySelector('.header');

document.querySelector('#search').onclick = () => {
    searchForm.classList.toggle('active');
    carts.classList.remove('active');
    form.classList.remove('active');
    header.classList.remove('active'); // Update this line
}

let carts = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () => {
    searchForm.classList.remove('active');
    carts.classList.toggle('active');
    form.classList.remove('active');
    header.classList.remove('active'); // Update this line
}

let form = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    searchForm.classList.remove('active');
    carts.classList.remove('active');
    form.classList.toggle('active');
    header.classList.remove('active'); // Update this line
}

let nav = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    searchForm.classList.remove('active');
    carts.classList.remove('active');
    form.classList.remove('active');
    nav.classList.toggle('active');
    header.classList.remove('active'); // Update this line
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    carts.classList.remove('active');
    form.classList.remove('active');
    nav.classList.remove('active');
    header.classList.remove('active'); // Update this line
}




