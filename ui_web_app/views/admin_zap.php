        <section>
            <div class="mainwrapper">
                <div class="leftpanel">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="profile.html">
                            <img class="img-circle" src="images/profile.png" alt="">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><?php echo $this->session->userdata['user_first_name'].' '.$this->session->userdata['user_last_name'] ?></h4>
                            <small class="text-muted">Admin</small>
                        </div>
                    </div><!-- media -->

                    <ul class="nav nav-pills nav-stacked">
                        <li><a href="admin/dashboard"><i class="fa fa-home"></i> <span>Dashboard</span></a></li>
                        <li class="active"><a href="admin/zap"><i class="fa fa-bolt"></i> <span>Zap</span></a></li>
                    </ul>

                </div><!-- leftpanel -->

                <div class="mainpanel">
                    <div class="pageheader">
                        <div class="media">
                            <div class="pageicon pull-left">
                                <i class="fa fa-bolt"></i>
                            </div>
                            <div class="media-body pull-left">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-bolt"></i></a></li>
                                    <li>Zap</li>
                                </ul>
                                <h4>Zap</h4>
                            </div>
                            <div class="pull-right">
                            	<a href="javascript:void(0);" class="btn btn-success btn-sm" onclick="clearZapByAJAX()">Clear</a>
                            </div>
                            <div class="pull-right">
                            	<a href="javascript:void(0);" class="btn btn-success btn-sm" onclick="stopZap()">Stop</a>
                            </div>
                            <div class="pull-right">
                            	<a href="javascript:void(0);" id="clock" class="btn btn-success btn-sm" onclick="startZap()">Start</a>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

                    <div class="contentpanel">

                        <div id="alert_message" class="alert alert-dashboard mb10 hide"></div>

                        <div id="loading_view" class="text-center mt20 mb20 hide"><h4>Zapping</h4><img src="images/loader20.gif"></div>

                        <div id="stock_panel">
							<?php if(isset($stocks)){?>
                        	<div class="row row-stat">
							<?php
								foreach($stocks as $stock){
									$stock_daily_price = 'TBD';
									$stock_daily_time = 'TBD';
									if(isset($stock->zap)){
										$stock_daily_price = $stock->zap->price;
										$stock_daily_time = $stock->zap->time;
									}
				                    echo '<div id="'.$stock->symbol.'" class="col-md-4 nomargin">';
				                    echo '<div class="panel panel-info-alt noborder mb10">';
				                    echo '<div class="panel-heading noborder">';
				                    echo '<div class="panel-icon-large-transparent"><i class="fa">'.$stock->symbol.'</i></div>';
				                    echo '<div class="clearfix mt5">';
				                    echo '<div class="pull-left">';
				                    echo '<h5 class="md-title nomargin">PRICE</h5>';
				                    echo '<h5 class="date nomargin pull-left">'.number_format((float)$stock_daily_price, 2, '.', '').'</h5>';
				                    echo '</div>';
				                    echo '<div class="pull-left ml15">';
				                    echo '<h5 class="md-title nomargin">TIME</h5>';
				                    echo '<h5 class="date nomargin pull-left">'.$stock_daily_time.'</h5>';
				                    echo '</div>';
				                    echo '</div>';
				                    echo '</div>';
				                    echo '</div>';
				                    echo '</div>';
				                }
        					} ?>
							</div>
                        </div>

                    </div><!-- contentpanel -->

                </div><!-- mainpanel -->
            </div><!-- mainwrapper -->
        </section>
