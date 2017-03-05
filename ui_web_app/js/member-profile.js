var member_profile = null;
function getProfileByAJAX(){

	var parameters = 'action=get';

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/get_profile_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_profile = full_data.ajax_profile;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'profile_success'){
				member_profile = ajax_profile;
				$('#profile_first_name').val(member_profile.first_name);
				$('#profile_last_name').val(member_profile.last_name);
				$('#profile_email').val(member_profile.email);
				if(member_profile.city)
					$('#profile_city').val(member_profile.city);
				if(member_profile.state)
					$('#profile_state').val(member_profile.state);
				
				$('#default_risk'+member_profile.risk).prop('checked',true);
				$('#default_bt_range'+member_profile.bt_range).prop('checked',true);
				
				$('#account_level'+member_profile.level).prop('checked',true);
				$('#payment_amount').html('$'+member_profile.level);
			}else if(ajax_result == 'profile_error'){
			}

            $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
//-------------------------------------------
function cancelProfile(){
	$('#profile_first_name').val('').prop('disabled', true);
	$('#profile_last_name').val('').prop('disabled', true);
	$('#profile_email').val('');
	$('#profile_password').prop('disabled', true);
	$('#profile_state').prop('disabled', true);
	$('#profile_city').prop('disabled', true);
	
	$('#profile_cancel_button').addClass('hide').hide();
	$('#profile_edit_button').removeClass('hide').show();
	$('#profile_save_button').addClass('hide').hide();
}
function editProfile(){
	$('#profile_first_name').val(member_profile.first_name).prop('disabled', false);
	$('#profile_last_name').val(member_profile.last_name).prop('disabled', false);
	$('#profile_email').val(member_profile.email);
	$('#profile_password').prop('disabled', false);
	$('#profile_state').prop('disabled', false);
	$('#profile_city').prop('disabled', false);
	
	if(member_profile.city)
		$('#profile_city').val(member_profile.city);
	if(member_profile.state)
		$('#profile_state').val(member_profile.state);

	$('#profile_cancel_button').removeClass('hide').show();
	$('#profile_edit_button').addClass('hide').hide();
	$('#profile_save_button').removeClass('hide').show();
}
function submitProfileForm(thisform){

	//clear everything
	var error_message = '';
	$("#profile_save_button").blur();
	$('#profile_form input').each(function(index,data) {
		$(this).removeClass('error-border').removeClass('error-text').removeClass('error-background');
    });
	$('#profile_info_and_error').empty().removeClass('error-text').removeClass('error-border').html('Email & Password Required');

	//find errors
	var form_error_array = validateProfileForm(thisform);
	if(form_error_array.error){
		$('#profile_info_and_error').addClass('error-text').addClass('error-border');
	}
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
	if(form_error_array.error){
		$('#profile_info_and_error').empty().html(error_message);
		return false;
	}else{
		member_profile.first_name = $('#profile_first_name').val();
		member_profile.last_name = $('#profile_last_name').val();
		if($('#profile_password').val().length !== 0)
			member_profile.password = $('#profile_password').val();
		
		if($('#profile_city').val().length !== 0)
			member_profile.city = $('#profile_city').val();
		else
			member_profile.city = null;
		if($('#profile_state').val().length !== 0)
			member_profile.state = $('#profile_state').val();
		else
			member_profile.state = null;
		
		$('#profile_first_name').prop('disabled', true);
		$('#profile_last_name').prop('disabled', true);
		$('#profile_password').val('').prop('disabled', true);
		$('#profile_city').prop('disabled', true);
		$('#profile_state').prop('disabled', true);

		$('#profile_cancel_button').addClass('hide').hide();
		$('#profile_edit_button').removeClass('hide').show();
		$('#profile_save_button').addClass('hide').hide();
		
		saveProfileByAJAX();
		return true;
	}
}
function saveProfileByAJAX(){

	var parameters = 'action=get'
	+'&first_name='+member_profile.first_name+'&last_name='+member_profile.last_name;
	if(member_profile.password || member_profile.password != null)
		parameters = parameters + '&password=' + member_profile.password;

	if(member_profile.city || member_profile.city != null)
		parameters = parameters + '&city=' + member_profile.city;
	if(member_profile.state || member_profile.state != null)
		parameters = parameters + '&state=' + member_profile.state;

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/save_profile_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'profile_save_success'){
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message).fadeOut(5000);
				}
			}else if(ajax_result == 'profile_save_error'){
			}

            $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
