(function(){
	document.querySelector('.ink-form').addEventListener('submit', validate);
	document.querySelector('#psw').addEventListener('input', pswStrength);
	document.querySelector('#add-text').addEventListener('input', charCount);

	emailFieldNode = document.querySelector('#email');
	emailFieldNode.oncopy = emailFieldNode.onpaste = emailFieldNode.oncut = function() { return false; };

	//решил сделать что-то типа мини валидатора, в котором нужно указывать в атрибуте data-validator тип валидатора, 
	//а все остальное будет происходить автоматически, результате получилось запутанно и скорее всего хуже чем
	//если бы делал по обычному - просто бы брал поля по id и проверял
	function validate(e){
		
		validators = {
			reg: {
				name: /^.{2,}$/,
				phone: /^(\+|00)?380\d{9}$/,
				email: /^[\w\.-]{2,}@[A-Za-z-]{2,}\.[A-Za-z]{2,}(\.[A-Za-z]{2,})*$/,
				password: /(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
				country: /^.{2,}$/,
				postcode: /^\d{5}$/

			},
			func: {
				repassword: function(str){
					if(str !== '' && str === document.querySelector('input[data-validator=password]').value)
						return true
					else 
						return false
				}
			}
		}
		let formFields = {};
		let errors = []
		Array.prototype.forEach.call(document.querySelectorAll('.ink-form input, .ink-form textarea'), function (el, i)
        {
        	if(validators.reg[el.dataset.validator] && el.dataset.validator){
        		if(validators.reg[el.dataset.validator].test(el.value.trim()) === false){
	        		el.classList.remove('valid')
	        		el.classList.add('error')
	        		errors.push(el.id);
	        	}
	        	else{
	        		el.classList.remove('error')
	        		el.classList.add('valid')
        		}
        	}
        	else if(validators.func[el.dataset.validator] && el.dataset.validator){
        		if(validators.func[el.dataset.validator](el.value.trim()) === false){
	        		el.classList.remove('valid')
	        		el.classList.add('error')
	        		errors.push(el.id);
	        	}
	        	else{
	        		el.classList.remove('error')
	        		el.classList.add('valid')
        		}
        	}
        	else{
        		el.classList.add('valid')
        	}
        });

		if(errors.length>0){
			e.preventDefault();
			alert('Fill all required field and verify your infromation')
		}
		else
			alert('Successfully registered')
			
	}

	function pswStrength(){
		let psw = document.querySelector('#psw').value;
		let pswIndStyles = document.querySelector('.psw-strength').style;
		if(psw.length === 0)
			pswIndStyles.width = '0';
		else if(psw.length > 0 && psw.length < 4){
			pswIndStyles.cssText = 'display:block;width:25%;background-color:red;';
		}
		else if(psw.length > 3 && psw.length < 7){
			pswIndStyles.cssText = 'display:block;width:50%;background-color:orange;';
		}
		else{
			pswIndStyles.cssText = 'display:block;width:100%;background-color:green;';
		}
	}

	function charCount(){
		document.querySelector('#char-count').innerHTML = document.querySelector('#add-text').value.length;
	}
}
	
)()