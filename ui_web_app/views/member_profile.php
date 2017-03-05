
        <section>
            <div class="mainwrapper">
                <div class="leftpanel">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="profile.html">
                            <img class="img-circle" src="images/profile.png" alt="">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><?php echo $this->session->userdata['user_first_name'].' '.$this->session->userdata['user_last_name'] ?></h4>
                            <small class="text-muted">Level <?php echo $this->session->userdata['profile_level'] ?> (<?php echo $GLOBALS['account_level_limits'][$this->session->userdata['profile_level']];?> stocks)</small>
                        </div>
                    </div><!-- media -->

                    <ul class="nav nav-pills nav-stacked">
                        <li><a href="member/dashboard"><i class="fa fa-home"></i> <span>Dashboard</span></a></li>
                        <li><a href="member/notifications"><span id="notifications_badge" class="pull-right badge hide">0</span><i class="fa fa-bell"></i> <span>Notifications</span></a></li>
                        <li><a href="member/analysis"><i class="fa fa-cogs"></i> <span>Analysis</span></a></li>
                        <li><a href="member/chart"><i class="fa fa-signal"></i> <span>Charts</span></a></li>
                        <li><a href="member/back_test"><i class="fa fa-history"></i> <span>Back Test</span></a></li>
                    </ul>

                </div><!-- leftpanel -->

                <div class="mainpanel">
                    <div class="pageheader">
                        <div class="media">
                            <div class="pageicon pull-left">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="media-body pull-left">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-user"></i></a></li>
                                    <li>My Profile</li>
                                </ul>
                                <h4>My Profile</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

                    <div class="contentpanel">

                        <div class="row row-stat">
                            <div class="col-sm-12 col-md-12">

                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs nav-line">
                                    <li <?php if(isset($tab) && $tab == 1){echo 'class="active"';}?>><a href="#profile" data-toggle="tab"><strong>Profile</strong></a></li>
                                    <li <?php if(isset($tab) && $tab == 2){echo 'class="active"';}?>><a href="#defaults" data-toggle="tab"><strong>Defaults</strong></a></li>
                                    <li <?php if(isset($tab) && $tab == 3){echo 'class="active"';}?>><a href="#account" data-toggle="tab"><strong>Account</strong></a></li>
                                    <li <?php if(isset($tab) && $tab == 4){echo 'class="active"';}?>><a href="#trading" data-toggle="tab"><strong>Trading</strong></a></li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content nopadding noborder">

			                        <div id="alert_message" class="alert alert-dashboard mb10 hide"></div>
			
			                        <div id="loading_view" class="text-center mt20 hide"><h4>In Progress</h4><img src="images/loader20.gif"></div>
                                	
                                    <div class="tab-pane <?php if(isset($tab) && $tab == 1){echo 'active';}?>" id="profile">
                                    
                                        <form action="#" id="profile_form" name="profile_form" onsubmit="return submitProfileForm(this);">
                                        <div class="panel panel-default mb15">
                                            <div class="panel-heading">
                                                <div class="panel-btns">
                                                    <a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
                                                </div><!-- panel-btns -->
                                                <h4 class="panel-title">Profile Information</h4>
                                                <p id="profile_info_and_error">Basic profile info.</p>
                                            </div><!-- panel-heading -->
                                            <div class="panel-body padding15">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                                <input type="text" id="profile_first_name" name="profile_first_name" class="form-control" placeholder="Firstname" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                                <input type="text" id="profile_last_name" name="profile_last_name" class="form-control" placeholder="Lastname" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                                                <input type="email" id="profile_email" name="profile_email" class="form-control" placeholder="Email" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                                                <input type="password" id="profile_password" name="profile_password" class="form-control" placeholder="Enter Password" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group">
                                                                <span class="input-group-addon"><i class="fa fa-map-marker"></i></span>
                                                                <input type="text" id="profile_city" name="profile_city" class="form-control" placeholder="City" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                        	<div class="mt15 show-for-768px">&nbsp;</div>
                                                            <div class="input-group">
                                                                <span class="input-group-addon"><i class="fa fa-map-marker"></i></span>
                                                                <input type="text" id="profile_state" name="profile_state" class="form-control" placeholder="State" maxlength="2" disabled="disabled">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                            </div><!-- panel-body -->
                                        </div><!-- panel -->
                                        
									    <div class="clearfix">
											<div class="pull-left">
											    <a href="javascript:void(0)" id="profile_cancel_button" class="btn btn-success hide" onclick="cancelProfile();">Cancel</a>
											</div>
											<div class="pull-right">
											    <a href="javascript:void(0)" id="profile_edit_button" class="btn btn-success" onclick="editProfile();">Edit</a>
											    <button type="submit" id="profile_save_button" class="btn btn-success hide">Save</button>
											</div>
									    </div><!-- clearfix -->
									    </form>

                                    </div><!-- tab-pane -->

                                    <div class="tab-pane <?php if(isset($tab) && $tab == 2){echo 'active';}?>" id="defaults">
                                    
                                        <form action="" method="post">

                                            <div class="panel panel-default mb15">
                                                <div class="panel-heading">
                                                    <div class="panel-btns">
                                                        <a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
                                                    </div><!-- panel-btns -->
                                                    <h4 class="panel-title">Default Risk Tolerance</h4>
                                                    <p>When initially adding a stock to your account the analysis model will be set to the default risk tolerance. </p>
                                                </div><!-- panel-heading -->

                                                <div class="panel-body nomargin padding15">
                                                    <div class="input-group">
                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_risk" id="default_riskC" value="C" disabled="disabled">
                                                            <label for="default_riskC">Conservative</b></label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_risk" id="default_riskM" value="M" disabled="disabled">
                                                            <label for="default_riskM">Moderate</label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_risk" id="default_riskA" value="A" disabled="disabled">
                                                            <label for="default_riskA">Aggressive</label>
                                                        </div>
                                                    </div>
                                                </div><!-- panel-body -->
                                            </div><!-- panel -->

                                            <div class="panel panel-default mb15">
                                                <div class="panel-heading">
                                                    <div class="panel-btns">
                                                        <a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
                                                    </div><!-- panel-btns -->
                                                    <h4 class="panel-title">Default Back Testing Range</h4>
                                                    <p>When initially adding a stock to your account the back testing range will be set to the default range. </p>
                                                </div><!-- panel-heading -->

                                                <div class="panel-body padding15">
                                                    <div class="input-group">
                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_bt_range" id="default_bt_range1" value="1" disabled="disabled">
                                                            <label for="default_bt_range1">1 year</b></label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_bt_range" id="default_bt_range2" value="2" disabled="disabled">
                                                            <label for="default_bt_range2">2 year</b></label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_bt_range" id="default_bt_range3" value="3" disabled="disabled">
                                                            <label for="default_bt_range3">3 years</label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_bt_range" id="default_bt_range5" value="5" disabled="disabled">
                                                            <label for="default_bt_range5">5 years</label>
                                                        </div>

                                                        <div class="rdio rdio-default">
                                                            <input type="radio" name="default_bt_range" id="default_bt_range10" value="10" disabled="disabled">
                                                            <label for="default_bt_range10">10 years</label>
                                                        </div>
                                                    </div>
                                                </div><!-- panel-body -->
                                            </div><!-- panel -->

                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <a href="javascript:void(0)" id="default_cancel_button" class="btn btn-success hide"onclick="cancelDefaults();">Cancel</a>
                                                </div>
                                                <div class="pull-right">
											    <a href="javascript:void(0)" id="default_edit_button" class="btn btn-success" onclick="editDefaults();">Edit</a>
											    <a href="javascript:void(0)" id="default_save_button" class="btn btn-success hide" onclick="saveDefaults();">Save</a>
                                                </div>
                                            </div><!-- clearfix -->
                                            
                                        </form><!-- form -->
                                        
                                    </div><!-- tab-pane -->

                                    <div class="tab-pane <?php if(isset($tab) && $tab == 3){echo 'active';}?>" id="account">

									    <div class="panel panel-default mb15">
											<div class="panel-heading">
											    <div class="panel-btns">
												<a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
											    </div><!-- panel-btns -->
											    <h4 class="panel-title">Account Level</h4>
											    <p>Individual form controls automatically receive some global styling.</p>
											</div><!-- panel-heading -->
											<div class="panel-body padding15">
											    <div class="input-group">
												<div class="rdio rdio-default">
												    <input type="radio" name="account_level" id="account_level1" value="1" disabled="disabled">
												    <label for="account_level1">Level 1: &nbsp;&nbsp;6 Stocks ($1/month)</label>
												</div>
						
												<div class="rdio rdio-default">
												    <input type="radio" name="account_level" id="account_level2" value="2" disabled="disabled">
												    <label for="account_level2">Level 2: 12 Stocks ($2/month)</label>
												</div>
						
												<div class="rdio rdio-default">
												    <input type="radio" name="account_level" id="account_level3" value="3" disabled="disabled">
												    <label for="account_level3">Level 3: 18 Stocks ($3/month)</label>
												</div>
						
												<div class="rdio rdio-default">
												    <input type="radio" name="account_level" id="account_level4" value="4" disabled="disabled">
												    <label for="account_level4">Level 4: 24 Stocks ($4/month)</label>
												</div>
											    </div>
											</div><!-- panel-body -->
									    </div><!-- panel -->
					
										<form action="#" method="post" id="payment_form" class="hide">
									    <div class="panel panel-default mb15">
											<div class="panel-heading">
											    <div class="panel-btns">
													<a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
											    </div><!-- panel-btns -->
											    <h4 id="upgrade_payment_title" class="panel-title">Upgrade Payment <span id="payment_amount"></span></h4>
											    <p>Individual form controls automatically receive some global styling.</p>
											</div><!-- panel-heading -->
											<div class="panel-body padding15">
											    <div class="form-group nomargin">
													<div class="row">
													    <div class="col-sm-6">
															<div class="input-group mb15">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
															    <input type="text" name="cc_first_name" id="cc_first_name" class="form-control" placeholder="<?php echo $this->session->userdata['user_first_name'] ?>" value="<?php echo $this->session->userdata['user_first_name'] ?>">
															</div><!-- input-group -->
													    </div>
													    <div class="col-sm-6">
															<div class="input-group mb15">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
															    <input type="text" name="cc_last_name" id="cc_last_name" class="form-control" placeholder="<?php echo $this->session->userdata['user_last_name'] ?>" value="<?php echo $this->session->userdata['user_last_name'] ?>">
															</div><!-- input-group -->
													    </div>
													</div><!-- row -->
													<div class="row">
													    <div class="col-sm-6">
															<div class="input-group mb15">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></span>
															    <input type="text" name="cc_number" id="cc_number" class="form-control" placeholder="1234123412341234">
															</div><!-- input-group -->
													    </div>
													    <div class="col-sm-3">
															<div class="input-group mb15">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
															    <input type="text" name="cc_expire_month" id="cc_expire_month" class="form-control" placeholder="Expire Month">
															</div><!-- input-group -->
													    </div>
													    <div class="col-sm-3">
															<div class="input-group mb15">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
															    <input type="text" name="cc_expire_year" id="cc_expire_year" class="form-control" placeholder="Expire Year">
															</div><!-- input-group -->
													    </div>
													</div><!-- row -->
													<div class="row">
													    <div class="col-sm-6">
															<div class="input-group">
															    <span class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></span>
															    <input type="text" name="cc_security_code" id="cc_security_code" class="form-control" placeholder="123">
															</div><!-- input-group -->
													    </div>
													    <div class="col-sm-6">
															<div class="input-group">
															    <img src="images/cvv_security_code.png" width="155">
															</div><!-- input-group -->
													    </div>
													</div><!-- row -->
											    </div><!-- form-group -->
						
											</div><!-- panel-body -->
									    </div><!-- panel -->
									    
										</form><!-- form -->

										<div class="clearfix">
											<div class="pull-left">
												<a href="javascript:void(0)" id="account_cancel_button" class="btn btn-success hide"onclick="cancelUpgrade();">Cancel</a>
											</div>
											<div class="pull-right">
												<a href="javascript:void(0)" id="account_upgrade_button" class="btn btn-success" onclick="startUpgrade();">Upgrade</a>
												<a href="javascript:void(0)" id="account_pay_button" class="btn btn-success hide" onclick="payUpgrade();">Pay</a>
											</div>
										</div><!-- clearfix -->

                                    </div><!-- tab-pane -->

                                    <div class="tab-pane <?php if(isset($tab) && $tab == 4){echo 'active';}?>" id="trading">
                                        <div class="panel panel-default mb15">
                                            <div class="panel-heading">
                                                <div class="panel-btns">
                                                    <a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
                                                </div><!-- panel-btns -->
                                                <h4 class="panel-title">Trade King</h4>
                                                <p>Enter your account info to enable buy and sell buttons</p>
                                            </div><!-- panel-heading -->
                                            <div class="panel-body padding15">
                                                <form action="" method="post">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="Trade King Token">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="Trade King Account #">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="Trade King Username">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="Trade King Password">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="clearfix">
                                                        <div class="pull-left">
                                                            <div class="ckbox ckbox-primary mt5">
                                                                <input type="checkbox" name="agree_trade_king" id="agree_trade_king" value="1">
                                                                <label for="agree_trade_king">I agree with <a href="">Terms and Conditions</a></label>
                                                            </div>
                                                        </div>
                                                        <div class="pull-right">
                                                            <button type="submit" class="btn btn-success">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div><!-- panel-body -->
                                        </div><!-- panel -->

                                        <div class="panel panel-default mb15">
                                            <div class="panel-heading">
                                                <div class="panel-btns">
                                                    <a href="" class="panel-minimize tooltips" data-toggle="tooltip" title="Minimize Panel"><i class="fa fa-minus"></i></a>
                                                </div><!-- panel-btns -->
                                                <h4 class="panel-title">eTrade</h4>
                                                <p>Enter your account info to enable buy and sell buttons</p>
                                            </div><!-- panel-heading -->
                                            <div class="panel-body padding15">
                                                <form action="" method="post">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="eTrade Token">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="eTrade Account #">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="eTrade Username">
                                                            </div><!-- input-group -->
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group mb15">
                                                                <span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
                                                                <input type="text" class="form-control" placeholder="eTrade Password">
                                                            </div><!-- input-group -->
                                                        </div>
                                                    </div><!-- row -->
                                                    <div class="clearfix">
                                                        <div class="pull-left">
                                                            <div class="ckbox ckbox-primary mt5">
                                                                <input type="checkbox" name="agree_etrade" id="agree_etrade" value="1">
                                                                <label for="agree_etrade">I agree with <a href="">Terms and Conditions</a></label>
                                                            </div>
                                                        </div>
                                                        <div class="pull-right">
                                                            <button type="submit" class="btn btn-success">Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div><!-- panel-body -->
                                        </div><!-- panel -->

                                    </div><!-- tab-pane -->

                                </div><!-- tab-content -->
                            </div><!-- col-sm-12 col-md-12 -->
                        </div><!-- row -->

                    </div><!-- contentpanel -->

                </div><!-- mainpanel -->
            </div><!-- mainwrapper -->
        </section>
