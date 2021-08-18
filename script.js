// Nav toggle
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
});

// Fixed navbar
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

window.onscroll = function () {
	if (window.scrollY > sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
};
