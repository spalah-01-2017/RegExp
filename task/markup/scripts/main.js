console.log('%cТвоя реализация должна быть в этом файле \t ---->', 'font-size: 8px; font-weight: bold; color: blue');

var regForNameAndCountry = /^[A-Z][a-z]+$/;
var regForPhone = /^(\+|00)380\d{9}$/
var regForEmail = /^([\d\w\.]+)@([a-z0-9\.]+)\.([a-z\.]+)$/
var regForPassword = /((?=.*\d)(?=.*[a-z])){7,}/
var regForPostCode = /\d{5}/

var fullName = document.querySelector('#full-name'),
		country = document.querySelector('#country'),
		phone = document.querySelector('#phone'),
		email = document.querySelector('#email'),
		password = document.querySelector('#psw'),
		returnPassword = document.querySelector('#psw-r'),
		pasStrength = document.querySelector('.psw-strength'),
		postCode = document.querySelector('#postcode'),
		addText = document.querySelector('#add-text'),
		charCounter = document.querySelector('#char-count')

var inputs = document.querySelectorAll('input'),
		button = document.querySelector('button')





function valid(el) {
	el.classList.remove('error');
	el.classList.add('valid');
}

function invalid(el) {
	el.classList.remove('valid');
	el.classList.add('error');
}
//-------------VALID NAME-------------
function validName () {
	if (regForNameAndCountry.test(fullName.value)) {
		valid(fullName);
	} else {
		invalid(fullName);
	}
}
fullName.addEventListener('keyup', validName);
//-------------VALID COUNTRY-------------
function validCountry () {
	if (regForNameAndCountry.test(country.value)) {
		valid(country);
	} else {
		invalid(country);
	}
}
country.addEventListener('keyup', validCountry);
//-------------VALID PHONE-------------
function validPhone () {
	if (regForPhone.test(phone.value)) {
		valid(phone);
	} else {
		invalid(phone);
	}
}
phone.addEventListener('keyup', validPhone);
//-------------VALID EMAIL-------------
function validEmail () {
	if (regForEmail.test(email.value)) {
		valid(email);
	} else {
		invalid(email);
	}
}
email.addEventListener('keyup', validEmail);
//-------------VALID PASSWORD-------------
pasStrength.style.display = 'block';
function validPassword () {
	if (regForPassword.test(password.value)) {
		valid(password);
	} else {
		invalid(password);
	}
	if((password.value.length >= 1) && (password.value.length <= 3)) {
		pasStrength.setAttribute('style', 'display:block; width: 33%; background: red;');
	} else if(/[4-6]/.test(password.value.length)) {
		pasStrength.setAttribute('style', 'display:block; width: 66%; background: orange;');
	} else if(password.value.length >= 7) {
		pasStrength.setAttribute('style', 'display:block; width: 100%; background: green;');
	} else {
		pasStrength.setAttribute('style', 'display:block; width: 0%;');
	}
}
password.addEventListener('keyup', validPassword);
//-------------VALID REPEAT PASSWORD-------------
function validRepeatPassword () {
	if (returnPassword.value === password.value) {
		valid(returnPassword);
	} else {
		invalid(returnPassword);
	}
}
returnPassword.addEventListener('keyup', validRepeatPassword);
//-------------VALID POSTCODE-------------
function validPostCode () {
	if ((regForPostCode.test(postCode.value)) && (postCode.value.length <= 5)) {
		valid(postCode);
	} else {
		invalid(postCode);
	}
}
postCode.addEventListener('keyup', validPostCode);
//-------------VALID ADD-TEXT-------------
function validAddText () {
	charCounter.textContent = addText.value.length;
}
addText.oninput = validAddText;

//-------------VALID SUBMIT-------------
function validSubmit (e) {
	e.preventDefault();
	var valid = [];
	inputs.forEach((input) => {
		input.classList.contains('valid') ? valid.push(true) : valid.push(false);
	})
	if (valid.indexOf(false) + 1){
		inputs.forEach((input) => {
			if(input.classList = []) {
				input.classList.add('error')
			} 
		})
		alert('Fill all required field and verify your infromation');
	} else {
		alert('Successfully registered');
	}
}
button.addEventListener('click', validSubmit);
