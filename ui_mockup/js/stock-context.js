function shareStock(stockSymbol){
    $('#modal_lg').modal('show');
    $('#modal_lg').find('.modal-title').html('Share '+stockSymbol);
    $('#modal_lg').find('.modal-body').load('cr_share_stock.html');
}
function analysisHistory(stockSymbol){
    var trxs = null;
    for(i=0; i<stock_trxs.length; i++){
        if(stock_trxs[i].symbol == stockSymbol){
            trxs = stock_trxs[i].trxs;
            break;
        }
    }
    if(trxs != null){
        $('#modal_lg').modal('show');
        $('#modal_lg').find('.modal-title').html('Analysis History - '+stockSymbol);
        var modal_body =
        '<section>'
            +'<div class="table-responsive scroll-element">'
                +'<table class="table table-striped table-dark">'
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
        for(i=0; i<trxs.length; i++){
                        modal_body = modal_body
                        +'<tr>'
                            +'<td>'+trxs[i].date+'</td>'
                            +'<td class="color-'+trxs[i].color+'">'+trxs[i].trx+'</td>'
                            +'<td>'+parseFloat(trxs[i].price).toFixed(2)+'</td>'
                            +'<td>'+parseFloat(trxs[i].shares).toFixed(2)+'</td>'
                            +'<td>'+parseFloat(trxs[i].value).toFixed(2)+'</td>'
                            +'<td align="right">'+parseFloat(trxs[i].roi).toFixed(2)+'%</td>'
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

function publishStock(stockSymbol){

	var parameters = 'action=get'
    +'&stockSymbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'http://xyz.doubleintegration.com/main/publish_stock',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'publish_stock_success'){
                //update dashboard and modes with newly published stock
			}else if(ajax_result == 'publish_stock_error'){

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

	var parameters = 'action=get'
    +'&stockSymbol='+stockSymbol;

	$.ajax({
		type: 'POST',
		url: 'http://xyz.doubleintegration.com/main/delete_stock',
		data: parameters,
		dataType : 'json',
		success: function(full_data) {

			ajax_result = full_data.ajax_result;
			ajax_message = full_data.ajax_message;

			if(ajax_result == 'delete_stock_success'){
                //update dashboard and modes with deleted stock
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
