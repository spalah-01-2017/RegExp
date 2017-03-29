// All regexp
var regName = /[\d\w]{2,}/,
	regPhone = /(380[\d]{7})|(\+380[\d]{7})|(0[\d]{7})|(00380[\d]{7})/,
	regEmail = /\w+@[a-z]+?\.[a-z]{2,6}/i,
	regPassword = /^(?=.*\d)(?=.*[a-z]).{7,}$/,
	regCountry = /[\d\w]{2,}/,
	regIndex = /^\d{5}$/;

// Validate
function validate(form) {
	// Form variables
	var form = document.getElementById('r-form'),
		name = document.getElementById('full-name'),
		phone = document.getElementById('phone'),
		email = document.getElementById('email'),
		password = document.getElementById('psw'),
		passwordR = document.getElementById('psw-r'),
		country = document.getElementById('country'),
		postcode = document.getElementById('postcode'),
		text = document.getElementById('add-text'),
		errors = [];

	// Validate name
	if (!regName.test(name.value)) {
		name.classList.add('error');
		name.classList.remove('valid');
		errors.push(' ');
	}

	if (regName.test(name.value)) {
		name.classList.remove('error');
		name.classList.add('valid');
	}

	// Validete phone
	if (!regPhone.test(phone.value)) {
		phone.classList.add('error');
		phone.classList.remove('valid');
		errors.push(' ');
	}

	if (regPhone.test(phone.value)) {
		phone.classList.remove('error');
		phone.classList.add('valid');
	}

	// Validate email
	if (!regEmail.test(email.value)) {
		email.classList.add('error');
		email.classList.remove('valid');
		errors.push(' ');
	}

	if (regEmail.test(email.value)) {
		email.classList.remove('error');
		email.classList.add('valid');
	}

	// Validate password
	if (!regPassword.test(password.value)) {
		password.classList.add('error');
		password.classList.remove('valid');
		errors.push(' ');
	}

	if (regPassword.test(password.value)) {
		password.classList.remove('error');
		password.classList.add('valid');;
	}

	// Validate password repeat
	if (password.value !== passwordR.value) {
		passwordR.classList.add('error');
		passwordR.classList.remove('valid');
		errors.push(' ');
	}

	if (password.value === passwordR.value) {
		passwordR.classList.remove('error');
		passwordR.classList.add('valid');
	}

	// Validate country
	if (!regCountry.test(country.value)) {
		country.classList.add('error');
		country.classList.remove('valid');
		errors.push(' ');
	}

	if (regCountry.test(country.value)) {
		country.classList.remove('error');
		country.classList.add('valid');
	}

	// Validate postcode
	if (!regIndex.test(postcode.value)) {
		postcode.classList.add('error');
		postcode.classList.remove('valid');
		errors.push(' ');
	}

	if (regIndex.test(postcode.value)) {
		postcode.classList.remove('error');
		postcode.classList.add('valid');
	}

	// Errors array
	if (errors.length > 0) {
		console.log(errors.length);
		return false;
	}

	alert("Successfully registered");
	return true;
}

// Password strength
var pswStrength = document.querySelector('.psw-strength');
var pswInput = document.getElementById('psw');

pswInput.addEventListener('input', function() {
	if(this.value.length > 0 && this.value.length < 4) {
		pswStrength.style.display = "block";
		pswStrength.style.width = "25%";
		pswStrength.style.background = "#f00";
	}

	if(this.value.length > 3 && this.value.length < 7) {
		pswStrength.style.width = "50%";
		pswStrength.style.background = "#f56209";
	}

	if(this.value.length > 6) {
		pswStrength.style.width = "100%";
		pswStrength.style.background = "#0f0";
	}
});


// Don`t paste on email
document.getElementById('email').oncopy = document.getElementById('email').onpaste = document.getElementById('email').oncut = function() {
	return false;
}

// Additional information
var addInfo = document.getElementById('add-text'),
	counter = document.getElementById('char-count'),
	num = Number(counter.textContent);
	console.log(num);

function changeCounter(e) {
	num++;
	counter.innerHTML = num;
}

addInfo.addEventListener('input', changeCounter);


