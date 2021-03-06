const burgerBtn = document.querySelector('.nav__burger--btn');
const navList = document.querySelector('.nav__list');
const footerYear = document.querySelector('.footer__year');

const contactForm = document.querySelector('.contact__form');
const formButton = document.querySelector('#form__button');
const popup = document.querySelector('.popup__wrapper');

const errorBox = document.querySelector('.contact__error-box');
const errorParagraph = document.querySelector('.contact__error-message');

const formInputs = document.querySelectorAll('.form__input');

const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const titleInput = document.querySelector('#title-input');
const messageInput = document.querySelector('#message-input');

const contactSpinner = document.querySelector('.loading-box');

footerYear.textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.nav__list--item');
navLinks.forEach(link =>
	link.addEventListener('click', () => {
		navList.classList.remove('active');
	})
);

let emailRegex = new RegExp(
	"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
let errorText;
let validInputs = 0;

function handleNavbar() {
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

async function sendMessage(e) {
	e.preventDefault();
	contactForm.classList.add('fade');
	contactSpinner.classList.add('active-spinner');
	if (validateInputs()) {
		const contactFormData = new FormData();
		contactFormData.append(nameInput.name, nameInput.value);
		contactFormData.append(emailInput.name, emailInput.value);
		contactFormData.append(titleInput.name, titleInput.value);
		contactFormData.append(messageInput.name, messageInput.value);
		await axios
			.post('/formscript.php', contactFormData)
			.then(res => {
				contactForm.classList.remove('fade');
				contactSpinner.classList.remove('active-spinner');
				popup.classList.add('popup-active');
				setTimeout(() => {
					popup.classList.remove('popup-active');
				}, 3000);
			})
			.catch(err => {
				contactForm.classList.remove('fade');
				contactSpinner.classList.remove('active-spinner');
				console.log(err);
			});
	} else {
		contactForm.classList.remove('fade');
		contactSpinner.classList.remove('active-spinner');
	}
}

console.log(nameInput.value);
burgerBtn.addEventListener('click', handleNavbar);
contactForm.addEventListener('submit', sendMessage);
console.log(
	`  %c                                                                                                                                                                                                                           
												((,,,(&                                 
													&((((((((%,                           
													%(((((((((,,%                       
														/(((@@@(((((,%*@@&                
											&((#%.      %((@@@ &((& @@@                 
											&(%(/    ,@%((#%@@@@@%@@@@%%&%               
			%                              ((%         ,*****@(((((((@*****&            
			.&&                   @        @((       % #**%     @@@@%   *#***.           
			/   .,#               &((.     ((%    @((*  @&              %,( *#           
			&%     &,*             *(((#   *((%  #(((/               %,,.   %/@           
			,(    ,(                 ((((((((((((((&                  &,.     ,           
			*&#((&               &%*(((((((((((((#%%                 .(&(%,,,,          
				. %#             (  .(((((((((((((#  (%               &#(%               
					%#         #&   .(((%(%((%(&@(#   #(            (%                   
						%(     ((     ((#&(%((%((((%%     %%        *&                     
						%&  (&      ,(((((((((((((&       (&    &@                       
							((((.      (%(@(##(#@%((%        @( #&                         
							.((%       %((((((((((&(#       *(((                           
							&@     .#@(((((((((((((&        (((                           
#(((((((((((((((((((((((((((((((((%(((#((&(( (((((%(((.     &                            
	. %#(((((((((((((((((((((((#((((&%       &  (&   ((((&                               
				*#&&%*..*(%&,#(((%                       #(((%                            
							%(@                    .       #(&                            
						%(% @((   #((&         &(%(#  %((# #((%                         
						((%  #(((((&    (       %     *(((((&    &(#                      
								(         *   &                                           

									\n
Na ??cianach ????ciny nie znajdziesz szczeciny
`,
	'color:#85a3c9'
);

const buttonZwijacz = document.querySelector('.button-zwijacz');
const specialityBox = document.querySelectorAll('.speciality__box--text');
