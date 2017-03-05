jQuery(document).ready(function(){

    "use strict";

    jQuery('#sparkline1').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline2').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline3').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline4').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline5').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline6').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline7').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });
    jQuery('#sparkline8').sparkline([100.00,101.00,100.90,101.20,100.50,102.10,100.25,99.75,99.10,98.35], {
		type: 'line',
		height: '23px',
        lineColor: '#000',
        maxSpotColor: '#fff',
        minSpotColor: '#fff'
    });

});

var stock_trxs = new Array();
function getDashboardByAJAX(){

	var parameters = 'action=get';

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'http://xyz.doubleintegration.com/main/get_mockup_dashboard',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stocks = full_data.ajax_stocks;

			if(ajax_result == 'dashboard_success'){

                var stock_panel = '<div class="row row-stat">';

                var publish_needed_list = '';
                for(i=0; i<ajax_stocks.length; i++){
                    var stock = ajax_stocks[i];
                    var trxs = {symbol: stock.symbol, trxs: stock.trxs};
                    stock_trxs.push(trxs);
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

                    var publish = '';
                    var history = '';
                    if(stock.published){
                        history = '<a href="javascript:void(0);" class="nomargin" onclick="analysisHistory(\''+stock.symbol+'\');"><span class="fa fa-folder-open ml15"></span></a>';
                    }else{
                        publish = '<a href="javascript:void(0);" onclick="publishStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-plus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Publish"></i></a>'
                        +'<a href="javascript:void(0);" onclick="deleteStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-minus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"></i></a>';
                        history = '<span class="fa disabled fa-folder ml15"></span>';
                        publish_needed_list = publish_needed_list + stock.symbol + ', ';
                    }

                    stock_panel = stock_panel
                    +'<div id="dashboard_stock_'+stock.symbol.toLowerCase()+'" class="col-md-6 nomargin">'
                        +'<div class="panel panel-'+stock.recommendationColor+'-alt noborder mb10">'
                            +'<div class="panel-heading noborder">'
                                +'<div class="panel-icon-large"><i class="fa">'+stock.recommendation+'</i></div>'
                                +'<div class="panel-icon-large-transparent"><i class="fa">'+stock.symbol+'</i></div>'
                                +'<div class="media-body clearfix">'
                                    +'<div class="pull-right">'
                                        +publish
                                        +'<a href="javascript:void(0);" onclick="shareStock(\''+stock.symbol+'\');"><i class="fa fa-2x fa-share-alt tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Stock Info"></i></a>'
                                        +'<a href="cr_analysis_'+stock.symbol.toLowerCase()+'.html"><i class="fa fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i></a>'
                                        +'<a href="cr_charts_'+stock.symbol.toLowerCase()+'.html"><i class="fa fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i></a>'
                                        +'<a href="cr_charts_'+stock.symbol.toLowerCase()+'.html"><i class="fa fa-2x fa-history ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back Test Algorithm"></i></a>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="clearfix mt10">'
                                    +'<div class="pull-left">'
                                        +'<h4 class="nomargin nopadding hidden-xs">'+stock.last[4]+' <i class="fa fa-arrow-'+priceDirection+'"></i></h4>'
                                        +'<span class="nomargin nopadding visible-xs"><b>'+stock.last[4]+'</b> <i class="fa fa-arrow-'+priceDirection+'"></i></span>'
                                    +'</div>'
                                    +'<div class="pull-left">'
                                        +'<h4 class="nomargin nopadding ml5 hidden-xs">'+priceIncrease+' ('+percentageIncrease+')</h4>'
                                        +'<span class="nomargin nopadding ml5 visible-xs"><b>'+priceIncrease+' ('+percentageIncrease+')</b></span>'
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
                                        +'<h5 class="date nomargin pull-right">'+stock.buys+'</h5>'
                                    +'</div>'
                                    +'<div class="pull-left ml15">'
                                        +'<h5 class="md-title nomargin">SELL</h5>'
                                        +'<h5 class="date nomargin pull-right">'+stock.sells+'</h5>'
                                    +'</div>'
                                    +'<div class="pull-left ml15">'
                                        +'<h5 class="md-title nomargin">HISTORY</h5>'
                                        +history
                                    +'</div>'
                                    +'<div class="pull-right ml15">'
                                        +'<h5 class="md-title nomargin">Algo ROI</h5>'
                                        +'<h5 class="date nomargin pull-right">'+stock.algo_roi.toFixed(2)+'%</h5>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>';

                    if(!stock.published){
                        jQuery.gritter.add({
                            // (string | mandatory) the heading of the notification
                            title: 'Notice To Publish '+stock.symbol+'!',
                            // (string | mandatory) the text inside the notification
                            text: ''+stock.symbol+' Has been added to your account, but needs to be published.',
                            // (string | optional) the image to display on the left
                            image: 'images/screen.png',
                            // (bool | optional) if you want it to fade out on its own or just sit there
                            sticky: false,
                            // (int | optional) the time you want it to be alive for before fading out
                            time: 7500
                        });
                    }
                }
                stock_panel = stock_panel + '</div>';
                $('#stock_panel').html(stock_panel);

                if(publish_needed_list != ''){
                    publish_needed_list = publish_needed_list.substring(0, publish_needed_list.length - 2);
                    $('#publish_needed_message').removeClass('hide').show();
                    $('#publish_needed_list').html(publish_needed_list);
                }

                for(i=0; i<ajax_stocks.length; i++){
                    var stock = ajax_stocks[i];
                    jQuery('#sparkline_'+stock.symbol.toLowerCase()).sparkline(stock.sparkline, {
                        type: 'line',
                        height: '23px',
                        lineColor: '#000',
                        maxSpotColor: '#fff',
                        minSpotColor: '#fff'
                    });
                }

                $('#loading_view').addClass('hide').hide();
			}else if(ajax_result == 'dashboard_error'){

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
