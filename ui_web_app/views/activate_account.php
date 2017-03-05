
        <section>
            <div class="mainwrapper no-right-border">

                    <div class="contentpanel">

                        <div class="panel panel-signup">
                            <div class="panel-body">
                                <h2 class="text-center nomargin">CH</h2>
                                <div class="logo text-center nomargin mt10 mb10">
                                    <!--img src="images/chawkhawk_logo_dark.png" width="100" alt="Chain Logo"-->
                                	<h3 class="text-center nomargin">Analysis Made Simple</h3>
                                </div>
                                <h4 class="text-center mb5">Activate Account</h4>

                                <div class="mt20">
									<p class="justify">
									<b><?php echo $this->session->userdata['user_first_name'].' '.$this->session->userdata['user_last_name'] ?></b>, thank you for creating an account with CH.com.
									You can use all the website features such as the dashboard,
									buy and sell recommendations, analysis, charting, back testing, and notifications.</p>
									<div class="table-responsive nomargin mt20">
										<table class="table table-striped table-bordered nomargin">
											<tr><td>first name</td><td><?php echo $this->session->userdata['user_first_name'] ?></td></tr>
											<tr><td>last name</td><td><?php echo $this->session->userdata['user_last_name'] ?></td></tr>
											<tr><td>email</td><td><?php echo $this->session->userdata['user_email'] ?></td></tr>
											<tr><td>level</td><td><?php echo $this->session->userdata['profile_level'] ?></td></tr>
										</table>
									</div>
                                </div>

                            </div><!-- panel-body -->
                            <div class="panel-footer">
                                <a href="member/dashboard" class="btn btn-primary btn-block">Go To Your Dashboard</a>
                            </div><!-- panel-footer -->
                        </div><!-- panel -->

                    </div><!-- contentpanel -->

            </div><!-- mainwrapper -->
        </section>