//-------------------------------------------
function cancelDefaults(){
	$('input[name=default_risk]:checked').prop('checked',false);
	$('input[name=default_bt_range]:checked').prop('checked',false);
	$('#default_risk'+member_profile.risk).prop('checked',true);
	$('#default_bt_range'+member_profile.bt_range).prop('checked',true);
	
	$('#default_riskC').prop('disabled', true);
	$('#default_riskM').prop('disabled', true);
	$('#default_riskA').prop('disabled', true);

	$('#default_bt_range1').prop('disabled', true);
	$('#default_bt_range2').prop('disabled', true);
	$('#default_bt_range3').prop('disabled', true);
	$('#default_bt_range5').prop('disabled', true);
	$('#default_bt_range10').prop('disabled', true);
	
	$('#default_cancel_button').addClass('hide').hide();
	$('#default_edit_button').removeClass('hide').show();
	$('#default_save_button').addClass('hide').hide();
}
function editDefaults(){
	$('#default_riskC').prop('disabled', false);
	$('#default_riskM').prop('disabled', false);
	$('#default_riskA').prop('disabled', false);

	$('#default_bt_range1').prop('disabled', false);
	$('#default_bt_range2').prop('disabled', false);
	$('#default_bt_range3').prop('disabled', false);
	$('#default_bt_range5').prop('disabled', false);
	$('#default_bt_range10').prop('disabled', false);

	$('#default_cancel_button').removeClass('hide').show();
	$('#default_edit_button').addClass('hide').hide();
	$('#default_save_button').removeClass('hide').show();
}
function saveDefaults(){
	member_profile.risk = $('input[name=default_risk]:checked').val();
	member_profile.bt_range = $('input[name=default_bt_range]:checked').val();
	
	$('#default_riskC').prop('disabled', true);
	$('#default_riskM').prop('disabled', true);
	$('#default_riskA').prop('disabled', true);

	$('#default_bt_range1').prop('disabled', true);
	$('#default_bt_range2').prop('disabled', true);
	$('#default_bt_range3').prop('disabled', true);
	$('#default_bt_range5').prop('disabled', true);
	$('#default_bt_range10').prop('disabled', true);
	
	$('#default_cancel_button').addClass('hide').hide();
	$('#default_edit_button').removeClass('hide').show();
	$('#default_save_button').addClass('hide').hide();
	
	saveDefaultsByAJAX();
}
function saveDefaultsByAJAX(){

	var parameters = 'action=get'
	+'&risk='+member_profile.risk+'&bt_range='+member_profile.bt_range;

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/save_defaults_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'defaults_save_success'){
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message).fadeOut(5000);
				}
			}else if(ajax_result == 'defaults_save_error'){
			}

            $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
//-------------------------------------------
function cancelUpgrade(){
	member_profile.new_level = null;
	member_profile.cc_first_name = null;
	member_profile.cc_last_name = null;
	member_profile.cc_number = null;
	member_profile.cc_expire_month = null;
	member_profile.cc_expire_year = null;
	member_profile.cc_security_code = null;
	
	$('#account_level1').prop('disabled', true);
	$('#account_level2').prop('disabled', true);
	$('#account_level3').prop('disabled', true);
	$('#account_level4').prop('disabled', true);
	$('#account_level'+member_profile.level).prop('checked',true);
	$('#payment_amount').html('$'+member_profile.level);
	$('#payment_form :input').each(function(){
		$(this).val('');
	});
	$('#payment_form').addClass('hide').hide();

	$('#account_cancel_button').addClass('hide').hide();
	$('#account_upgrade_button').removeClass('hide').show();
	$('#account_pay_button').addClass('hide').hide();
}
function startUpgrade(){
	$('#account_level1').prop('disabled', false);
	$('#account_level2').prop('disabled', false);
	$('#account_level3').prop('disabled', false);
	$('#account_level4').prop('disabled', false);

	$('#account_cancel_button').removeClass('hide').show();
	$('#account_upgrade_button').addClass('hide').hide();
}
$('input[type=radio][name=account_level]').on('change', function() {
	$('#payment_amount').html('$'+$(this).val());
	$('#cc_first_name').val(member_profile.first_name);
	$('#cc_last_name').val(member_profile.last_name);
	$('#payment_form').removeClass('hide').show();
	$('#account_pay_button').removeClass('hide').show();
});
function payUpgrade(){
	member_profile.new_level = $('input[type=radio][name=account_level]:checked').val();
	member_profile.cc_first_name = $('#cc_first_name').val();
	member_profile.cc_last_name = $('#cc_last_name').val();
	member_profile.cc_number = $('#cc_number').val();
	member_profile.cc_expire_month = $('#cc_expire_month').val();
	member_profile.cc_expire_year = $('#cc_expire_year').val();
	member_profile.cc_security_code = $('#cc_security_code').val();
	
	payUpgradeByAJAX();
}
function payUpgradeByAJAX(){

	var parameters = 'action=get'
	+'&new_level='+member_profile.new_level
	+'&cc_first_name='+member_profile.cc_first_name+'&cc_last_name='+member_profile.cc_last_name
	+'&cc_number='+member_profile.cc_number+'&cc_expire_month='+member_profile.cc_expire_month
	+'&cc_expire_year='+member_profile.cc_expire_year+'&cc_security_code='+member_profile.cc_security_code;

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/pay_upgrade_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'pay_upgrade_success'){
				member_profile.level = member_profile.new_level;
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').addClass('alert-dashboard').removeClass('alert-danger').show().html(alert_message);
				}
            	cancelUpgrade();
			}else if(ajax_result == 'pay_upgrade_error'){
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').removeClass('alert-dashboard').addClass('alert-danger').show().html(alert_message);
				}
			}

            $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}