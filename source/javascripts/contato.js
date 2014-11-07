function formValidate() {
	$("#contact").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			ddd: {
				digits: true,
				required: true,
				maxlength: 2,
				minlength: 2
			},
			phone: {
				required: true,
				maxlength: 10
			},
			body: {
				required: true,
				maxlength: 2000
			}
		},

    messages: {
      name: "Digite seu nome",
			email: {
				required: "Digite seu email",
				email: "Digite um email válido"
			},
			subject: "Selectione um assunto",
			ddd: "Digite um DDD",
			phone: "Digite um telefone",
			body: "Digite uma mensagem",
    },

    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      var message = [];
      if (errors) {
        $("div.error-message").remove();

        $.each(validator.errorList, function(i, error){
          message.push(error.message);
        });

        var fullMessage = '<i class="fa fa-close"></i> Erro no envio do email. <br>' + message.join(", ") + ' e tente novamente.';
        $("<div class='error-message'><span></span></div>").insertBefore("form");
        $("div.error-message span").html(fullMessage);
        $("div.error-message").show();
        $(".fa-close").bind("click", function(){
          $("div.error-message").remove();
        });
      } else {
        $("div.error-message").remove();
      }
    },

    submitHandler: function(form) {
      form.submit();
      var fullMessage = "<div class='success-message'><i class='fa fa-check'></i> Seu email foi enviado com sucesso. Obrigado.</div>";
      $(fullMessage).insertBefore("form");
    }
	});
}

$(document).ready(function(){
  $('select').customSelect();
  $(".phone input").mask('9999-9999?9');
	$(".ddd input").mask('99');
  formValidate();
});
