function addStockByAJAX(stockSymbol){
	
	if(!stockSymbol)
		stockSymbol = $('#add_stock_symbol').val().toUpperCase();

	if(!stockSymbol)
		return;
	
	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'member/add_stock_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'add_stock_success'){

			    var ua = window.navigator.userAgent;
			    var ie_old = ua.indexOf('MSIE ');
			    var ie_new = ua.indexOf('Trident/');
			    var mozilla = ua.indexOf('Mozilla/');
			    var chrome = ua.indexOf('Chrome/');
			    var safari = ua.indexOf('Safari/');
				
				var base_url = location.protocol + '//' + location.host;
				if(location.host == 'localhost'){
					base_url = base_url + '/chawkhawk/'
				}else{
					base_url = base_url + '/'
				}
				var a = location.href.lastIndexOf('analysis');
				var b = location.href.lastIndexOf('back_test');
				var c = location.href.lastIndexOf('chart');
			    
				if ((ie_old > -1) || (ie_new > -1)){
					if(a != -1)
						window.location = base_url + 'member/analysis/' + stockSymbol;
					else if(b != -1)
						window.location = base_url + 'member/back_test/' + stockSymbol;
					else if(c != -1)
						window.location = base_url + 'member/chart/' + stockSymbol;
					else
						window.location = location;
				}else{
					if(a != -1)
						window.location.replace(base_url + 'member/analysis/' + stockSymbol);
					else if(b != -1)
						window.location.replace(base_url + 'member/back_test/' + stockSymbol);
					else if(c != -1)
						window.location.replace(base_url + 'member/chart/' + stockSymbol);
					else
						window.location.replace(location);
				}
			}else if(ajax_result == 'add_stock_limit_error'){

                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
			}else if(ajax_result == 'add_stock_error'){

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
function publishStock(stockSymbol){
    $('#modal_lg').modal('show');
    $('#modal_lg').find('.modal-title').html('Publish Stock- '+stockSymbol);
    var modal_body =
    '<section>'
    	+'Publishing <b>'+stockSymbol+'</b> will allow you to'
    	+'<ul>'
    	+'<li>receive real-time buy and sell recommendations in your dashboard</li>'
    	+'<li>receive real-time buy and sell recommendations by email</li>'
    	+'<li>run an analysis with various risk tolerances</li>'
    	+'<li>run an analysis to obtain short term predictions</li>'
    	+'<li>run back tests up to today</li>'
    	+'</ul>'
    	+'<button class="btn btn-primary" onclick="publishStockByAJAX(\''+stockSymbol+'\')">Publish</button>'
    	+'<button class="btn btn-primary ml20" onclick="$(\'#modal_lg\').trigger(\'click\');">Cancel</button>'
    +'</secion>';
    $('#modal_lg').find('.modal-body').html(modal_body);
}
function publishStockByAJAX(stockSymbol){

	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'member/publish_stock_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stocks = full_data.ajax_stocks;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'publish_stock_success'){

			    var ua = window.navigator.userAgent;
			    var ie_old = ua.indexOf('MSIE ');
			    var ie_new = ua.indexOf('Trident/');
			    var mozilla = ua.indexOf('Mozilla/');
			    var chrome = ua.indexOf('Chrome/');
			    var safari = ua.indexOf('Safari/');
				
				var base_url = location.protocol + '//' + location.host;
				if(location.host == 'localhost'){
					base_url = base_url + '/chawkhawk/'
				}else{
					base_url = base_url + '/'
				}
				var a = location.href.lastIndexOf('analysis');
				var b = location.href.lastIndexOf('back_test');
				var c = location.href.lastIndexOf('chart');
			    
				if ((ie_old > -1) || (ie_new > -1)){
					if(a != -1)
						window.location = base_url + 'member/analysis/' + stockSymbol;
					else if(b != -1)
						window.location = base_url + 'member/back_test/' + stockSymbol;
					else if(c != -1)
						window.location = base_url + 'member/chart/' + stockSymbol;
					else
						window.location = location;
				}else{
					if(a != -1)
						window.location.replace(base_url + 'member/analysis/' + stockSymbol);
					else if(b != -1)
						window.location.replace(base_url + 'member/back_test/' + stockSymbol);
					else if(c != -1)
						window.location.replace(base_url + 'member/chart/' + stockSymbol);
					else
						window.location.replace(location);
				}
			}else if(ajax_result == 'publish_stock_error'){

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
function deleteStock(stockSymbol){
    $('#modal_lg').modal('show');
    $('#modal_lg').find('.modal-title').html('Delete Stock- '+stockSymbol);
    var modal_body =
    '<section>'
    	+'Deleting <b>'+stockSymbol+'</b> will'
    	+'<ul>'
    	+'<li>remove it completely from the dashboard</li>'
    	+'<li>free up a position for a different stock</li>'
    	+'</ul>'
    	+'<button class="btn btn-primary" onclick="deleteStockByAJAX(\''+stockSymbol+'\')">Delete</button>'
    	+'<button class="btn btn-primary ml20" onclick="$(\'#modal_lg\').trigger(\'click\');">Cancel</button>'
    +'</secion>';
    $('#modal_lg').find('.modal-body').html(modal_body);
}
function deleteStockByAJAX(stockSymbol){
	var parameters = 'action=get'
    +'&stock_symbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'member/delete_stock_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'delete_stock_success'){
				$('#modal_lg').trigger('click');
				
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
					window.location = base_url + "member/dashboard";
				}else{
					window.location.replace(base_url + "member/dashboard");
				}
			}else if(ajax_result == 'delete_stock_error'){

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
function shareStock(stockSymbol){
    $('#modal_lg').modal('show');
    $('#modal_lg').find('.modal-title').html('Share Stock- '+stockSymbol);
    var modal_body =
    '<section>'
			+'<div class="row">'
				+'<div class="col-sm-6">'
					+'<div class="input-group mb15">'
						+'<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>'
						+'<input type="email" id="share_stock_email" name="share_stock_email" class="form-control" placeholder="Enter Email Address">'
					+'</div>'
				+'</div>'
				+'<div class="col-sm-6">'
					+'<div class="input-group mb15">'
						+'<button class="btn btn-primary" onclick="shareStockByAJAX(\''+stockSymbol+'\');">Share <i class="fa fa-share-alt ml5"></i></button>'
					+'</div>'
				+'</div>'
			+'</div>'
	+'</secion>';
    $('#modal_lg').find('.modal-body').html(modal_body);
}
function shareStockByAJAX(stockSymbol){
	
	var share_stock_email = $('#share_stock_email').val();

	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol+'&share_stock_email='+share_stock_email;

	$.ajax({
		type: 'POST',
		url: 'member/share_stock_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'share_stock_success'){
				$('#modal_lg').trigger('click');
			}else if(ajax_result == 'share_stock_error'){

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
function analysisHistory(stockSymbol){
    var stock_trxs = null;
    for(i=0; i<stocks_w_trxs.length; i++){
        if(stocks_w_trxs[i].symbol == stockSymbol){
        	stock_trxs = stocks_w_trxs[i].trxs;
            break;
        }
    }
    if(stock_trxs != null){
        $('#modal_lg').modal('show');
        $('#modal_lg').find('.modal-title').html('Analysis History - '+stockSymbol);
        var modal_body =
        '<section>'
            +'<div class="table-responsive scroll-element">'
                +'<table class="table small table-striped table-dark">'
                    +'<thead>'
                        +'<tr>'
                            +'<th>Date</th>'
                            +'<th>Rec</th>'
                            +'<th>Price</th>'
                            +'<th>Sh</th>'
                            +'<th>Total</th>'
                            +'<th class="right">ROI</th>'
                        +'</tr>'
                    +'</thead>'
                    +'<tbody>';
        			for(i=0; i<stock_trxs.length; i++){
                        modal_body = modal_body
                        +'<tr>'
                            +'<td>'+stock_trxs[i].date+'</td>'
                            +'<td class="color-'+stock_trxs[i].color+'">'+stock_trxs[i].trx+'</td>'
                            +'<td>'+parseFloat(stock_trxs[i].price).toFixed(2)+'</td>'
                            +'<td>'+parseFloat(stock_trxs[i].shares).toFixed(2)+'</td>'
                            +'<td>'+parseFloat(stock_trxs[i].value).toFixed(2)+'</td>'
                            +'<td align="right">'+parseFloat(stock_trxs[i].roi).toFixed(2)+'%</td>'
                        +'</tr>';
			        }
			        modal_body = modal_body
                    +'</tbody>'
                +'</table>'
            +'</div>'
        +'</secion>';
        //$('#modal_lg').find('.modal-body').load('cr_stock_analysis.html');
        $('#modal_lg').find('.modal-body').html(modal_body);
    }
}

function backTestData(stockSymbol){
    $('#modal_lg').modal('show');
    $('#modal_lg').find('.modal-title').html('Back Test Data - '+stockSymbol);
    $('#modal_lg').find('.modal-body').load('cr_stock_analysis.html');
}