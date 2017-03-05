var stocks_w_trxs = new Array();
function getDashboardStocksByAJAX(){

	var parameters = 'action=get';

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/get_dashboard_stocks_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_dashboard_stocks = full_data.ajax_dashboard_stocks;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'dashboard_stocks_success'){
				
				if(ajax_dashboard_stocks.length == 0){
	                var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +'<h4 class="nomargin">No Stocks!</h4>'
                    +'You can add up to X stocks.';
                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}else{
	                var stock_panel = '<div class="row row-stat">';
	
	                var publish_needed_list = '';
	                for(i=0; i<ajax_dashboard_stocks.length; i++){
	                    var stock = ajax_dashboard_stocks[i];
	                    
	                    //add stock without trxs
	                    var trxs = {symbol: stock.symbol, trxs: stock.trxs};
	                    stocks_w_trxs.push(trxs);
	                    
	                    var priceIncrease = stock.last[2];
	                    var percentageIncrease = stock.last[3];
	                    var priceDirection;
	                    if(priceIncrease.indexOf("+") >= 0){
	                        priceDirection = 'up';
	                    }else if(priceIncrease.indexOf("-") >= 0){
	                        priceDirection = 'down';
	                    }
	                    priceIncrease = priceIncrease.replace('+','').replace('-','');
	                    percentageIncrease = percentageIncrease.replace('+','').replace('-','');
	
	                    var publish_icons = '';
	                    var analysis_icon = '';
	                    var history_icon = '';
	                    if(stock.published){
	                        analysis_icon = '<a href="member/analysis/'+stock.symbol+'"><i class="fa fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i></a>';
	                        history_icon = '<a href="javascript:void(0);" class="nomargin" onclick="analysisHistory(\''+stock.symbol+'\');"><span class="fa fa-folder-open "></span></a>';
	                    }else{
	                        publish_needed_list = publish_needed_list + stock.symbol + ', ';
	                    	publish_icons = '<a href="javascript:void(0);" onclick="publishStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-plus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Publish"></i></a>'
	                        +'<a href="javascript:void(0);" onclick="deleteStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-minus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"></i></a>';
	                        
	                    	analysis_icon = '<i class="fa disabled fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i>';
	                        history_icon = '<span class="fa disabled fa-folder "></span>';
	                    }
	
	                    stock_panel = stock_panel
	                    +'<div id="'+stock.symbol+'" class="col-md-6 nomargin">'
	                        +'<div class="panel panel-'+stock.recommendationColor+'-alt noborder mb10">'
	                            +'<div class="panel-heading noborder">'
	                                +'<div class="panel-icon-large"><i id="recommendation_'+stock.symbol+'" class="fa">'+stock.recommendation+'</i></div>'
	                                +'<div class="panel-icon-large-transparent"><i class="fa">'+stock.symbol+'</i></div>'
	                                +'<div class="media-body clearfix">'
	                                    +'<div class="pull-right">'
	                                        +publish_icons
	                                        +'<a href="javascript:void(0);" onclick="shareStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-share-alt tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Stock Info"></i></a>'
	                                        +analysis_icon
	                                        +'<a href="member/chart/'+stock.symbol+'"><i class="fa fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i></a>'
	                                        +'<a href="member/back_test/'+stock.symbol+'"><i class="fa fa-2x fa-history ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back Test Algorithm"></i></a>'
	                                    +'</div>'
	                                +'</div>'
	                                +'<div class="clearfix mt10">'
	                                    +'<div class="pull-left">'
	                                        +'<h4 class="nomargin nopadding hidden-xs"><span class="last_'+stock.symbol+'">'+stock.last[4]+'</span> <i class="fa fa-arrow-'+priceDirection+'"></i></h4>'
	                                        +'<h5 class="nomargin nopadding visible-xs"><span class="last_'+stock.symbol+'">'+stock.last[4]+'</span> <i class="fa fa-arrow-'+priceDirection+'"></i></h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left">'
	                                        +'<h4 class="nomargin nopadding ml5 hidden-xs"><span class="price_increase_'+stock.symbol+'">'+priceIncrease+'</span> (<span class="percentage_increase_'+stock.symbol+'">'+percentageIncrease+'</span>)</h4>'
	                                        +'<h5 class="nomargin nopadding ml5 visible-xs"><span class="price_increase_'+stock.symbol+'">'+priceIncrease+'</span> (<span class="percentage_increase_'+stock.symbol+'">'+percentageIncrease+'</span>)</h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left ml20 tinystat">'
	                                        +'<div id="sparkline_'+stock.symbol.toLowerCase()+'" class="chart"></div>'
	                                    +'</div>'
	                                +'</div>'
	                                +'<hr>'
	                                +'<div class="clearfix mt10">'
	                                    +'<div class="pull-left">'
	                                        +'<h5 class="md-title nomargin">Added</h5>'
	                                        +'<h5 class="date nomargin">'+stock.added+'</h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left ml15">'
	                                        +'<h5 class="md-title nomargin">BUY</h5>'
	                                        +'<h5 id="buys_'+stock.symbol+'" class="date nomargin pull-left">'+stock.buys+'</h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left ml15">'
	                                        +'<h5 class="md-title nomargin">SELL</h5>'
	                                        +'<h5 id="sells_'+stock.symbol+'" class="date nomargin pull-left">'+stock.sells+'</h5>'
	                                    +'</div>'
	                                    +'<div class="pull-left ml15">'
	                                        +'<h5 class="md-title nomargin">HIST<span class="hide-for-380px">ORY</span></h5>'
	                                        +history_icon
	                                    +'</div>'
	                                    +'<div class="pull-right ml15">'
	                                        +'<h5 class="md-title nomargin"><span class="hide-for-380px">Algo </span>ROI</h5>'
	                                        +'<h5 id="algo_roi_'+stock.symbol+'" class="date nomargin pull-right">'+stock.algo_roi.toFixed(2)+'%</h5>'
	                                    +'</div>'
	                                +'</div>'
	                            +'</div>'
	                        +'</div>'
	                    +'</div>';
	
	                }
	                stock_panel = stock_panel + '</div>';
	                $('#stock_panel').html(stock_panel);

	                if(ajax_alert_message){
	                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
	                    +ajax_alert_message;
	
	                    $('#alert_message').removeClass('hide').show().html(alert_message);
	                    
					}
	
                    //ajax call for detail data for each stock 
	                for(i=0; i<ajax_dashboard_stocks.length; i++){
	                    getDashboardStockDataByAJAX(ajax_dashboard_stocks[i]);
	                }
				}
			}else if(ajax_result == 'dashboard_stocks_error'){
                if(ajax_alert_message){
	                var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
	                +ajax_alert_message;

	                $('#alert_message').removeClass('hide').show().html(alert_message);
                }
			}else if(ajax_result == 'dashboard_stocks_profile_error'){

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
function getDashboardStockDataByAJAX(stockObj){
	var stockSymbol = stockObj.symbol;
	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'member/get_dashboard_stock_data_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_dashboard_stock_data = full_data.ajax_dashboard_stock_data;

			if(ajax_result == 'dashboard_stock_data_success'){

				//transfer stock trxs to global array
                for(i=0; i<stocks_w_trxs.length; i++){
                	if(stocks_w_trxs[i].symbol == stockSymbol){
                		stocks_w_trxs[i].trxs = ajax_dashboard_stock_data.trxs;
                		break;
                	}
                }
                
                //IDs and classes already exists
                
				$('#'+stockSymbol).find('.panel').removeClass('panel-success-alt').removeClass('panel-danger-alt').removeClass('panel-info-alt').addClass('panel-'+ajax_dashboard_stock_data.recommendationColor+'-alt');

				$('#recommendation_'+stockSymbol).html(ajax_dashboard_stock_data.recommendation);
				$('.last_'+stockSymbol).html(ajax_dashboard_stock_data.last[4]);//use class instead of id because 2 exists
                var priceIncrease = ajax_dashboard_stock_data.last[2];
                var percentageIncrease = ajax_dashboard_stock_data.last[3];
                var priceDirection;
                if(priceIncrease.indexOf("+") >= 0){
                    priceDirection = 'up';
                }else if(priceIncrease.indexOf("-") >= 0){
                    priceDirection = 'down';
                }
                priceIncrease = priceIncrease.replace('+','').replace('-','');
                percentageIncrease = percentageIncrease.replace('+','').replace('-','');
				$('.price_increase_'+stockSymbol).html(priceIncrease);//use class instead of id because 2 exists
				$('.percentage_increase_'+stockSymbol).html(percentageIncrease);//use class instead of id because 2 exists
				var fa_up_element = $('#'+stockSymbol).find('.fa-arrow-up');
				var fa_down_element = $('#'+stockSymbol).find('.fa-arrow-down');
				fa_up_element.removeClass('.fa-arrow-up').addClass('fa-arrow-'+priceDirection);
				fa_down_element.removeClass('.fa-arrow-down').addClass('fa-arrow-'+priceDirection);
				
				//sparkline div already exists
                jQuery('#sparkline_'+ajax_dashboard_stock_data.symbol.toLowerCase()).sparkline(ajax_dashboard_stock_data.sparkline, {
                    type: 'line',
                    height: '23px',
                    lineColor: '#000',
                    maxSpotColor: '#fff',
                    minSpotColor: '#fff'
                });
                
				$('#buys_'+stockSymbol).html(ajax_dashboard_stock_data.buys);
				$('#sells_'+stockSymbol).html(ajax_dashboard_stock_data.sells);
				$('#algo_roi_'+stockSymbol).html(ajax_dashboard_stock_data.algo_roi.toFixed(2)+'%');
				
			}else if(ajax_result == 'stock_data_error'){
			}
		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}

function getServerTimeByAJAX(){
	
	return new Promise(function(resolve, reject) {
		var parameters = 'action=get';
		$.ajax({
			type: 'POST',
			url: 'member/get_server_time_by_ajax',
			data: parameters,
			dataType : 'json',
			success: function(full_data) {
	
				ajax_result = full_data.ajax_result;
				ajax_message = full_data.ajax_message;
	
				ajax_server_time = full_data.ajax_server_time;
	
				if(ajax_result == 'server_time_success'){
					//server_time = ajax_server_time;
				}else if(ajax_result == 'server_time_error'){
				}
			},
			error: function( xhr, tStatus, err ) {
				//alert( xhr.responseText);
			},
			cache: false
		})
		.done(resolve)
		.fail(reject);
	 });

	//return;
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timer_handle = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        (minutes < 1 && seconds <= 30)? display.removeClass('btn-default').addClass('btn-warning') : display.addClass('btn-default').removeClass('btn-warning');
        display.text('Refresh: ' + minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}