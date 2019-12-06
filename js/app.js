(function(){
	
	//variables
	const email = document.querySelector('#email');
	const asunto = document.querySelector('#asunto');
	const mensaje = document.querySelector('#mensaje');
	const btnEnviar = document.querySelector('#enviar');
	const formulario = document.querySelector('#enviar-mail');
	const btnReset = document.querySelector('#resetBtn');
	
	const isEmpty = function(campo){
		return campo.value.length <= 0;
	};
	const isEmail = function(campo){
		if(campo.value.indexOf('@') === -1){
			return false;	
		}
		
		return true;
	};
	const showError = function(campo){
		campo.classList.add('error');
		campo.classList.remove('success');
	};
	const showSuccess = function(campo){
		campo.classList.remove('error');
		campo.classList.add('success');
	};
	
	const validateField = function(){
		
		if(isEmpty(this)){
			showError(this);
		} else {
			showSuccess(this);
		}
		
		if(this.type === 'email') {
			if(! isEmail(this) ) {
				showError(this);
			}
		}
		
		
		let errores = document.querySelectorAll('.error');
		if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
			if(errores.length === 0){
				btnEnviar.disabled = false;
			}
			
		}
	};
	
	const enviarFormulario = function(e){
		e.preventDefault();
		
		let spinner = document.querySelector('#spinner');
		spinner.style.display = 'block';
		
		let imgEnviado = document.createElement('img');
		imgEnviado.src = 'img/mail.gif';
		
		setTimeout(function(){
			spinner.style.display = 'none';
			document.querySelector('#loaders').appendChild(imgEnviado);
			
			setTimeout(function(){
				imgEnviado.remove();
				formulario.reset();
			}, 5000);
			
		},3000);		
	};
	
	const resetFormulario = function(e){
		e.preventDefault();
		formulario.reset();
	}
	
	const initApp = function(e){
		
		email.addEventListener('blur', validateField);
		asunto.addEventListener('blur', validateField);
		mensaje.addEventListener('blur', validateField);
		
		formulario.addEventListener('submit', enviarFormulario);
		btnReset.addEventListener('click', resetFormulario)
	}
	
	
	
	//init
	document.addEventListener('DOMContentLoaded', initApp);
	
	
})();