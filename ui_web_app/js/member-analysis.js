var stock_symbol;
function getStockAnalysisByAJAX(stockSymbol, analysisRisk){

	stock_symbol = stockSymbol;
	
	var parameters = 'action=get'
	+'&stock_symbol='+stockSymbol+'&analysis_risk='+analysisRisk;

    $('#loading_view').removeClass('hide').show();

	$.ajax({
		type: 'POST',
		url: 'member/get_stock_analysis_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_user_stocks = full_data.ajax_user_stocks;
			ajax_stock_analysis = full_data.ajax_stock_analysis;
			ajax_price = full_data.ajax_price;
			ajax_algorithm = full_data.ajax_algorithm;
			ajax_annotations = full_data.ajax_annotations;
			ajax_alert_message = full_data.ajax_alert_message;

			if(ajax_result == 'stock_analysis_success'){
				var risk_C_selected = '';
				var risk_M_selected = '';
				var risk_A_selected = '';
				if(analysisRisk == 'C')
					risk_C_selected = 'selected';
				else if(analysisRisk == 'M')
					risk_M_selected = 'selected';
				else if(analysisRisk == 'A')
					risk_A_selected = 'selected';
				
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
                +'<i class="fa disabled fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i>'
                +'<a href="member/chart/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i></a>'
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
                +'<select name="analysis_risk" id="analysis_risk" onchange="changeAnalysisRisk()">'
                +'<option value="C" '+risk_C_selected+'>Conservative Risk</option>'
                +'<option value="M" '+risk_M_selected+'>Moderate Risk</option>'
                +'<option value="A" '+risk_A_selected+'>Aggressive Risk</option>'
                +'</select>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'<hr>'
                +'<p>'+ajax_stock_analysis.reason+'</p>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'</div><!-- row -->';
					
				$('#stock_panel').removeClass('hide').show().html(stock_panel_html);
				
				chartStockAnalysis(ajax_stock_analysis, ajax_price, ajax_algorithm, ajax_annotations, 'chart_'+ajax_stock_analysis.symbol.toLowerCase());

                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
				
			}else if(ajax_result == 'stock_analysis_publish_error'){

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

                var publish_icon = '<a href="javascript:void(0);" onclick="publishStock(\''+ajax_stock_analysis.symbol+'\');"><i class="fa fa-2x fa-plus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Publish"></i></a>'
                +'<a href="javascript:void(0);" onclick="deleteStock(\''+ajax_stock_analysis.symbol+'\');"><i class="fa fa-2x fa-minus tooltips mr10" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"></i></a>';
                var analysis_icon = '<i class="fa disabled fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i>';

                var stock_panel_html = 
                '<div class="row row-stat">'
                +'<div id="'+ajax_stock_analysis.symbol+'" class="col-md-6 nomargin">'
                    +'<div class="panel panel-'+ajax_stock_analysis.recommendationColor+'-alt noborder mb10">'
                        +'<div class="panel-heading noborder">'
                            +'<div class="panel-icon-large"><i id="recommendation_'+ajax_stock_analysis.symbol+'" class="fa">'+ajax_stock_analysis.recommendation+'</i></div>'
                            +'<div class="panel-icon-large-transparent"><i class="fa">'+ajax_stock_analysis.symbol+'</i></div>'
                            +'<div class="media-body clearfix">'
                                +'<div class="pull-right">'
                                    +publish_icon
                                    +'<a href="javascript:void(0);" onclick="shareStock(\''+ajax_stock_analysis.symbol+'\');"><i class="fa fa-2x fa-share-alt tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Stock Info"></i></a>'
                                    +analysis_icon
                                    +'<a href="member/chart/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i></a>'
                                    +'<a href="member/back_test/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-history ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back Test Algorithm"></i></a>'
                                +'</div>'
                            +'</div>'
                            +'<div class="clearfix mt10">'
                                +'<div class="pull-left mt3">'
                                    +'<h4 class="nomargin nopadding"><span class="last_'+ajax_stock_analysis.symbol+'">'+ajax_stock_analysis.last[4]+'</span> <i class="fa fa-arrow-'+priceDirection+'"></i></h4>'
                                +'</div>'
                                +'<div class="pull-left mt3">'
                                    +'<h4 class="nomargin nopadding ml5"><span class="price_increase_'+ajax_stock_analysis.symbol+'">'+priceIncrease+'</span> (<span class="percentage_increase_'+ajax_stock_analysis.symbol+'">'+percentageIncrease+'</span>)</h4>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'</div>';
                $('#stock_panel').removeClass('hide').show().html(stock_panel_html);

                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}

			}else if(ajax_result == 'stock_not_in_account_error'){

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

                var stock_panel_html = 
                '<div class="row row-stat">'
                +'<div id="'+ajax_stock_analysis.symbol+'" class="col-md-6 nomargin">'
                    +'<div class="panel panel-'+ajax_stock_analysis.recommendationColor+'-alt noborder mb10">'
                        +'<div class="panel-heading noborder">'
                            +'<div class="panel-icon-large"><i id="recommendation_'+ajax_stock_analysis.symbol+'" class="fa">'+ajax_stock_analysis.recommendation+'</i></div>'
                            +'<div class="panel-icon-large-transparent"><i class="fa">'+ajax_stock_analysis.symbol+'</i></div>'
                            +'<div class="media-body clearfix">'
                                +'<div class="pull-right">'
                                	+'<a href="javascript:void(0);" onclick="shareStock(\''+ajax_stock_analysis.symbol+'\');"><i class="fa fa-2x fa-share-alt tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Stock Info"></i></a>'
                                    +'<i class="fa disabled fa-2x fa-cogs ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Real-Time Analysis"></i>'
                                    +'<a href="member/chart/'+ajax_stock_analysis.symbol+'"><i class="fa fa-2x fa-signal ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chart"></i></a>'
                                    +'<i class="fa disabled fa-2x fa-history ml10 tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back Test Algorithm"></i>'
                                +'</div>'
                            +'</div>'
                            +'<div class="clearfix mt10">'
                                +'<div class="pull-left mt3">'
                                    +'<h4 class="nomargin nopadding"><span class="last_'+ajax_stock_analysis.symbol+'">'+ajax_stock_analysis.last[4]+'</span> <i class="fa fa-arrow-'+priceDirection+'"></i></h4>'
                                +'</div>'
                                +'<div class="pull-left mt3">'
                                    +'<h4 class="nomargin nopadding ml5"><span class="price_increase_'+ajax_stock_analysis.symbol+'">'+priceIncrease+'</span> (<span class="percentage_increase_'+ajax_stock_analysis.symbol+'">'+percentageIncrease+'</span>)</h4>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'</div>';
                $('#stock_panel').removeClass('hide').show().html(stock_panel_html);

                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
			}else if(ajax_result == 'stock_doesnt_exist_error' || ajax_result == 'stock_analysis_error'){
                if(ajax_alert_message){
                    var alert_message = '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&times;</button>'
                    +ajax_alert_message;

                    $('#alert_message').removeClass('hide').show().html(alert_message);
				}
			}

			//stock list in all cases
			if(ajax_user_stocks){
                var stock_list =
                '<div class="stock-list-style '+ajax_stock_analysis.recommendationColor+'">'
                +'<select id="stock_list_select" name="stock_list_select" onchange="changeStockAnalysis();">'
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
function changeStockAnalysis(){
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
		window.location = base_url + "member/analysis/" + stock_symbol;
	}else{
		window.location.replace(base_url + "member/analysis/" + stock_symbol);
	}
}
function chartStockAnalysis(stock_analysis, price, algorithm, annotations, chart_div){

	var price_start_date = new Date(price[0][0]);
	price_start_date = Date.UTC(price_start_date.getUTCFullYear(), price_start_date.getUTCMonth(), price_start_date.getUTCDate());
	var price_end_date = null;
	for(i=0; i<price.length; i++){
		price_end_date = new Date(price[i][0]);
		price[i][0] = Date.UTC(price_end_date.getUTCFullYear(), price_end_date.getUTCMonth(), price_end_date.getUTCDate());
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

	if(algorithm){
		for(i=0; i<algorithm.length; i++){
			if(algorithm[i] == null){
				algorithm[i] = new Array();
				algorithm[i][0] = null;
				algorithm[i][1] = null;
			}else{
				var algorithm_date = new Date(algorithm[i][0]);
				algorithm[i][0] = Date.UTC(algorithm_date.getUTCFullYear(), algorithm_date.getUTCMonth(), algorithm_date.getUTCDate());
			}
		}
		var algorithm_series = {
			type: 'line',
			lineWidth: 1,
			name: 'Algorithm',
			data: algorithm,
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 2
			},
			dataLabels: {
				style: {color: "black"}
			},
			color: stock_analysis.chartColor
		}
		chart_options.series.push(algorithm_series);
	}

	if(annotations){
		var annotation_data = new Array();
		for(i=0; i<ajax_annotations.length; i++){
			var annotation_date = new Date(annotations[i].recommendationDate);
			annotation_date = Date.UTC(annotation_date.getUTCFullYear(), annotation_date.getUTCMonth(), annotation_date.getUTCDate());
			var annotation = {
                x: annotation_date,
                title: annotations[i].recommendation,
				fillColor: annotations[i].recommendationColor,
				color: '#ffffff'
            }
			annotation_data.push(annotation);
		}
		var annotations_series = {
			type: 'flags',
			onSeries: 'price_series',
            shape: 'circlepin',
			showInLegend: false,
            width: 16,
			lineColor: '#555555',
			data: annotation_data
		}
		chart_options.series.push(annotations_series);
	}

	chart = new Highcharts.Chart(Highcharts.merge(chart_options, Highcharts.theme));
}
function changeAnalysisRisk(){

    var analysis_risk = $('select#analysis_risk').val();
    getStockAnalysisByAJAX(stock_symbol, analysis_risk);
}