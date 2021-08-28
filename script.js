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

const btnClose = document.querySelectorAll('.btn-close');

abrirYCerrarModal(btnTip, modalTip);
abrirYCerrarModal(btnPractico, modalPractico);

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
