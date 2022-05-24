const burgerBtn = document.querySelector('.nav__burger--btn');
const navList = document.querySelector('.nav__list');
const footerYear = document.querySelector('.footer__year');

function handleNavbar() {
	console.log('ebebe');
	navList.classList.toggle('active');
}

function getDate() {
	const date = new Date().getFullYear();
	footerYear.textContent = date;
}
getDate();

burgerBtn.addEventListener('click', handleNavbar);
