function validateSignUpForm(thisform){
	var sign_up_error_array = {};
	with (thisform){
		error = false;
		if (validateRequired(sign_up_first_name) == false){
			error = true;
			sign_up_error_array[sign_up_first_name.name] = "Firstname Empty";
		}
		if (validateRequired(sign_up_last_name) == false){
			error = true;
			sign_up_error_array[sign_up_last_name.name] = "Lastname Empty";
		}
		if (validateRequired(sign_up_email) == false){
			error = true;
			sign_up_error_array[sign_up_email.name] = "Email Empty";
		}else if(echeck(sign_up_email.value) == false){
			error = true;
			sign_up_error_array[sign_up_email.name] = "Email Form";
		}
		if(validateRequired(sign_up_password) == false){
			error = true;
			sign_up_error_array[sign_up_password.name] = "Password Empty";
			if(sign_up_password.value.length < 0 || sign_up_password.value.length > 12){
				error = true;
				sign_up_error_array[sign_up_password.name] = "Password 1-12 Characters";
			}
		}
		if(validateChecked(sign_up_terms) == false){
			error = true;
			sign_up_error_array[sign_up_terms.name] = "Terms Empty";
		}
		/*
		if(validateRequired(sign_up_confirm_password)==false){
			error = true;
			sign_up_error_array[sign_up_confirm_password.name] = "Confirm Password Empty";
		}
		if(validateRequired(sign_up_password)==true && validateRequired(sign_up_confirm_password)==true){
			if(sign_up_password.value.length < 0 || sign_up_password.value.length > 12){
				error = true;
				sign_up_error_array[sign_up_password.name] = "Password 1-12 Characters";
			}
			if(sign_up_password.value != sign_up_confirm_password.value){
				error = true;
				sign_up_error_array[sign_up_confirm_password.name] = "Password & Confirm Password Not Same";
			}
		}
		*/
		
		if(error)
			sign_up_error_array['error'] = true;

		return sign_up_error_array;

	}
}
function validateSignInForm(thisform){
	var sign_in_error_array = {};
	with (thisform){
		error = false;
		if (validateRequired(sign_in_email) == false){
			error = true;
			sign_in_error_array[sign_in_email.name] = "Email Empty";
		}else if(echeck(sign_in_email.value) == false){
			error = true;
			sign_in_error_array[sign_in_email.name] = "Email Form";
		}
		if(validateRequired(sign_in_password)==false){
			error = true;
			sign_in_error_array[sign_in_password.name] = "Password Empty";
		}

		if(error)
			sign_in_error_array['error'] = true;

		return sign_in_error_array;
	}
}
function validateProfileForm(thisform){
	var profile_error_array = {};
	with (thisform){
		error = false;
		if (validateRequired(profile_first_name) == false){
			error = true;
			profile_error_array[profile_first_name.name] = "Firstname Empty";
		}
		if (validateRequired(profile_last_name) == false){
			error = true;
			profile_error_array[profile_last_name.name] = "Lastname Empty";
		}

		if(error)
			profile_error_array['error'] = true;

		return profile_error_array;
	}
}
function validateContactForm(thisform){
	var error_array = {};
	with (thisform){
		//form_error = "Form Error !\r\n\r\n";
		error = false;
		if (validateRequired(contact_first_name) == false){
			error = true;
			//form_error = form_error + "First Name Error: must be filled out.\r\n";
			error_array[contact_first_name.name] = "First Name Empty";
		}
		if (validateRequired(contact_last_name) == false){
			error = true;
			//form_error = form_error + "Last Name Error: must be filled out.\r\n";
			error_array[contact_last_name.name] = "Last Name Empty";
		}
		if (validateRequired(contact_email) == false){
			error = true;
			//form_error = form_error + "Email Error: must be filled out.\r\n";
			error_array[contact_email.name] = "Email Empty";
		}else if(echeck(contact_email.value) == false){
			error = true;
			//form_error = form_error + "Email Error: form incorrect.\r\n";
			error_array[contact_email.name] = "Email Form";
		}
		/*
		if (validateRequired(contact_playing_age) == false){
			error = true;
			form_error = form_error + "Phone Error: must be filled out.\r\n";
			error_array[contact_playing_age] = form_error;
		}
		if (validateRequired(contact_phone) == false){
			error = true;
			form_error = form_error + "Phone Error: must be filled out.\r\n";
			error_array[contact_phone] = form_error;
		}
		*/
		if (validateRequired(contact_message) == false){
			error = true;
			//form_error = form_error + "Project Description Error: must be filled out.\r\n";
			error_array[contact_message.name] = "Message Empty";
		}

		return error_array;

		/*
		if(error){
			alert(form_error);
			return false;
		}else{
			return true;
		}
		*/
	}
}

function validateRequired(field){
	with (field){
		if (value == null || value == "" || value == ''){
			return false;
		}else{
			return true;
		}
	}
}
function validateChecked(field){
	with (field){
		if (!field.checked){
			return false;
		}else{
			return true;
		}
	}
}
function myIsNumeric(input){
    return (input - 0) == input && input.length > 0;
}

function echeck(str) {

	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);

	if (str.indexOf(at)==-1){
	   return false
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		return false;
	}

	if (str.indexOf(at,(lat+1))!=-1){
		return false;
	}

	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		return false;
	}

	if (str.indexOf(dot,(lat+2))==-1){
		return false;
	}

	if (str.indexOf(" ")!=-1){
		return false;
	}

	return true;

}
