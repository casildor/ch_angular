var stocks = new Array();
function getDashboardStocksByAJAX(){

	var parameters = 'action=get';

	$.ajax({
		type: 'POST',
		url: 'admin/get_dashboard_stocks_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stocks = full_data.ajax_stocks;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'stocks_success'){
				stocks = ajax_stocks;
			}else if(ajax_result == 'stocks_error'){
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
function addStockByAJAX(stockSymbol){
	
	if(!stockSymbol)
		stockSymbol = $('#add_stock_symbol').val().toUpperCase();

	if(!stockSymbol)
		return;

    $('#loading_view').removeClass('hide').show();
	
	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'admin/add_stock_by_ajax',
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
			    
				if ((ie_old > -1) || (ie_new > -1)){
						window.location = base_url + 'admin/dashboard';
				}else{
						window.location.replace(base_url + 'admin/dashboard');
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

		    $('#loading_view').addClass('hide').hide();

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
function reloadStocks(){

	clearAllHistoricalDataByAJAX();
	
    for(i=0; i<stocks.length; i++){
    	reloadStockByAJAX(stocks[i].symbol);
    }
	
}

function clearAllHistoricalDataByAJAX(){

    $('#loading_view').removeClass('hide').show();

	var parameters = 'action=get';

	$.ajax({
		type: 'POST',
		url: 'admin/clear_all_historical_data_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			if(ajax_result == 'clear_all_historical_data_success'){
			}else if(ajax_result == 'clear_all_historical_data_error'){
			}

		    $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});
	
}
function reloadStockByAJAX(stockSymbol){

    $('#loading_view').removeClass('hide').show();

	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;

	return $.ajax({
		type: 'POST',
		url: 'admin/reload_stock_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stock = full_data.ajax_stock;

			if(ajax_result == 'reload_stock_success'){
                $('#'+stockSymbol).find('.panel-info-alt').removeClass('panel-info-alt').addClass('panel-success-alt');
                $('#'+stockSymbol).find('.start-date').html(ajax_stock.start_date);
                $('#'+stockSymbol).find('.end-date').html(ajax_stock.end_date);
                setTimeout(function(){
                    $('#'+stockSymbol).find('.panel-success-alt').addClass('panel-info-alt').removeClass('panel-success-alt');
                },60000);
                console.log('reloaded: '+stockSymbol);
			}else if(ajax_result == 'reload_stock_error'){
				
			}

            $('#loading_view').addClass('hide').hide();
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});
}

var zap_on = false;
var zap_handle = null;
var timer_handle = null;
function startZap(){
	var timeMinutes = 60 * 15;
	zap_on = true;

	$('#clock').attr('onclick','nothing()');
	$('#clock').removeClass('btn-success').addClass('btn-default');
    var display = $('#clock');
    startTimer(timeMinutes, display);
    
	zapByAJAX();
	zap_handle = setInterval('zapByAJAX()',timeMinutes*1000);
}
function stopZap(){
	zap_on = false;
	clearInterval(zap_handle);
	clearInterval(timer_handle);
	$('#clock').attr('onclick','startZap()');
	$('#clock').addClass('btn-success').removeClass('btn-default');
	$('#clock').html('Start<span class="hide-for-420px"> Zap');
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timer_handle = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function zapByAJAX(){
	if(zap_on){
		var parameters = 'action=get';
	
	    $('#loading_view').removeClass('hide').show();
	
		$.ajax({
			type: 'POST',
			url: 'admin/zap_stocks_by_ajax',
			data: parameters,
			dataType : 'json',
			success: function(full_data) {
	
				ajax_result = full_data.ajax_result;
				ajax_message = full_data.ajax_message;
	
				ajax_stocks = full_data.ajax_stocks;
	
				if(ajax_result == 'zap_stocks_success'){
	                var stock_panel = '<div class="row row-stat">';
	                for(i=0; i<ajax_stocks.length; i++){
	                    var stock = ajax_stocks[i];
	
	                    stock_panel = stock_panel
	                    +'<div id="'+stock.symbol+'" class="col-md-4 nomargin">'
	                        +'<div class="panel panel-success-alt noborder mb10">'
	                            +'<div class="panel-heading noborder">'
	                                +'<div class="panel-icon-large-transparent"><i class="fa">'+stock.symbol+'</i></div>'
	                                +'<div class="clearfix mt5">'
	                                    +'<div class="pull-left">'
	                                        +'<h5 class="md-title nomargin">PRICE</h5>'
	                                        +'<h5 class="date nomargin pull-left">'+parseFloat(stock.zap.price).toFixed(2)+'</h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left ml15">'
	                                        +'<h5 class="md-title nomargin">TIME</h5>'
	                                        +'<h5 class="date nomargin pull-left">'+stock.zap.time+'</h5>'
	                                    +'</div>'
	                                +'</div>'
	                            +'</div>'
	                        +'</div>'
	                    +'</div>';
	                }
	                stock_panel = stock_panel + '</div>';
	                $('#stock_panel').html(stock_panel);
	                setTimeout(function(){
	                	$('.panel').each(function() {
	                		$( this ).removeClass('panel-success-alt').addClass('panel-info-alt');
	                	});
	                },2500);
				}else if(ajax_result == 'zap_stocks_error'){
					
				}
	
	            $('#loading_view').addClass('hide').hide();
			},
			error: function( xhr, tStatus, err ) {
				//alert( xhr.responseText);
			},
			cache: false
		});
	}
	
	return;
}
function clearZapByAJAX(){
	var parameters = 'action=get';

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'admin/clear_zap_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;
			
			ajax_stocks = full_data.ajax_stocks;

			if(ajax_result == 'clear_zap_success'){
                var stock_panel = '<div class="row row-stat">';
                for(i=0; i<ajax_stocks.length; i++){
                    var stock = ajax_stocks[i];

                    stock_panel = stock_panel
                    +'<div id="'+stock.symbol+'" class="col-md-4 nomargin">'
                        +'<div class="panel panel-info-alt noborder mb10">'
                            +'<div class="panel-heading noborder">'
                                +'<div class="panel-icon-large-transparent"><i class="fa">'+stock.symbol+'</i></div>'
                                +'<div class="clearfix mt5">'
                                    +'<div class="pull-left">'
                                        +'<h5 class="md-title nomargin">PRICE</h5>'
                                        +'<h5 class="date nomargin pull-left">'+parseFloat(stock.zap.price).toFixed(2)+'</h5>'
                                    +'</div>'
                                    +'<div class="pull-left ml15">'
                                        +'<h5 class="md-title nomargin">TIME</h5>'
                                        +'<h5 class="date nomargin pull-left">'+stock.zap.time+'</h5>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>';
                }
                stock_panel = stock_panel + '</div>';
                $('#stock_panel').html(stock_panel);
			}else if(ajax_result == 'clear_zap_error'){
				
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

