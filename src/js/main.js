const burgerBtn = document.querySelector('.nav__burger--btn');
const navList = document.querySelector('.nav__list');
const footerYear = document.querySelector('.footer__year');

const contactForm = document.querySelector('.contact__form');
const formButton = document.querySelector('#form__button');

const errorBox = document.querySelector('.contact__error-box');
const errorParagraph = document.querySelector('.contact__error-message');

const formInputs = document.querySelectorAll('.form__input');

const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const titleInput = document.querySelector('#title-input');
const messageInput = document.querySelector('#message-input');

let emailRegex = new RegExp(
	"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
let errorText;
let validInputs = 0;

function handleNavbar() {
	console.log('ebebe');
	navList.classList.toggle('active');
}

function validateEmailInput() {
	if (!emailRegex.test(emailInput)) {
		emailInput.classList.add('error__input');
		console.log('EMAIL ZLY');
	} else if (emailInput.classList.contains('error__input')) {
		console.log('EMAIL DOBRY');
		emailInput.classList.remove('error__input');
	}
}

function validateInputs() {
	validInputs = 0;
	if (!messageInput.value.trim() || messageInput.value.length < 4) {
		errorText = `Popraw pole: ${messageInput.parentElement.querySelector('label').textContent}`;
		errorParagraph.textContent = errorText;
		errorBox.classList.add('error__active');
		messageInput.classList.add('error__input');
	} else {
		validInputs++;
		messageInput.classList.remove('error__input');
	}
	if (!titleInput.value.trim() || titleInput.value.length < 4) {
		errorText = `Popraw pole: ${titleInput.parentElement.querySelector('label').textContent}`;
		errorParagraph.textContent = errorText;
		errorBox.classList.add('error__active');
		titleInput.classList.add('error__input');
	} else {
		validInputs++;
		titleInput.classList.remove('error__input');
	}
	if (!emailInput.value.trim() || emailInput.value.length < 4) {
		errorText = `Popraw pole: ${emailInput.parentElement.querySelector('label').textContent}`;
		errorParagraph.textContent = errorText;
		errorBox.classList.add('error__active');
		emailInput.classList.add('error__input');
	} else {
		validInputs++;
		emailInput.classList.remove('error__input');
	}
	if (!nameInput.value.trim() || nameInput.value.length < 4) {
		errorText = `Popraw pole: ${nameInput.parentElement.querySelector('label').textContent}`;
		errorParagraph.textContent = errorText;
		errorBox.classList.add('error__active');
		nameInput.classList.add('error__input');
	} else {
		validInputs++;
		nameInput.classList.remove('error__input');
	}
	if (validInputs === 4) {
		errorText = '';
		errorBox.classList.remove('error__active');
		return true;
	}
}

function sendMessage(e) {
	// e.preventDefault();
	// validateInputs();
	// if (validateInputs()) contactForm.submit();
	validateInputs();
	console.log('wyslana wiadomosc');
}

burgerBtn.addEventListener('click', handleNavbar);
contactForm.addEventListener('submit', sendMessage);
