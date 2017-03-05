function submitSignUpForm(thisform){

	//clear everything
	var error_message = '';
	$("#submit_button").blur();
	$('#sign_up_form input').each(function(index,data) {
		$(this).removeClass('error-border').removeClass('error-text').removeClass('error-background');
    });
	//$('#sign_up_info_and_error').empty().removeClass('error-text').removeClass('error-border').html('All Information Required');


	//find errors
	var form_error_array = validateSignUpForm(thisform);
	if(form_error_array.error){
		//$('#sign_up_info_and_error').addClass('error-text').addClass('error-border');

		for (var key in form_error_array) {
			if (key != 'error' && form_error_array.hasOwnProperty(key)){
				error_message = error_message + form_error_array[key] + ' ';
	
				if($('#'+key).is(':radio') || $('#'+key).is(':checkbox')){
					$('label[for='+key+']').addClass('error-border');
				}else{
					$('#'+key).addClass('error-border').addClass('error-text').addClass('error-background');
				}
			}
		}

		//$('#sign_up_info_and_error').empty().html(error_message);
	}else{
		thank_you_message = '';
		sign_up_first_name = '';
		sign_up_last_name = '';
		sign_up_email = '';
		sign_up_password = '';
		sign_up_terms = '';

		$('input').each(function(index,data) {
			if($(this).attr('name') == 'sign_up_first_name'){
				sign_up_first_name = $(this).val();
			}
			if($(this).attr('name') == 'sign_up_last_name'){
				sign_up_last_name = $(this).val();
			}
			if($(this).attr('name') == 'sign_up_email'){
				sign_up_email = $(this).val();
			}
			if($(this).attr('name') == 'sign_up_password'){
				sign_up_password = $(this).val();
			}
			if($(this).attr('name') == 'sign_up_terms'){
				sign_up_terms = $(this).val();
			}

			if($(this).val() != null && $(this).val() != '' && $(this).val() != 'sending_data'){
				if($(this).attr('name') == 'sign_up_password'){
					thank_you_message = thank_you_message +
					'<tr><td align="left">'+$(this).attr('name').replace('sign_up_', '').replace('_', ' ')+'</td><td align="left">&bull;&bull;&bull;&bull;</td></tr>';
				}else if($(this).attr('name') == 'sign_up_terms'){
					thank_you_message = thank_you_message +
					'<tr><td align="left">'+$(this).attr('name').replace('sign_up_', '').replace('_', ' ')+'</td><td align="left">agreed</td></tr>';
				}else{
					thank_you_message = thank_you_message +
					'<tr><td align="left">'+$(this).attr('name').replace('sign_up_', '').replace('_', ' ')+'</td><td align="left">'+$(this).val()+'</td></tr>';
				}
			}
		});

		thank_you_message = '<p class="justify">'
		+'<b>'+sign_up_first_name+' '+sign_up_last_name+'</b>, thank you for creating an account with CH.com. '
		+'An email has been sent to <b>'+sign_up_email+'</b> to activate your account. '
		+'When you activate your account you can use all the website features such as the dashboard, '
		+'buy and sell recommendations, analysis, charting, back testing, and notifications.</p>'
		+'<div class="table-responsive nomargin mt20">'
		+'<table class="table table-striped table-bordered nomargin">'
		+thank_you_message
		+'</table>'
		+'</div>';

		return_message = signUpByAjax(thank_you_message, sign_up_first_name, sign_up_last_name, sign_up_email, sign_up_password, sign_up_terms);
	}

	return false;
}

