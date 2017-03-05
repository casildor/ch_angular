<?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
        <section>
            <div class="mainwrapper">
                <div class="leftpanel">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="member/profile">
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
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="media-body pull-left">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-home"></i></a></li>
                                    <li>Home</li>
                                </ul>
                                <h4>Home</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

					<div class="contentpanel">

						<div class="panel panel-home">
					    	<div class="panel-body">
								<div class="row">
									<div class="col-sm-6 text-center">
										<h3 class="nomargin text-dark-blue"><!--Chawk Hawk-->CH</h3>
										<img src="images/chawkhawk_logo.png" class="mt10" width="140">
									</div>
									<div class="col-sm-6">
										<div class="hide-for-768px">
											<h4 class="nomargin text-dark-blue">Analysis Made Simple</h4>
											<ul class="mt10">
												<li>Personalized Dashboard</li>
												<li>Add, Delete, Publish Stocks Easily</li>
												<li>Lightning Fast Analysis</li>
												<li>Charting</li>
												<li>Back Test the Algorithms</li>
												<li>Real-Time Recommendations</li>
												<li>Automated Email Notifications</li>
											</ul>
										</div>
										<div class="text-center show-for-768px">
											<h4 class="nomargin text-dark-blue mt10">Analysis Made Simple</h4>
											<p class="nomargin nopadding mt3">Personalized Dashboard</p>
											<p class="nomargin nopadding mt3">Add, Delete, Publish Stocks Easily</p>
											<p class="nomargin nopadding mt3">Lightning Fast Analysis</p>
											<p class="nomargin nopadding mt3">Charting</p>
											<p class="nomargin nopadding mt3">Back Test CH Algorithms</p>
											<p class="nomargin nopadding mt3">Real-Time Buy/Sell Recommendations</p>
											<p class="nomargin nopadding mt3">Automated Email Notifications</p>
										</div>
									</div>
								</div>
					    	</div><!-- panel-body -->
						    <div class="panel-footer text-center">
							<a href="member/dashboard" class="btn btn-primary">Go To Your Dashboard</a>
						    </div><!-- panel-footer -->
						</div><!-- panel -->
					
						<div class="panel-home-other">
							<div class="row mt20">
								<div class="col-sm-12">
									<h4 class="nomargin text-dark-blue text-center">What Is <!--Chawk Hawk-->CH?</h4>
									<p class="justify mt10">
									<!--Chawk Hawk-->CH is a platform designed to help an investor make critical buy and sell decisions to mimimize risk and maximize profits.
									The platform removes the guess work, the emotion, and the mathematics out of the decision making process, and turns any investor into a <b><i>Hawk</i></b>.
									Under the hood <!--Chawk Hawk-->CH cuts through the noise, analyzes patterns and historical data, runs various statistical analysis, applies a set of 
									proprietary rules and conditions, and searches for those critical buy and sell points. When a critical point is calculated the platform notifies
									the investor immediately in the dashboard and through automated emails so the investor can take action immediately.
									</p>
								</div>
							</div>
							<div class="row mt10">
								<div class="col-sm-6">
									<ul class="nomargin">
										<li>inflextion points to prepare for an entry</li>
										<li>the start of up trends to enter the market</li>
										<li>inflextion points to prepare for an exit</li>
										<li>the start of down trends to exit the market</li>
									</ul>
								</div>
								<div class="col-sm-6">
									<ul class="nomargin">
										<li>understand conditions</li>
										<li>minimize risk</li>
										<li>maximize ROI</li>
										<li>It's Free!</li>
									</ul>
								</div>
							</div>
							<div class="row mt20">
								<div class="col-sm-12">
									<h4 class="nomargin text-dark-blue text-center">How Does <!--Chawk Hawk-->CH Work?</h4>
									<p class="justify mt10">
									<!--Chawk Hawk-->CH was designed with the novice investor in mind. After creating an account the dashboard will keep track of all the stocks
									added to the account. From the dashboard it is one click away to get analysis, charts, back testing, and notifications.
									</p>
								</div>
							</div>
							<div class="row mt10">
								<div class="col-sm-6">
									<ul class="nomargin">
										<li>Sign Up for Free!</li>
										<li>Add a stock symbol to the dashboard</li>
										<li>Publish the stock to get real-time buy/sell recommendations</li>
										<li>Interactive analysis, charting and back testing</li>
										<li>Share a stock with a friend</li>
										<li>Easy access to past CH buy and sell recommendations</li>
										<li>Manage profile and account settings</li>
										<li><a href="main/help" class="btn btn-primary btn-xs">Help</a> section with step-by-step instructions</li>
									</ul>
								</div>
							</div>
							<div class="row mt20">
								<div class="col-sm-12">
									<div class="panel panel-dashboard">
								    	<div class="panel-body">
											<img src="images/dashboard.png">
										</div>
									</div>
								</div>
							</div>
							<div class="row mt20">
								<div class="col-sm-12">
									<h4 class="nomargin text-dark-blue text-center">What Kind of Investor are You?</h4>
									<p class="justify mt10">
									Stock market terminology includes a long list of farm animals as analogies to the different types of investors. There are
									<i>bulls</i>, <i>bears</i>, <i>chickens</i>, <i>pigs</i>, and <i>sheep</i>. <!--Chawk Hawk-->CH has added a new analogy to the list for those investors
									that are patient, analytical, and waiting for the right opportunity to buy and sell. We call them <b><i>Hawks</i></b>.
									</p>
								</div>
							</div>
							<div class="row mt10">
								<div class="col-sm-12">
									<ul class="nomargin">
										<li>A <i>bull</i> market is when everything in the economy is great, people are finding jobs, gross domestic product (GDP) is growing, and stocks are rising. <i>Bull</i> markets make it easier for investors to pick profitable stocks.</li>
										<li>A <i>bear</i> market is when the economy is bad, recession is looming and stock prices are falling. <i>Bear</i> markets make it tough for investors to pick profitable stocks.</li>
										<li><i>Chickens</i> are afraid to lose anything. Their fear overrides their need to make profits and so they turn only to money-market securities or get out of the markets entirely.</li>
										<li><i>Pigs</i> are high-risk investors looking for the one big score in a short period of time. <i>Pigs</i> buy on hot tips and invest in companies without doing their due diligence. <i>Pigs</i> can get slaughtered.</li>
										<li><i>Sheep</i> lack a focused trading strategy and trade on emotion and the suggestions of others, including friends, family and financial gurus. <i>Sheep</i> usually get slaughtered.</li>
										<li>
										A <b><i>Hawk</i></b> is constantly analyzing the situation, has a clear strategy, and is looking for the right opportunity in any market.
										When that opportunity presents itself the <b><i>Hawk</i></b> quickly flies in and strikes with efficiency.
										</li>
									</ul>
								</div>
							</div>
						</div>
						
					</div><!-- contentpanel -->

                </div><!-- mainpanel -->
            </div><!-- mainwrapper -->
        </section>
