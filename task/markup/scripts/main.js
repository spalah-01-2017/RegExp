console.log('%cТвоя реализация должна быть в этом файле \t ---->', 'font-size: 8px; font-weight: bold; color: blue');

var regForNameAndCountry = /^[A-Z][a-z]+$/;
var regForPhone = /^(\+|00)380\d{8}$/
var regForEmail = /^([\d\w\.]+)@([a-z0-9\.]+)\.([a-z\.]+)$/
var regForPassword = /((?=.*\d)(?=.*[a-z])){7,}/
var regForPostCode = /\d{5}/


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
	if (regForNameAndCountry.test(document.querySelector('#full-name').value)) {
		valid(document.querySelector('#full-name'));
	} else {
		invalid(document.querySelector('#full-name'));
	}
}
document.querySelector('#full-name').addEventListener('keyup', validName);
//-------------VALID COUNTRY-------------
function validCountry () {
	if (regForNameAndCountry.test(document.querySelector('#country').value)) {
		valid(document.querySelector('#country'));
	} else {
		invalid(document.querySelector('#country'));
	}
}
document.querySelector('#country').addEventListener('keyup', validCountry);
//-------------VALID PHONE-------------
function validPhone () {
	if (regForPhone.test(document.querySelector('#phone').value)) {
		valid(document.querySelector('#phone'));
	} else {
		invalid(document.querySelector('#phone'));
	}
}
document.querySelector('#phone').addEventListener('keyup', validPhone);
//-------------VALID EMAIL-------------
function validEmail () {
	if (regForEmail.test(document.querySelector('#email').value)) {
		valid(document.querySelector('#email'));
	} else {
		invalid(document.querySelector('#email'));
	}
}
document.querySelector('#email').addEventListener('keyup', validEmail);
//-------------VALID PASSWORD-------------
function validPassword () {
	if (regForPassword.test(document.querySelector('#psw').value)) {
		valid(document.querySelector('#psw'));
	} else {
		invalid(document.querySelector('#psw'));
	}
	if((document.querySelector('#psw').value.length >= 1) && (document.querySelector('#psw').value.length <= 3)) {
		document.querySelector('.psw-strength').setAttribute('style', 'display:block; width: 33%; background: red;');
	} else if(/[4-6]/.test(document.querySelector('#psw').value.length)) {
		document.querySelector('.psw-strength').setAttribute('style', 'display:block; width: 66%; background: orange;');
	} else if(document.querySelector('#psw').value.length >= 7) {
		document.querySelector('.psw-strength').setAttribute('style', 'display:block; width: 100%; background: green;');
	} else {
		document.querySelector('.psw-strength').setAttribute('style', 'display:block; width: 0%;');
	}
}
document.querySelector('#psw').addEventListener('keyup', validPassword);
//-------------VALID REPEAT PASSWORD-------------
function validRepeatPassword () {
	if ((document.querySelector('#psw').value) === (document.querySelector('#psw-r').value)) {
		valid(document.querySelector('#psw-r'));
	} else {
		invalid(document.querySelector('#psw-r'));
	}
}
document.querySelector('#psw-r').addEventListener('keyup', validRepeatPassword);
//-------------VALID POSTCODE-------------
function validPostCode () {
	if ((regForPostCode.test(document.querySelector('#postcode').value)) && (document.querySelector('#postcode').value.length <= 5)) {
		valid(document.querySelector('#postcode'));
	} else {
		invalid(document.querySelector('#postcode'));
	}
}
document.querySelector('#postcode').addEventListener('keyup', validPostCode);
//-------------VALID ADD-TEXT-------------
function validAddText () {
	document.querySelector('#char-count').textContent = (parseInt(document.querySelector('#char-count').textContent)) + 1
}
document.querySelector('#add-text').oninput = validAddText;

//-------------VALID SUBMIT-------------
function validSubmit (e) {
	e.preventDefault();
	var valid = true;
	document.querySelectorAll('input').forEach((input) => {
		input.classList.contains('valid') ? valid = true : valid = false;
	})
	if (valid){
		alert('Successfully registered');
	} else {
		document.querySelectorAll('input').forEach((input) => {
			if(input.classList = []) {
				input.classList.add('error')
			} 
		})
		alert('Fill all required field and verify your infromation');
	}
}
document.querySelector('button').addEventListener('click', validSubmit);