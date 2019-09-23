$(function () {
	
	$('body').on('submit', '.loan-in-phone__form, .help-contacts__form', function(e) {
		
		e.preventDefault();
		
		var $this = $(this);
		var phone = $(this).find('input[type="tel"]').val();
		
		//console.log( phone.length );
		
		if(phone.length==0 || phone.indexOf('_')>0) {
			$this.find(".form-input-note").html("Укажите корректный номер телефона");
		} else {
			$this.find(".form-input-note").html("");
			$.post('/ajax/form_phone.php', {phone: phone}, function( data ) {
				//console.log( data );
				$this.find(".form-input-note").html( data );
				$this.find('input[type="tel"]').val("")
			});	
		}
		
		
	});	

	
	
});	