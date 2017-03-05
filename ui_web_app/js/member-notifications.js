function getNotificationsByAJAX(){

	var parameters = 'action=get';

	$.ajax({
		type: 'POST',
		url: 'member/get_notifications_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			
			ajax_notifications = full_data.ajax_notifications;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'notifications_success'){

				if(ajax_notifications.length > 0){
                    var notifications_dropdown_html = 
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'
                    +'<i class="fa fa-bell-o"></i>'
                    +'<span class="badge ml5">'+ajax_notifications.length+'</span>'
                    +'</button>'
                    +'<div class="dropdown-menu pull-right">'
                    +'<h5>Notifications</h5>'
                    +'<ul class="media-list dropdown-list">';
                    
                    var notifications_page_html = 
                    '<div class="row row-stat">'
                    +'<div class="col-md-12">'
                    +'<ul class="media-list dropdown-list">';
                    
			        for(i=0; i<ajax_notifications.length; i++){
			        	var notif = ajax_notifications[i];
			        	if(i < 6){
				        	notifications_dropdown_html = notifications_dropdown_html
	                        +'<li class="media">'
	                        +'<div class="btn btn-'+notif.color+' btn-round pull-left">'+notif.icon1+'</div>'
	                        +'<div class="media-body">'
	                        +'<b>'+notif.symbol+'</b> ('+notif.text+')'
	                        +'<small class="date">'+notif.icon2+' '+notif.date+' PST</small>'
	                        +'</div>'
	                        +'</li>';
			        	}
			        	notifications_page_html = notifications_page_html
                        +'<li class="media">'
                        +'<a href="member/analysis/'+notif.symbol+'"  class="btn btn-'+notif.color+' btn-round pull-left">'+notif.icon1+'</a>'
                        +'<div class="media-body">'
                        +'<b>'+notif.symbol+'</b> ('+notif.text+')'
                        +'<small class="date">'+notif.icon2+' '+notif.date+' PST</small>'
                        +'</div>'
                        +'</li>';
			        }
			        
			        notifications_page_html = notifications_page_html
                    +'</div>'
                    +'</div>'
                    +'</ul>';
                    $('#notifications_panel').html(notifications_page_html);
			        
			        notifications_dropdown_html = notifications_dropdown_html
                    +'</ul>'
                    +'<div class="dropdown-footer text-center">'
                    +'<a href="member/notifications" class="link">See All Notifications</a>'
                    +'</div>'
                    +'</div><!-- dropdown-menu -->';
                    $('#notifications_dropdown').html(notifications_dropdown_html);
                    
                    $('#notifications_badge').removeClass('hide').show().html(ajax_notifications.length);
				}
			}else if(ajax_result == 'notifications_error'){

                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
                
			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
