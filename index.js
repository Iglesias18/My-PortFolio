// EFEITO TEXTO

function writeTitle() {
	function activeWorld(element) {
		const arrText = element.innerHTML.split('');
		element.innerHTML = '';
		arrText.forEach((letra, i) => {
			setTimeout(() => {
				element.innerHTML += letra;
			}, 75 * i);
		})
	}
	const title = document.querySelector('.digitando');
	activeWorld(title);
}
writeTitle();

// MENU HAMBURGER

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


// SCROLL

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 60) {
		header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
