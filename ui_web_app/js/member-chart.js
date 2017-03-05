var chart;
var price_data;
function getStockChartByAJAX(stockSymbol){

	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol;
	
    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/get_stock_chart_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_user_stocks = full_data.ajax_user_stocks;
			ajax_stock_analysis = full_data.ajax_stock_analysis;
			ajax_price = full_data.ajax_price;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'stock_chart_success' || ajax_result == 'stock_not_in_account_error'){
				price_data = ajax_price;//need it for zooming later
				
                var priceIncrease = ajax_stock_analysis.last[2];
                var percentageIncrease = ajax_stock_analysis.last[3];
                var priceDirection;
                if(priceIncrease.indexOf("+") >= 0){
                    priceDirection = 'up';
                }else if(priceIncrease.indexOf("-") >= 0){
                    priceDirection = 'down';
                }
                priceIncrease = priceIncrease.replace('+','').replace('-','');
                percentageIncrease = percentageIncrease.replace('+','').replace('-','');
                
                var analysis_icon = '';
                if(ajax_stock_analysis.published){
                	analysis_icon = '<a href="member/analysis/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i></a>';
                }else{
                	analysis_icon = '<i class="fa disabled fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i>';
                }
                
				var stock_panel_html =
                '<div class="row row-stat">'
                +'<div class="col-md-12 nomargin">'
                +'<div class="panel panel-'+ajax_stock_analysis.recommendationColor+'-alt noborder">'
                +'<div class="panel-heading noborder">'
                +'<div class="panel-icon-large"><i class="fa">'+ajax_stock_analysis.recommendation+'</i></div>'
                +'<div class="panel-icon-large-transparent"><i class="fa">'+ajax_stock_analysis.symbol+'</i></div>'
                +'<div class="media-body clearfix">'
                +'<div class="pull-right">'
                +'<a href="javascript:void(0);" onclick="shareStock(\''+ajax_stock_analysis.symbol+'\');"><i class="fa fa-2x fa-share-alt tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Stock Info"></i></a>'
                +analysis_icon
                +'<i class="fa disabled fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i>'
                +'<a href="member/back_test/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-history ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back Test Algorithm"></i></a>'
                +'</div>'
                +'</div><!-- media-body -->'
                +'</div>'
                +'<div id="chart_'+ajax_stock_analysis.symbol.toLowerCase()+'" ></div>'
                +'</div>'
                +'</div>'
                +'</div><!-- row -->'
                +'<div class="row row-stat">'
                +'<div class="col-md-12 nomargin">'
                +'<div class="panel panel-'+ajax_stock_analysis.recommendationColor+'-alt noborder">'
                +'<div class="panel-heading noborder">'
                +'<div class="clearfix">'
                +'<div class="pull-left mt3">'
                +'<h5 class="nomargin nopadding">'+ajax_stock_analysis.last[4]+' <i class="fa fa-arrow-'+priceDirection+'"></i></h5>'
                +'</div>'
                +'<div class="pull-left mt3">'
                +'<h5 class="nomargin nopadding ml5">'+priceIncrease+' ('+percentageIncrease+')</h5>'
                +'</div>'
                +'<div class="pull-right nomargin">'
                +'<div class="select-style">'
                +'<select name="chart_range" id="chart_range" onchange="changeChartRange()">'
                +'<option value="1d">1 Day</option>'
                +'<option value="5d">5 Days</option>'
                +'<option value="1m">1 Month</option>'
                +'<option value="3m" selected>3 Months</option>'
                +'<option value="6m">6 Months</option>'
                +'<option value="1y">1 Year</option>'
                +'<option value="2y">2 Years</option>'
                +'<option value="5y">5 Years</option>'
                +'<option value="10y">10 Years</option>'
                +'</select>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'</div><!-- row -->';
					
				$('#stock_panel').removeClass('hide').show().html(stock_panel_html);
				
				chartStock(ajax_stock_analysis, ajax_price, 'chart_'+ajax_stock_analysis.symbol.toLowerCase());
				
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
			}else if(ajax_result == 'stock_doesnt_exist_error' || ajax_result == 'stock_chart_error'){
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
			}

			//stock list in all cases
			if(ajax_user_stocks != null){
                var stock_list =
                '<div class="stock-list-style '+ajax_stock_analysis.recommendationColor+'">'
                +'<select id="stock_list_select" name="stock_list_select" onchange="changeStockChart();">'
                +'<option>Stocks</options>';
                for(i=0; i<ajax_user_stocks.length; i++){
                	if(ajax_user_stocks[i].symbol == ajax_stock_analysis.symbol){
                        stock_list = stock_list
                        +'<option value="'+ajax_user_stocks[i].symbol+'" selected="selected">'+ajax_user_stocks[i].symbol+'</option>';
                	}else{
                        stock_list = stock_list
                        +'<option value="'+ajax_user_stocks[i].symbol+'">'+ajax_user_stocks[i].symbol+'</option>';
                	}
                }
                stock_list = stock_list
                +'</select>'
                +'</div>';
	            $('#stock_list').removeClass('hide').show().html(stock_list);
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
function changeStockChart(){
	var stock_symbol = $('#stock_list_select').val();
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
		window.location = base_url + "member/chart/" + stock_symbol;
	}else{
		window.location.replace(base_url + "member/chart/" + stock_symbol);
	}
}
function chartStock(stock_analysis, price, chart_div){

	var price_start_date = (price[0][0]).split(/[- :]/);
	if(price_start_date[3] == null)
		price_start_date[3] = '0';
	if(price_start_date[4] == null)
		price_start_date[4] = '0';
	if(price_start_date[5] == null)
		price_start_date[5] = '0';
	price_start_date = Date.UTC(price_start_date[0], price_start_date[1]-1, price_start_date[2], price_start_date[3], price_start_date[4], price_start_date[5]);
	
	var price_end_date = null;
	for(i=0; i<price.length; i++){
		var price_end_date = (price[i][0]).split(/[- :]/);
		if(price_end_date[3] == null)
			price_end_date[3] = '0';
		if(price_end_date[4] == null)
			price_end_date[4] = '0';
		if(price_end_date[5] == null)
			price_end_date[5] = '0';
		
		price[i][0] = Date.UTC(price_end_date[0], price_end_date[1]-1, price_end_date[2], price_end_date[3], price_end_date[4], price_end_date[5]);
		price_end_date = price[i][0];
	}

	//close price and predicted price
	var chart_options = {
		chart: {
			renderTo: chart_div,
			spacing: [-25,0,0,0]
		},
		navigator: {
            enabled: false,
            height: 0
        },

        rangeSelector: {
            inputEnabled: false,
            buttonTheme: {
                visibility: 'hidden'
            },
            labelStyle: {
                visibility: 'hidden'
            }
        },
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		title: {
			text: null
		},
        xAxis: {
        	type: 'datetime',
        	min: price_start_date,
        	max: price_end_date
        },
		scrollbar: {
		    enabled: false
		},
        series: [{//close
			type: 'line',
			id: 'price_series',
			lineWidth: 1,
			name: 'Price',
			data: price,
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 2
			},
			dataLabels: {
				style: {color: "black"}
			},
			color: "black"
		}]
	};

	chart = new Highcharts.Chart(Highcharts.merge(chart_options, Highcharts.theme));
}

