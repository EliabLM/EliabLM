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

// Modal
const btnTip = document.getElementById('btn-tip-calculator');
const modalTip = document.getElementById('modal-tip-calculator');
const btnPractico = document.getElementById('btn-practico-javascript');
const modalPractico = document.getElementById('modal-practico-javascript');
const btnQuote = document.getElementById('btn-quote-generator');
const modalQuote = document.getElementById('modal-quote-generator');
const btnPortfolio = document.getElementById('btn-portfolio');
const modalPortfolio = document.getElementById('modal-portfolio');

abrirYCerrarModal(btnTip, modalTip);
abrirYCerrarModal(btnPractico, modalPractico);
abrirYCerrarModal(btnQuote, modalQuote);
abrirYCerrarModal(btnPortfolio, modalPortfolio);

function abrirYCerrarModal(btn, modal) {
	// Abrir
	btn.addEventListener('click', function () {
		modal.classList.add('open-modal');
	});

	// Cerrar
	const btnClose = document.querySelectorAll('.btn-close');
	btnClose.forEach(function (btn) {
		btn.addEventListener('click', function () {
			modal.classList.remove('open-modal');
		});
	});
}

`Cerrar modal cuando de click fuera del cuadro`;
// window.addEventListener('mouseup', function (event) {
// 	if (event.target != modalContent && event.target.parentNode != modalContent) {
// 		console.log(event.target);
// 		modalTip.classList.remove('open-modal');
// 	}
// });

// Resize textarea
const inputText = document.getElementById('mensaje-form');
inputText.style.cssText = `height: ${inputText.scrollHeight}px; overflow-y: hidden`;

inputText.addEventListener('input', function () {
	this.style.height = 'auto';
	this.style.height = `${this.scrollHeight}px`;
});

// Submit del formulario
const $form = document.getElementById('form');
const $buttonMailto = document.getElementById('mailto');

$form.addEventListener('submit', function (event) {
	event.preventDefault();
	const form = new FormData(this);
	$buttonMailto.setAttribute(
		'href',
		`mailto:eliablopez@hotmail.com?subject=${form.get('name')} ${form.get(
			'email'
		)}&body=${form.get('message')}`
	);
	$buttonMailto.click();
});