function signUpByAjax(thank_you_message, sign_up_first_name, sign_up_last_name, sign_up_email, sign_up_password, sign_up_terms){

	var parameters = 'action=get'
	+'&sign_up_first_name='+sign_up_first_name+'&sign_up_last_name='+sign_up_last_name
	+'&sign_up_email='+sign_up_email+'&sign_up_password='+sign_up_password+'&sign_up_terms='+sign_up_terms;

	var return_message = null;
	$.ajax({
		type: "POST",
		url: 'main/sign_up_by_ajax',
		data: parameters,
		dataType : "json",
		success: function(full_data) {

			//Get All Data From Server Array
			ajax_first_name = full_data.ajax_first_name;
			ajax_last_name = full_data.ajax_last_name;
			ajax_email = full_data.ajax_email;

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'sign_up_success'){
				$('#sign_up_info_and_error').empty().removeClass('error').html(thank_you_message);
				$('#sign_up_form').hide();
			}else if(ajax_result == 'sign_up_error'){
				$('#sign_up_info_and_error').empty().addClass('error').html('<p class="justify text-center error"><span class="fi-alert"></span> '+ajax_message+' <span class="fi-alert"></span></p>');
				$('#sign_up_email').addClass('error-border').addClass('error-text').addClass('error-background');

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return return_message;
}

function submitSignInForm(thisform){

	//clear everything
	var error_message = '';
	$("#submit_button").blur();
	$('#sign_in_form input').each(function(index,data) {
		$(this).removeClass('error-border').removeClass('error-text').removeClass('error-background');
    });
	//$('#sign_in_info_and_error').empty().removeClass('error-text').removeClass('error-border').html('Email & Password Required');


	//find errors
	var form_error_array = validateSignInForm(thisform);
	if(form_error_array.error){
		//$('#sign_in_info_and_error').addClass('error-text').addClass('error-border');

		for (var key in form_error_array) {
			if (key != 'error' && form_error_array.hasOwnProperty(key)){
				error_message = error_message + form_error_array[key] + ' ';
	
				if($('#'+key).is(':radio') || $('#'+key).is(':checkbox')){
					$('label[for='+key+']').addClass('error-border');
				}else{
					$('#'+key).addClass('error-border').addClass('error-text').addClass('error-background');
				}
			}
		}

		//$('#sign_in_info_and_error').empty().html(error_message);
	}else{
		sign_in_email = '';
		sign_in_password = '';
		$('input').each(function(index,data) {
			if($(this).attr('name') == 'sign_in_email'){
				sign_in_email = $(this).val();
			}
			if($(this).attr('name') == 'sign_in_password'){
				sign_in_password = $(this).val();
			}
		});

		return_message = signInByAjax(sign_in_email, sign_in_password);
	}

	return false;
}

function signInByAjax(sign_in_email, sign_in_password){

	var parameters = 'action=get&sign_in_email='+sign_in_email+'&sign_in_password='+sign_in_password;

	var return_message = null;
	$.ajax({
		type: "POST",
		url: 'main/sign_in_by_ajax',
		data: parameters,
		dataType : "json",
		success: function(full_data) {

			//Get All Data From Server Array
			ajax_email = full_data.ajax_email;
			ajax_password = full_data.ajax_password;

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'sign_in_success'){
				//window.location.replace("main/dashboard");

				var base_url = location.protocol + '//' + location.host;
				if(location.host == 'localhost'){
					base_url = base_url + '/chawkhawk/'
				}else{
					base_url = base_url + '/'
				}

			    var ua = window.navigator.userAgent;
			    var ie_old = ua.indexOf('MSIE ');
			    var ie_new = ua.indexOf('Trident/');
			    var mozilla = ua.indexOf('Mozilla/');
			    var chrome = ua.indexOf('Chrome/');
			    var safari = ua.indexOf('Safari/');
				if ((ie_old > -1) || (ie_new > -1)){
					window.location = base_url + "main/dashboard";
				}else{
					window.location.replace(base_url + "main/dashboard");
				}
			}else if(ajax_result == 'sign_in_error'){
				$('#sign_in_info_and_error').empty().addClass('error-text').html(ajax_message);

			}else if(ajax_result == 'profile_error'){
				$('#sign_in_info_and_error').empty().addClass('error-text').html(ajax_message);
			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return return_message;
}