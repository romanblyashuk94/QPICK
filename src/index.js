const menuRef = document.querySelector('.menu');
const menuBtnRef = document.querySelector('.header__button--menuBtn');
const mobileMenuRef = document.querySelector('.mobileMenu');
const mobileMenuBtnRef = document.querySelector('.mobileMenuBtnItem');

menuBtnRef.addEventListener('click', () => {
  menuRef.classList.toggle('menu--open');
});

mobileMenuBtnRef.addEventListener('click', () => {
  mobileMenuRef.classList.toggle('mobileMenu--open');
});
