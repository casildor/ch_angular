
function getChartByAJAX(stock_symbol, div_element, secondLineColor){

	var parameters = 'action=get'
	+'&stock_symbol='+stock_symbol;

	$.ajax({
		type: 'POST',
		url: 'http://xyz.doubleintegration.com/main/get_chart_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stock_symbol = full_data.ajax_stock_symbol;
			ajax_close = full_data.ajax_close;
			ajax_sma20 = full_data.ajax_sma20;
			ajax_annotations = full_data.ajax_annotations;

			if(ajax_result == 'chart_success'){

				var close_start_date = new Date(ajax_close[0][0]);
				close_start_date = Date.UTC(close_start_date.getUTCFullYear(), close_start_date.getUTCMonth(), close_start_date.getUTCDate());
				var close_end_date = null;
				for(i=0; i<ajax_close.length; i++){
					close_end_date = new Date(ajax_close[i][0]);
					ajax_close[i][0] = Date.UTC(close_end_date.getUTCFullYear(), close_end_date.getUTCMonth(), close_end_date.getUTCDate());
					close_end_date = ajax_close[i][0];
				}

				//close price and predicted price
				var chart_options = {
					chart: {
						renderTo: div_element,
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
			        	min: close_start_date,
			        	max: close_end_date
			        },
					scrollbar: {
					    enabled: false,
						height: 0
					},
			        series: [{//close
						type: 'line',
            			id: 'closeseries',
						lineWidth: 1,
						name: 'Price',
						data: ajax_close,
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

				if(ajax_sma20){
					for(i=0; i<ajax_sma20.length; i++){
						if(ajax_sma20[i] == null){
							ajax_sma20[i] = new Array();
							ajax_sma20[i][0] = null;
							ajax_sma20[i][1] = null;
						}else{
							var sma20_date = new Date(ajax_sma20[i][0]);
							ajax_sma20[i][0] = Date.UTC(sma20_date.getUTCFullYear(), sma20_date.getUTCMonth(), sma20_date.getUTCDate());
						}
					}
					var sma20_series = {
						type: 'line',
						lineWidth: 1,
						name: 'Algorithm',
						data: ajax_sma20,
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 2
						},
						dataLabels: {
							style: {color: "black"}
						},
						color: secondLineColor
					}
					chart_options.series.push(sma20_series);
				}

				if(ajax_annotations){
					var annotationData = new Array();
					for(i=0; i<ajax_annotations.length; i++){
						var annotationDate = new Date(ajax_annotations[i].recommendationDate);
						annotationDate = Date.UTC(annotationDate.getUTCFullYear(), annotationDate.getUTCMonth(), annotationDate.getUTCDate());
						var annotation = {
			                x: annotationDate,
			                title: ajax_annotations[i].recommendation,
							fillColor: ajax_annotations[i].recommendationColor,
							color: '#ffffff'
			            }
						annotationData.push(annotation);
					}
					var annotations_series = {
						type: 'flags',
						onSeries: 'closeseries',
			            shape: 'circlepin',
						showInLegend: false,
			            width: 16,
						lineColor: '#555555',
						data: annotationData
					}
					chart_options.series.push(annotations_series);
				}

				chartObject = new Highcharts.Chart(Highcharts.merge(chart_options, Highcharts.theme));

				closeDataAndChartObject = [ajax_close,chartObject];//global

			}else if(ajax_result == 'chart_error'){

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}

function changeChartRange(dateRange) {
    if (!closeDataAndChartObject || !closeDataAndChartObject[0] || !closeDataAndChartObject[1]) return;

    var closeData = closeDataAndChartObject[0];
    var chartObject = closeDataAndChartObject[1];

	var x_max_date = new Date(closeData[closeData.length-1][0]);
	var x_max_year = x_max_date.getUTCFullYear();
	var x_max_month = x_max_date.getUTCMonth();
	var x_max_day = x_max_date.getUTCDate();
	var x_max = Date.UTC(x_max_year, x_max_month, x_max_day);

	var x_min = -1;
    if(dateRange == '1d'){
		x_min = Date.UTC(x_max_year, x_max_month, x_max_day-1);
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
    	chartObject.xAxis[0].setExtremes(x_min,x_max);

    var dMax = 0;
    var dMin = 10000.00;
    $(chartObject.series).each(function(i, serie){
    	if(serie.dataMax > dMax)
    		dMax = chartObject.yAxis[0].dataMax;
    	if(serie.dataMin < dMin)
    		dMin = chartObject.yAxis[0].dataMin;
    });

	y_min = dMin - ((dMax - dMin) * 0.05);
	y_max = dMax + ((dMax - dMin) * 0.05);
    chartObject.yAxis[0].setExtremes(y_min,y_max);
}

//-------------------------------------------------
/*
function getChartDataByAJAX(stock_symbol,chartDiv){

	var parameters = 'action=get'
	+'&stock_symbol='+stock_symbol;

	$.ajax({
		type: 'POST',
		url: 'http://xyz.doubleintegration.com/main/get_chart_by_ajax',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			ajax_stock_symbol = full_data.ajax_stock_symbol;
			var ajax_close = full_data.ajax_close;
			var ajax_sma20 = full_data.ajax_sma20;

			if(ajax_result == 'chart_success'){
				var start_date = new Date(ajax_close[0][0]);
				start_date = Date.UTC(start_date.getUTCFullYear(), start_date.getUTCMonth(), start_date.getUTCDate());
				var end_date = null;
				for(i=0; i<ajax_close.length; i++){
					end_date = new Date(ajax_close[i][0]);
					ajax_close[i][0] = Date.UTC(end_date.getUTCFullYear(), end_date.getUTCMonth(), end_date.getUTCDate());
					end_date = ajax_close[i][0];
				}
				if(ajax_sma20 != null){
					for(i=0; i<ajax_sma20.length; i++){
						if(ajax_sma20[i] == null){
							ajax_sma20[i] = new Array();
							ajax_sma20[i][0] = null;
							ajax_sma20[i][1] = null;
						}else{
							var sma20_date = new Date(ajax_sma20[i][0]);
							ajax_sma20[i][0] = Date.UTC(sma20_date.getUTCFullYear(), sma20_date.getUTCMonth(), sma20_date.getUTCDate());
						}
					}
				}


				var curve1 = new Curve();
				curve1.addTitle('Price');
				curve1.addData(ajax_close);
				curve1.addLineColor('#000000');

				var curve2 = new Curve();
				curve2.addTitle('SMA 20');
				curve2.addData(ajax_sma20);
				curve2.addLineColor('#d9534f');

				chart = new Chart(start_date,end_date,chartDiv);
				chart.addCurve(curve1);
				chart.addCurve(curve2);
				chart.generate();

			}else if(ajax_result == 'chart_error'){

			}

		},
		error: function( xhr, tStatus, err ) {
			//alert( xhr.responseText);
		},
		cache: false
	});

	return;
}
*/
function Chart(start_date, end_date, divElement){
	this.title;
	this.type;
	this.curves = new Array();
	this.chart;
	this.divElement = divElement;
	this.options = {
		chart: {
			renderTo: divElement,
			spacing: [10,0,0,0]
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
			min: start_date,
			max: end_date
		},
		series: []
	};
}
Chart.prototype.addTitle = function(t) {
	this.title = t;
}
Chart.prototype.addType = function(y) {
	this.type = y;
}
Chart.prototype.addCurve = function(c) {
	this.curves.push(c);
	var curveSeries = {
		type: 'line',
		lineWidth: 1,
		name: c.title,
		data: c.data,
		marker: {
			enabled: false,
			symbol: 'circle',
			radius: 2
		},
		dataLabels: {
			style: {color: c.lineColor}
		},
		color: c.lineColor
	}
	this.options.series.push(curveSeries);
}
Chart.prototype.generate = function(){
	this.chart = new Highcharts.Chart(Highcharts.merge(this.options, Highcharts.theme));
}
Chart.prototype.addCurves = function(cs) {
	this.curves.concat(cs);
}
Chart.prototype.getCurve = function(index) {
	return this.curves[index];
}
Chart.prototype.deleteCurve = function(index) {
	this.curves.splice(index);
}

Chart.prototype.changeRange = function(dateRange) {
    if (!this.chart) return;

    var curveData = this.curves[0].data;

	var x_max_date = new Date(curveData[curveData.length-1][0]);
	var x_max_year = x_max_date.getUTCFullYear();
	var x_max_month = x_max_date.getUTCMonth();
	var x_max_day = x_max_date.getUTCDate();
	var x_max = Date.UTC(x_max_year, x_max_month, x_max_day);

	var x_min = -1;
    if(dateRange == '1d'){
		x_min = Date.UTC(x_max_year, x_max_month, x_max_day-1);
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
    	var x_min_date = new Date(curveData[0][0]);//ajax_stock_data_start_date
    	x_min = Date.UTC(x_min_date.getUTCFullYear(), x_min_date.getUTCMonth(), x_min_date.getUTCDate());
    }

    if(x_min > -1)
    	this.chart.xAxis[0].setExtremes(x_min,x_max);

    var dMax = 0;
    var dMin = 10000.00;
    $(this.chart.series).each(function(i, serie){
    	if(serie.dataMax > dMax)
    		dMax = this.chart.yAxis[0].dataMax;
    	if(serie.dataMin < dMin)
    		dMin = this.chart.yAxis[0].dataMin;
    });

	y_min = dMin - ((dMax - dMin) * 0.05);
	y_max = dMax + ((dMax - dMin) * 0.05);
    this.chart.yAxis[0].setExtremes(y_min,y_max);
}


function Curve(){
	this.title;
	this.lineColor;
	this.lineType;
	this.data;
	this.annotations;
}
Curve.prototype.addTitle = function(t) {
	this.title = t;
}
Curve.prototype.addLineColor = function(lc) {
	this.lineColor = lc;
}
Curve.prototype.addLineType = function(lt) {
	this.lineType = lt;
}
Curve.prototype.addData = function(d) {
	this.data = d;
}
Curve.prototype.addDataPoint = function(dp) {
	this.data.push(dp);
}
Curve.prototype.addAnnotations = function(a) {
	this.annotations = a;
}
