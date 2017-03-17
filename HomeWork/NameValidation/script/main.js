let pattern = /^(\b[A-Z][a-z]+\b ){1,2}\b[A-Z][a-z]+\b$/;
let input = document.querySelector('input');
let label = document.querySelector('.test-names')

function nameValidation (e) {
	if (!pattern.test(input.value)) {
		label.classList.add('error');
		label.classList.remove('no-error');
		
	} else {
		label.classList.remove('error');
		label.classList.add('no-error');
	}
}

input.addEventListener('input', nameValidation)
