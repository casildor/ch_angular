<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" dir="ltr" >

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>CH: Analysis Made Simple</title>

		<base href="<?php echo base_url() ?>">

		<link type="text/css" rel="stylesheet" href="css/style.default.css"></link>
        <link href="css/jquery.gritter.css" rel="stylesheet">
		<link type="text/css" rel="stylesheet" href="css/forms.css"></link>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->
    </head>

	<body>
		<?php $this->load->view('header'); ?>
		<?php $this->load->view($page_name); ?>
		<?php $this->load->view('modal_windows'); ?>

        <!--script src="js/jquery-2.1.4.min.js"></script-->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/modernizr.min.js"></script>
        <script src="js/pace.min.js"></script>
        <script src="js/retina.min.js"></script>
        <script src="js/jquery.cookies.js"></script>

        <script src="js/custom.js"></script>

        <script src="js/sign-up-sign-in.js"></script>
        <script src="js/form-validation.js"></script>

<?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
	<?php if($this->session->userdata['user_type'] == 'M'){?>


        <script src="https://code.highcharts.com/stock/highstock.js"></script>
        <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
		<script src="js/highstocks-themes/grid-light.js"></script>

        <script src="js/jquery.sparkline.min.js"></script>

        <script src="js/member-notifications.js"></script>
        <script src="js/member-profile.js"></script>
        <script src="js/member-dashboard.js"></script>
        <script src="js/member-analysis.js"></script>
        <script src="js/member-chart.js"></script>
        <script src="js/member-back-test.js"></script>
        <script src="js/member-stock-context.js"></script>

		<script>
		$(document).ready(function() {
			getNotificationsByAJAX();

			<?php if($page_name == 'member_profile'){?>
	    		getProfileByAJAX();
            <?php }?>

			<?php if($page_name == 'member_dashboard'){?>
		    	getDashboardStocksByAJAX();

		    	var promise = getServerTimeByAJAX();
		    	promise.then(function(result) {
		    		//console.log(result); // "Stuff worked!"
		    		var server_date_time = result.ajax_server_time.split(' ');
		    		var server_date = server_date_time[0].split('/');
		    		var server_time = server_date_time[1].split(':');

		    		var pm = (server_date_time[2].indexOf('PM') !== -1) ? true:false;
		    		var date_time_hr = parseFloat(server_time[0]);
					//setTimeout(function(date_time_hr, pm){
					    var clock_div = $('#clock');
				    	if(date_time_hr >= 1 && pm){
				    		clock_div.addClass('hide').hide();
				    	}else{
				    		clock_div.removeClass('hide').show();
							var timeMinutes = 60 * 15;
						    startTimer(timeMinutes, clock_div);

							var dashboard_handle = setInterval('getDashboardStocksByAJAX()',timeMinutes*1000);
				    	}
			    	//},1000);
	    		}, function(err) {
	    		  console.log(err); // Error: "It broke"
	    		});
            <?php }?>

			<?php if($page_name == 'member_analysis'){?>
				var stockSymbol = $('#stock_panel').html();
				getStockAnalysisByAJAX(stockSymbol, '<?php echo $this->session->userdata['profile_risk']?>');
            <?php }?>

			<?php if($page_name == 'member_chart'){?>
				var stockSymbol = $('#stock_panel').html();
				getStockChartByAJAX(stockSymbol);
	            var cRange = $('select#chart_range').val();
	            setTimeout(function(){
				  changeChartRange();
				}, 3000);
	        <?php }?>

			<?php if($page_name == 'member_back_test'){?>
				var stockSymbol = $('#stock_panel').html();
				getStockBacktestByAJAX(stockSymbol, '<?php echo $this->session->userdata['profile_bt_range']?>');
        	<?php }?>
        });
		</script>
	<?php }else if($this->session->userdata['user_type'] == 'A'){?>
        <script src="js/admin-dashboard.js"></script>
		<script>
		$(document).ready(function() {
			<?php if($page_name == 'admin_dashboard'){?>
				getDashboardStocksByAJAX();
            <?php }?>
        });
		</script>
	<?php }?>
<?php }?>

	</body>
</html>