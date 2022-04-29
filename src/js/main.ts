// function hello(compiler: string) {
// 	console.log(`Hello from ${compiler}`);
// }
// hello('TypeScript');
// console.log('To jest tpyescript');

const burgerBtn: HTMLButtonElement = document.querySelector('.nav__burger--btn');
const navList: HTMLUListElement = document.querySelector('.nav__list');

function handleNavbar() {
	console.log('ebebe');
	navList.classList.toggle('active');
}

burgerBtn.addEventListener('click', handleNavbar);
