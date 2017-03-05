        <header>
            <div class="headerwrapper">
                <div class="header-left <?php if(!isset($this->session->userdata['user_logged_in']) || !$this->session->userdata['user_logged_in']){echo 'no-hamburger';}?>">
                    <a href="main/index" class="logo">
                        <span class="md-title-med text-white hide-for-420px">CH Analysis</span>
                        <span class="md-title-med text-white show-for-420px">CH</span>
                    </a>
                    <div class="pull-right <?php if(!isset($this->session->userdata['user_logged_in']) || !$this->session->userdata['user_logged_in']){echo 'hide';}?>">
                        <a href="" class="menu-collapse">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                </div><!-- header-left -->

                <div class="header-right">
                    <div class="pull-right">
						<?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
                        <form class="form form-stock-symbol" action="javascript:void(0);" onsubmit="addStockByAJAX();">
                            <input type="text" id="add_stock_symbol" name="add_stock_symbol" class="form-control" placeholder="Symbol" />
                        </form><!-- form-stock-symbol -->
                        <?php }?>

                        <div id="notifications_dropdown" class="btn-group btn-group-list btn-group-notification"></div><!-- btn-group -->

                        <div class="btn-group btn-group-option">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                              <i class="fa fa-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu pull-right" role="menu">
                              <?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
                              <li><a href="member/profile/1"><i class="glyphicon glyphicon-user"></i> My Profile</a></li>
                              <?php }?>
                              <li><a href="main/index"><i class="fa fa-home"></i> Home</a></li>
                              <li><a href="main/stock_review"><i class="fa fa-cogs"></i> Stock Review</a></li>
                              <li><a href="main/about"><i class="fa fa-info"></i> About</a></li>
                              <li><a href="main/help"><i class="fa fa-question"></i> Help</a></li>
                              <li class="divider"></li>
                              <?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
                              <li><a href="main/sign_out"><i class="fa fa-sign-out"></i>Sign Out</a></li>
                              <?php }else{?>
                              <li><a href="main/sign_in"><i class="fa fa-sign-in"></i>Sign In</a></li>
                              <li><a href="main/sign_up"><i class="fa fa-user"></i>Sign Up</a></li>
                              <?php }?>
                            </ul>
                        </div><!-- btn-group -->

                    </div><!-- pull-right -->
                </div><!-- header-right -->

            </div><!-- headerwrapper -->
        </header>