function changeChartRange() {
    if (!chart) return;

    var dateRange = $('select#chart_range').val();
    
	var x_max_date = new Date(price_data[price_data.length-1][0]);
	var x_max_year = x_max_date.getUTCFullYear();
	var x_max_month = x_max_date.getUTCMonth();
	var x_max_day = x_max_date.getUTCDate();
	//var x_max = Date.UTC(x_max_year, x_max_month, x_max_day);
	var x_max = Date.UTC(x_max_year, x_max_month, x_max_day, 18, 0, 0);

	var x_min = -1;
    if(dateRange == '1d'){
		x_min = Date.UTC(x_max_year, x_max_month, x_max_day, 6, 0, 0);
    }else if(dateRange == '5d'){
		x_min = Date.UTC(x_max_year, x_max_month, x_max_day-5);
    }else if(dateRange == '1m'){
		x_min = Date.UTC(x_max_year, x_max_month-1, x_max_day);
    }else if(dateRange == '3m'){
    	x_min = Date.UTC(x_max_year, x_max_month-3, x_max_day);
    }else if(dateRange == '6m'){
    	x_min = Date.UTC(x_max_year, x_max_month-6, x_max_day);
    }else if(dateRange == '1y'){
    	x_min = Date.UTC(x_max_year-1, x_max_month, x_max_day);
    }else if(dateRange == '2y'){
    	x_min = Date.UTC(x_max_year-2, x_max_month, x_max_day);
    }else if(dateRange == '5y'){
    	x_min = Date.UTC(x_max_year-5, x_max_month, x_max_day);
    }else if(dateRange == '10y'){
    	x_min = Date.UTC(x_max_year-10, x_max_month, x_max_day);
    }else if(dateRange == 'all'){
    	var x_min_date = new Date(closeData[0][0]);//ajax_stock_data_start_date
    	x_min = Date.UTC(x_min_date.getUTCFullYear(), x_min_date.getUTCMonth(), x_min_date.getUTCDate());
    }

    if(x_min > -1)
    	chart.xAxis[0].setExtremes(x_min,x_max);

    var dMax = 0;
    var dMin = 10000.00;
    $(chart.series).each(function(i, serie){
    	if(serie.dataMax > dMax)
    		dMax = chart.yAxis[0].dataMax;
    	if(serie.dataMin < dMin)
    		dMin = chart.yAxis[0].dataMin;
    });

	y_min = dMin - ((dMax - dMin) * 0.05);
	y_max = dMax + ((dMax - dMin) * 0.05);
	chart.yAxis[0].setExtremes(y_min,y_max);
}