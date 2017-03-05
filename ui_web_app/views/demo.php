<!-- demo -->

<section id="dashboard" class="di-content">
	<!--
	<div class="row padding-left-10px padding-right-10px">
		<div class="large-12 medium-12 small-12 columns padding-0px margin-0px margin-bottom-10px">
			<h2 class="left">D<span>ashboard</span></h2>
		</div>
	</div>
	-->
	<div class="row padding-left-10px padding-right-10px">
		<div class="large-8 medium-8 small-12 columns padding-0px margin-0px padding-right-10px margin-bottom-10px">
			<div class="row collapse ">
				<div class="large-6 medium-6 small-7 columns padding-0px margin-0px">
					<h2 class="subheader left">M<span>arkets</span></h2>
				</div>
				<div class="large-6 medium-6 small-5 columns padding-0px margin-0px close-module">
					<a href="javascript:void(0)" onclick="hideElement('markets', 500, 500)" id="markets-open-close" class="fi-arrows-in button small radius"> Close</a>
				</div>
			</div>
			<div id="markets" class="row collapse">
				<div class="large-12 medium-12 small-12 columns ">
					<dl class="accordion padding-0px margin-0px" data-accordion>
					  <dd class="accordion-navigation active">
					    <a href="#portfolio-stock1">Stock - AA</a>
					    <div id="portfolio-stock1" class="content active">
							<img src="images/chart.png">
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio-stock2">Stock - APPL</a>
					    <div id="portfolio-stock2" class="content">
							<img src="images/chart.png">
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio-stock3">Stock - APA</a>
					    <div id="portfolio-stock3" class="content">
							<img src="images/chart.png">
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#s&p500" class="accordion-link">S&P 500</a>
					    <div id="s&p500" class="content">
							<img src="images/chart.png">
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#dow-jones">Dow Jones</a>
					    <div id="dow-jones" class="content">
								<img src="images/chart.png">
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#nasdaq">NASDAQ</a>
					    <div id="nasdaq" class="content">
							<img src="images/chart.png">
					    </div>
					  </dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="large-4 medium-4 small-12 columns padding-0px margin-0px margin-bottom-10px">
			<div class="row collapse ">
				<div class="large-6 medium-6 small-7 columns padding-0px margin-0px">
					<h2 class="subheader left">T<span>op</span> S<span>tories</span></h2>
				</div>
				<div class="large-6 medium-6 small-5 columns padding-0px margin-0px close-module">
					<a href="javascript:void(0)" onclick="hideElement('stories', 500, 500)" id="stories-open-close" class="fi-arrows-in button small radius"> Close</a>
				</div>
			</div>
			<div id="stories" class="row collapse ">
				<div class="large-12 medium-12 small-12 columns padding-0px margin-0px">
					<dl class="accordion padding-0px margin-0px" data-accordion>
					  <dd class="accordion-navigation active">
					    <a href="#portfolio-story1">Story - In My Portfolio</a>
					    <div id="portfolio-story1" class="content active scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 6. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio-story2">Story - In My Portfolio</a>
					    <div id="portfolio-story2" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 6. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio-story3">Story - In My Portfolio</a>
					    <div id="portfolio-story3" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 6. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#story1a">Story 1</a>
					    <div id="story1a" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 1. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    	<p class="text-center padding-5px"><img src="images/gear-tools.png"></p>
					    	<p class="justify padding-5px">
					    	Panel 1. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    	<p class="text-center padding-5px"><img src="images/atom.png"></p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#story2a">Story 2</a>
					    <div id="story2a" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 2. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#story3a">Story 3</a>
					    <div id="story3a" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 3. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    	<p class="text-center padding-5px"><img src="images/gear-tools.png"></p>
					    	<p class="justify padding-5px">
					    	Panel 3. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    	<p class="text-center padding-5px"><img src="images/atom.png"></p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#story4a">Story 4</a>
					    <div id="story4a" class="content scroll-element">
					    	<p class="justify padding-5px">
					    	Panel 4. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#story5a">Story - Central Banks Issue More</a>
					    <div id="story5a" class="content scroll-element">
					    	<p class="justify padding-5px border-bottom">
					    	Panel 5. Lorem ipsum dolor sit amet, consectetur adipisicing eddt, sed do eiusmod tempor incididunt ut labore et dolore magna addqua. Ut enim ad minim veniam, quis nostrud exercitation dllamco laboris nisi ut addquip ex ea commodo consequat.
					    	</p>
					    </div>
					  </dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<div class="row padding-left-10px padding-right-10px">
		<div class="large-8 medium-8 small-12 columns padding-0px margin-0px padding-right-10px margin-bottom-10px">
			<div class="row collapse padding-0px margin-0px">
				<div class="large-6 medium-6 small-7 columns padding-0px margin-0px">
					<h2 class="subheader left">P<span>ortfolios</span></h2>
				</div>
				<div class="large-6 medium-6 small-5 columns padding-0px margin-0px close-module">
					<a href="javascript:void(0)" onclick="hideElement('portfolios', 500, 500)" id="portfolios-open-close" class="fi-arrows-in button small radius"> Close</a>
				</div>
			</div>
			<div id="portfolios" class="row collapse padding-0px margin-0px padding-0px">
				<div class="large-12 medium-12 small-12 columns padding-0px margin-0px">
					<dl class="accordion padding-0px margin-0px" data-accordion>
					  <dd class="accordion-navigation active">
					    <a href="#portfolio1a">Portfolio - Bank of America IRA</a>
					    <div id="portfolio1a" class="content active">
							<table class="padding-0px margin-0px">
							<tr><td width="35"><a href="">AA</a></td><td class="text-right">10.99</td><td class="text-right color-green">&#8593; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							<tr><td width="35"><a href="">AAPL</a></td><td class="text-right">410.99</td><td class="text-right color-green">&#8593; 99.99 (10.99%)</td><td class="text-right">1000 <span class="hide-for-320px">sh</span></td><td class="color-red text-left hide-for-420px">@ 446.99</td><td class="color-red right hide-for-420px">&#8595; 299.99 (11.99%)</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td class="text-right">10.99</td><td class="text-right color-red">&#8595; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio2a">Portfolio - Bank of America Brokerage Account</a>
					    <div id="portfolio2a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35"><a href="">AA</a></td><td class="text-right">10.99</td><td class="text-right color-green">&#8593; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							<tr><td width="35"><a href="">AAPL</a></td><td class="text-right">410.99</td><td class="text-right color-green">&#8593; 99.99 (10.99%)</td><td class="text-right">1000 <span class="hide-for-320px">sh</span></td><td class="color-red text-left hide-for-420px">@ 446.99</td><td class="color-red right hide-for-420px">&#8595; 299.99 (11.99%)</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td class="text-right">10.99</td><td class="text-right color-red">&#8595; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#portfolio3a">Portfolio - Fidelity Romero Family Trust</a>
					    <div id="portfolio3a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35"><a href="">AA</a></td><td class="text-right">10.99</td><td class="text-right color-green">&#8593; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							<tr><td width="35"><a href="">AAPL</a></td><td class="text-right">410.99</td><td class="text-right color-green">&#8593; 99.99 (10.99%)</td><td class="text-right">1000 <span class="hide-for-320px">sh</span></td><td class="color-red text-left hide-for-420px">@ 446.99</td><td class="color-red right hide-for-420px">&#8595; 299.99 (11.99%)</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td class="text-right">10.99</td><td class="text-right color-red">&#8595; 0.99 (10.99%)</td><td class="text-right">100 <span class="hide-for-320px">sh</span></td><td class="color-green text-left hide-for-420px">@ 6.99</td><td class="color-green right hide-for-420px">&#8593; 299.99 (19.99%)</td></tr>
							</table>
					    </div>
					  </dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="large-4 medium-4 small-12 columns padding-0px margin-0px margin-bottom-10px">
			<div class="row collapse padding-0px margin-0px">
				<div class="large-6 medium-6 small-7 columns padding-0px margin-0px">
					<h2 class="subheader left">M<span>odels</span></h2>
				</div>
				<div class="large-6 medium-6 small-5 columns padding-0px margin-0px close-module">
					<a href="javascript:void(0)" onclick="hideElement('models', 500, 500)" id="models-open-close" class="fi-arrows-in button small radius"> Close</a>
				</div>
			</div>
			<div id="models" class="row collapse padding-0px margin-0px margin-0px">
				<div class="large-12 medium-12 small-12 columns padding-0px margin-0px">
					<dl class="accordion padding-0px margin-0px" data-accordion>
					  <dd class="accordion-navigation active">
					    <a href="#modelAll">All Models</a>
					    <div id="modelAll" class="content active scroll-element">
							<table class="padding-0px margin-0px">
							<tr><td colspan="3" class="text-right"><a href="">Create New Model</a></td></tr>
							<tr><td width="35"><a href="">AA</a></td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">AA</a></td><td>Model 2 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">AA</a></td><td>Model 3 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APPL</a></td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APPL</a></td><td>Model 2 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APPL</a></td><td>Model 3 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td>Model 2 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">APA</a></td><td>Model 3 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">BWP</a></td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">BWP</a></td><td>Model 2 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"><a href="">BWP</a></td><td>Model 3 with NN</td><td class="color-green">3 for 3</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#model1a">Model 1</a>
					    <div id="model1a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35"><a href="">AA</a></td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"></td><td>parameter1=1</td><td>parameter2=2</td></tr>
							<tr><td width="35"></td><td>parameter3=3</td><td>parameter4=4</td></tr>
							<tr><td width="35"></td><td>parameter5=5</td><td>parameter6=6</td></tr>
							<tr><td width="35"></td><td>parameter7=7</td><td>parameter8=8</td></tr>
							<tr><td width="35"></td><td>10.00%</td><td>buy recommendation</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#model2a">Model 2</a>
					    <div id="model2a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35">AA</td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"></td><td>parameter1=1</td><td>parameter2=2</td></tr>
							<tr><td width="35"></td><td>parameter3=3</td><td>parameter4=4</td></tr>
							<tr><td width="35"></td><td>parameter5=5</td><td>parameter6=6</td></tr>
							<tr><td width="35"></td><td>parameter7=7</td><td>parameter8=8</td></tr>
							<tr><td width="35"></td><td>10.00%</td><td>buy recommendation</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#model3a">Model 3</a>
					    <div id="model3a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35">AA</td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"></td><td>parameter1=1</td><td>parameter2=2</td></tr>
							<tr><td width="35"></td><td>parameter3=3</td><td>parameter4=4</td></tr>
							<tr><td width="35"></td><td>parameter5=5</td><td>parameter6=6</td></tr>
							<tr><td width="35"></td><td>parameter7=7</td><td>parameter8=8</td></tr>
							<tr><td width="35"></td><td>10.00%</td><td>buy recommendation</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#model4a">Model 4</a>
					    <div id="model4a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35">AA</td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"></td><td>parameter1=1</td><td>parameter2=2</td></tr>
							<tr><td width="35"></td><td>parameter3=3</td><td>parameter4=4</td></tr>
							<tr><td width="35"></td><td>parameter5=5</td><td>parameter6=6</td></tr>
							<tr><td width="35"></td><td>parameter7=7</td><td>parameter8=8</td></tr>
							<tr><td width="35"></td><td>10.00%</td><td>buy recommendation</td></tr>
							</table>
					    </div>
					  </dd>
					  <dd class="accordion-navigation">
					    <a href="#model5a">Model 5</a>
					    <div id="model5a" class="content">
							<table class="padding-0px margin-0px">
							<tr><td width="35">AA</td><td>Model 1 with NN</td><td class="color-green">3 for 3</td></tr>
							<tr><td width="35"></td><td>parameter1=1</td><td>parameter2=2</td></tr>
							<tr><td width="35"></td><td>parameter3=3</td><td>parameter4=4</td></tr>
							<tr><td width="35"></td><td>parameter5=5</td><td>parameter6=6</td></tr>
							<tr><td width="35"></td><td>parameter7=7</td><td>parameter8=8</td></tr>
							<tr><td width="35"></td><td>10.00%</td><td>buy recommendation</td></tr>
							</table>
					    </div>
					  </dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="generic1" class="di-content padding-bottom-20px bg-light-gray1">
	<div class="row">
		<div class="hide-for-480px">
			<div class="small-5 medium-4 large-4 columns">
				<img src="images/responsive-screens.png">
			</div>
			<div class="small-7 medium-8 large-8 columns info">
				<h2>G<span>et</span> A R<span>unning</span> S<span>tart</span></h2>
				<p class="justify margin-top-10px">
				Learn the fundamentals of the world's most advanced math eLearning website.
				You'll hear from the creators themselves how to use MathSonic to accelerate your student success.
				Learn the fundamentals of the world's most advanced math eLearning website.
				You'll hear from the creators themselves how to use MathSonic to accelerate your student success.
				</p>
				<div class="txtcenter margin-top-20px">
					<a href="learn/interactions.html" class="button radius left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
					<a href="learn/learn" class="button radius right">Learn More</a>
				</div>
			</div>
		</div>
		<div class="show-for-480px">
			<div class="small-12 columns info margin-bottom-10px">
				<h2>G<span>et</span> A R<span>unning</span> S<span>tart</span></h2>
			</div>
			<div class="small-12 columns txtcenter margin-bottom-10px">
				<img src="images/responsive-screens.png">
			</div>
			<div class="small-12 columns info">
				<p class="justify">Learn the fundamentals of the world's most advanced math eLearning website.
				You'll hear from the creators themselves how to use MathSonic to accelerate your student success.
				Learn the fundamentals of the world's most advanced math eLearning website.
				You'll hear from the creators themselves how to use MathSonic to accelerate your student success.
				</p>
			</div>
			<div class="small-12 columns txtcenter margin-top-20px">
				<a href="main/sign_up_form.html" class="button radius left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
				<a href="learn/learn" class="button radius right">Learn More</a>
			</div>
		</div>
	</div>