<?php }else{?>
        <section>
            <div class="mainwrapper no-right-border">
                    <div class="pageheader">
                        <div class="media">
                            <div class="pageicon pull-left">
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="media-body pull-left">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-home"></i></a></li>
                                    <li>Home</li>
                                </ul>
                                <h4>Home</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

				<div class="contentpanel">
				
					<div class="panel panel-home">
				    	<div class="panel-body">
							<div class="row">
								<div class="col-sm-6 text-center">
									<h3 class="nomargin text-dark-blue"><!--Chawk Hawk-->CH</h3>
									<img src="images/chawkhawk_logo.png" class="mt10" width="140">
								</div>
								<div class="col-sm-6">
									<div class="hide-for-768px">
										<h4 class="nomargin text-dark-blue">Analysis Made Simple</h4>
										<ul class="mt10">
											<li>Personalized Dashboard</li>
											<li>Add, Delete, Publish Stocks Easily</li>
											<li>Lightning Fast Analysis</li>
											<li>Charting</li>
											<li>Back Test the Algorithms</li>
											<li>Real-Time Recommendations</li>
											<li>Automated Email Notifications</li>
										</ul>
									</div>
									<div class="text-center show-for-768px">
										<h4 class="nomargin text-dark-blue mt10">Analysis Made Simple</h4>
										<p class="nomargin nopadding mt3">Personalized Dashboard</p>
										<p class="nomargin nopadding mt3">Add, Delete, Publish Stocks Easily</p>
										<p class="nomargin nopadding mt3">Lightning Fast Analysis</p>
										<p class="nomargin nopadding mt3">Charting</p>
										<p class="nomargin nopadding mt3">Back Test CH Algorithms</p>
										<p class="nomargin nopadding mt3">Real-Time Buy/Sell Recommendations</p>
										<p class="nomargin nopadding mt3">Automated Email Notifications</p>
									</div>
								</div>
							</div>
				    	</div><!-- panel-body -->
					    <div class="panel-footer text-center">
						<a href="main/sign_up" class="btn btn-primary">Not a Member? Sign Up</a>
					    </div><!-- panel-footer -->
					    <div class="panel-footer text-center">
						<a href="main/sign_in" class="btn btn-primary">Already a Member? Sign In</a>
					    </div><!-- panel-footer -->
					</div><!-- panel -->
				
					<div class="panel-home-other">
						<div class="row mt20">
							<div class="col-sm-12">
								<h4 class="nomargin text-dark-blue text-center">What Is <!--Chawk Hawk-->CH?</h4>
								<p class="justify mt10">
								<!--Chawk Hawk-->CH is a platform designed to help an investor make critical buy and sell decisions to mimimize risk and maximize profits.
								The platform removes the guess work, the emotion, and the mathematics out of the decision making process, and turns any investor into a <b><i>Hawk</i></b>.
								Under the hood <!--Chawk Hawk-->CH cuts through the noise, analyzes patterns and historical data, runs various statistical analysis, applies a set of 
								proprietary rules and conditions, and searches for those critical buy and sell points. When a critical point is calculated the platform notifies
								the investor immediately in the dashboard and through automated emails so the investor can take action immediately.
								</p>
							</div>
						</div>
						<div class="row mt10">
							<div class="col-sm-6">
								<ul class="nomargin">
									<li>inflextion points to prepare for an entry</li>
									<li>the start of up trends to enter the market</li>
									<li>inflextion points to prepare for an exit</li>
									<li>the start of down trends to exit the market</li>
								</ul>
							</div>
							<div class="col-sm-6">
								<ul class="nomargin">
									<li>understand conditions</li>
									<li>minimize risk</li>
									<li>maximize ROI</li>
									<li>It's Free!</li>
								</ul>
							</div>
						</div>
						<div class="row mt20">
							<div class="col-sm-12">
								<h4 class="nomargin text-dark-blue text-center">How Does <!--Chawk Hawk-->CH Work?</h4>
								<p class="justify mt10">
								<!--Chawk Hawk-->CH was designed with the novice investor in mind. After creating an account the dashboard will keep track of all the stocks
								added to the account. From the dashboard it is one click away to get analysis, charts, back testing, and notifications.
								</p>
							</div>
						</div>
						<div class="row mt10">
							<div class="col-sm-6">
								<ul class="nomargin">
									<li>Sign Up for Free!</li>
									<li>Add a stock symbol to the dashboard</li>
									<li>Publish the stock to get real-time buy/sell recommendations</li>
									<li>Interactive analysis, charting and back testing</li>
									<li>Share a stock with a friend</li>
									<li>Easy access to past CH buy and sell recommendations</li>
									<li>Manage profile and account settings</li>
									<li><a href="main/help" class="btn btn-primary btn-xs">Help</a> section with step-by-step instructions</li>
								</ul>
							</div>
						</div>
						<div class="row mt20">
							<div class="col-sm-12">
								<div class="panel panel-dashboard">
							    	<div class="panel-body">
										<img src="images/dashboard.png">
									</div>
								</div>
							</div>
						</div>
						<div class="row mt20">
							<div class="col-sm-12">
								<h4 class="nomargin text-dark-blue text-center">What Kind of Investor are You?</h4>
								<p class="justify mt10">
								Stock market terminology includes a long list of farm animals as analogies to the different types of investors. There are
								<i>bulls</i>, <i>bears</i>, <i>chickens</i>, <i>pigs</i>, and <i>sheep</i>. <!--Chawk Hawk-->CH has added a new analogy to the list for those investors
								that are patient, analytical, and waiting for the right opportunity to buy and sell. We call them <b><i>Hawks</i></b>.
								</p>
							</div>
						</div>
						<div class="row mt10">
							<div class="col-sm-12">
								<ul class="nomargin">
									<li>A <i>bull</i> market is when everything in the economy is great, people are finding jobs, gross domestic product (GDP) is growing, and stocks are rising. <i>Bull</i> markets make it easier for investors to pick profitable stocks.</li>
									<li>A <i>bear</i> market is when the economy is bad, recession is looming and stock prices are falling. <i>Bear</i> markets make it tough for investors to pick profitable stocks.</li>
									<li><i>Chickens</i> are afraid to lose anything. Their fear overrides their need to make profits and so they turn only to money-market securities or get out of the markets entirely.</li>
									<li><i>Pigs</i> are high-risk investors looking for the one big score in a short period of time. <i>Pigs</i> buy on hot tips and invest in companies without doing their due diligence. <i>Pigs</i> can get slaughtered.</li>
									<li><i>Sheep</i> lack a focused trading strategy and trade on emotion and the suggestions of others, including friends, family and financial gurus. <i>Sheep</i> usually get slaughtered.</li>
									<li>
									A <b><i>Hawk</i></b> is constantly analyzing the situation, has a clear strategy, and is looking for the right opportunity in any market.
									When that opportunity presents itself the <b><i>Hawk</i></b> quickly flies in and strikes with efficiency.
									</li>
								</ul>
							</div>
						</div>
					</div>
					
				</div><!-- contentpanel -->
			</div>
        </section>
<?php }?>