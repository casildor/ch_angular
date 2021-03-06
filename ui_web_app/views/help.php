<?php if(isset($this->session->userdata['user_logged_in']) && $this->session->userdata['user_logged_in']){?>
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
                                <i class="fa fa-question"></i>
                            </div>
                            <div class="media-body">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-question"></i></a></li>
                                    <li>Help</li>
                                </ul>
                                <h4>Help</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

                    <div class="contentpanel">
                    
                    <div id="alert_message" class="alert alert-dashboard mb10 hide"></div>
                    
                    <?php $this->load->view('help_tabs'); ?>
                    
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
                                <i class="fa fa-question"></i>
                            </div>
                            <div class="media-body">
                                <ul class="breadcrumb hide-for-520px">
                                    <li><a href=""><i class="fa fa-question"></i></a></li>
                                    <li>Help</li>
                                </ul>
                                <h4>Help</h4>
                            </div>
                        </div><!-- media -->
                    </div><!-- pageheader -->

                    <div class="contentpanel">
                    <?php $this->load->view('help_tabs'); ?>
                    </div><!-- contentpanel -->

            </div><!-- mainwrapper -->
        </section>
<?php }?>