</section>

<section id="generic2" class="di-content bg-light-gray2">
	<div class="row">
		<div class="hide-for-480px">
			<div class="small-7 medium-8 large-8 columns info">
				<h2>P<span>rogress</span> R<span>eports</span></h2>
				<p class="justify margin-top-10px">
				Sign up to receive monthly progress reports on each student.
				Sign up to receive monthly progress reports on each student.
				</p>
				<div class="margin-top-20px">
					<form method="post" action="main/subscribe">
						<div class="row collapse">
							<div class="small-8 medium-6 large-6 columns">
								<input name="email" placeholder="signup@example.com" type="text">
							</div>
							<div class="small-4 medium-3 large-3 columns">
								<input href="#" class="postfix small button expand" value="Sign Up" type="submit">
							</div>
							<div class="medium-3 large-3 columns"> </div>
						</div>
					</form>
				</div>
			</div>
			<div class="small-5 medium-4 large-4 columns">
				<img src="images/reports-screens.png">
			</div>
		</div>
		<div class="show-for-480px">
			<div class="small-12 columns info margin-bottom-10px">
				<h2>P<span>rogress</span> R<span>eports</span></h2>
			</div>
			<div class="small-12 columns txtcenter margin-bottom-10px">
				<img src="images/report-screens.png">
			</div>
			<div class="small-12 columns info">
				<p class="justify">
				Sign up to receive monthly progress reports on each student.
				Sign up to receive monthly progress reports on each student.
				</p>
				<div class="margin-top-20px">
					<form method="post" action="main/sign_up_form">
						<div class="row collapse">
							<div class="small-8 medium-8 columns">
								<input name="email" placeholder="signup@example.com" type="text">
							</div>
							<div class="small-4 medium-4 columns">
								<input href="#" class="postfix small button expand" value="Sign Up" type="submit">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
