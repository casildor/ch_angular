Highcharts.theme = {
	//colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
	//"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: null,
		style: {
			fontFamily: "Dosis, sans-serif"
		},
		marginTop: null,
		marginRight: null,
		marginBottom: null,
		marginLeft: null,
		spacingLeft: 0
	},
	exporting: {
		buttons: {
			contextButton:{
				align: 'right',
				verticalAlign: 'bottom',
				x:0,
				y:-35
			}
		}
	},
    rangeSelector:{
        enabled:true
    },
	navigator: {
		enabled: true,
		height: 40
    },
	title: {
		text: null
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '12px'
		},
		padding: 0,
		margin: 5
	},
	xAxis: {
		gridLineWidth: 1,
		labels: {
			style: {
				fontSize: '11px'
			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		title: {
			style: {
				textTransform: 'uppercase'
			}
		},
		labels: {
			style: {
				fontSize: '11px'
			},
			x: -5
		},
		title: null
	},
	plotOptions: {
		candlestick: {
			lineColor: '#404048'
		}
	},
	tooltip: {
		//backgroundColor: 'rgba(0, 0, 0, 0.80)',
		backgroundColor: 'rgba(40, 40, 40, 0.8)',
		borderColor: 'rgba(20, 20, 20, 0.9)',
		borderWidth: 1,
		style: {
			color: '#fff'
		},
	    crosshairs: true,
	    shared: true
	},


	// General
	background2: '#F0F0EA'

};