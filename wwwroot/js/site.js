// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// * Menu action
const menuBtn = document.getElementById('nav-cta');
const nav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
	nav.classList.toggle('menu-active');
});
