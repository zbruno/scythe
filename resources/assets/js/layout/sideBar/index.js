import React from 'react';

const Sidebar = () => (
  <div id="m_aside_left" className="m-grid__item  m-aside-left  m-aside-left--skin-dark ">
    <div id="m_ver_menu" className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown mCustomScrollbar _mCS_3 mCS-autoHide" data-menu-vertical="true" data-menu-dropdown="true" data-menu-scrollable="true" data-menu-dropdown-timeout="500" css="height: 957px; position: relative; overflow: visible;"><div id="mCSB_3" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabIndex="0" css="max-height: none;"><div id="mCSB_3_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" css="position:relative; top:0; left:0;" dir="ltr">
      <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
        <li className="m-menu__item " aria-haspopup="true">
          <a href="index.html" className="m-menu__link ">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-line-graph"></i>
            <span className="m-menu__link-text">
              Dashboard
            </span>
          </a>
        </li>
        <li className="m-menu__item m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
          <a href="#" className="m-menu__link m-menu__toggle">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-open-box"></i>
            <span className="m-menu__link-text">
              Layouts
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu ">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                <span className="m-menu__link">
                  <span className="m-menu__item-here"></span>
                  <span className="m-menu__link-text">
                    Layouts
                  </span>
                </span>
              </li>
              <li className="m-menu__item " aria-haspopup="true">
                <a href="builder.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Layout Builder
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="builder.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Boxed Layout
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="builder.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Right Sidebar
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="builder.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Fixed Footer
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item m-menu__item--submenu m-menu__item--open m-menu__item--expanded" aria-haspopup="true" data-menu-submenu-toggle="hover">
          <a href="#" className="m-menu__link m-menu__toggle">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-layers"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Reports
                </span>
                <span className="m-menu__link-badge">
                  <span className="m-badge m-badge--danger">
                    2
                  </span>
                </span>
              </span>
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu ">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                <span className="m-menu__link">
                  <span className="m-menu__item-here"></span>
                  <span className="m-menu__link-title">
                    <span className="m-menu__link-wrap">
                      <span className="m-menu__link-text">
                        Reports
                      </span>
                      <span className="m-menu__link-badge">
                        <span className="m-badge m-badge--danger">
                          2
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-icon flaticon-pie-chart"></i>
                  <span className="m-menu__link-text">
                    Finance Reports
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-icon flaticon-line-graph"></i>
                  <span className="m-menu__link-text">
                    Accouning Audit
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-icon flaticon-statistics"></i>
                  <span className="m-menu__link-text">
                    Investments
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-icon flaticon-coins"></i>
                  <span className="m-menu__link-text">
                    Sales
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover" data-redirect="true">
          <a href="#" className="m-menu__link m-menu__toggle">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-lifebuoy"></i>
            <span className="m-menu__link-text">
              Support
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu ">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" data-redirect="true">
                <span className="m-menu__link">
                  <span className="m-menu__item-here"></span>
                  <span className="m-menu__link-text">
                    Support
                  </span>
                </span>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Reports
                  </span>
                </a>
              </li>
              <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover" data-redirect="true">
                <a href="#" className="m-menu__link m-menu__toggle">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Cases
                  </span>
                  <i className="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div className="m-menu__submenu ">
                  <span className="m-menu__arrow"></span>
                  <ul className="m-menu__subnav">
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-computer"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Pending
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--warning m-badge--wide">
                                10
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-signs-2"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Urgent
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--danger m-badge--wide">
                                6
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-clipboard"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Done
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--success m-badge--wide">
                                2
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-multimedia-2"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Archive
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--info m-badge--wide">
                                245
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Clients
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Audit
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover" data-redirect="true">
          <a href="#" className="m-menu__link m-menu__toggle">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-share"></i>
            <span className="m-menu__link-text">
              Feedbacks
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu ">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-title">
                    <span className="m-menu__link-wrap">
                      <span className="m-menu__link-text">
                        Product Feedbacks
                      </span>
                      <span className="m-menu__link-badge">
                        <span className="m-badge m-badge--accent">
                          3
                        </span>
                      </span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Customer Reviews
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Product Ratings
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Customer Support
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover" data-redirect="true">
          <a href="#" className="m-menu__link m-menu__toggle">
            <span className="m-menu__item-here"></span>
            <i className="m-menu__link-icon flaticon-network"></i>
            <span className="m-menu__link-text">
              Conversions
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu ">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" data-redirect="true">
                <span className="m-menu__link">
                  <span className="m-menu__item-here"></span>
                  <span className="m-menu__link-text">
                    Conversions
                  </span>
                </span>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Goals
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-title">
                    <span className="m-menu__link-wrap">
                      <span className="m-menu__link-text">
                        Ecommerce
                      </span>
                      <span className="m-menu__link-badge">
                        <span className="m-badge m-badge--warning m-badge--wide m-badge--rounded">
                          new
                        </span>
                      </span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Transactions
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Funnels
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item  m-menu__item--submenu m-menu__item--bottom-2" aria-haspopup="true" data-menu-submenu-toggle="hover">
          <a href="#" className="m-menu__link m-menu__toggle">
            <i className="m-menu__link-icon flaticon-settings"></i>
            <span className="m-menu__link-text">
              Settings
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu m-menu__submenu--up">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent m-menu__item--bottom-2" aria-haspopup="true">
                <span className="m-menu__link">
                  <span className="m-menu__link-text">
                    Settings
                  </span>
                </span>
              </li>
              <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover" data-redirect="true">
                <a href="inner.html" className="m-menu__link m-menu__toggle">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Profile
                  </span>
                  <i className="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div className="m-menu__submenu ">
                  <span className="m-menu__arrow"></span>
                  <ul className="m-menu__subnav">
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-computer"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Pending
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--warning">
                                10
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-signs-2"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Urgent
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--danger">
                                6
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-clipboard"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Done
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--success">
                                2
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                      <a href="inner.html" className="m-menu__link ">
                        <i className="m-menu__link-icon flaticon-multimedia-2"></i>
                        <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                            <span className="m-menu__link-text">
                              Archive
                            </span>
                            <span className="m-menu__link-badge">
                              <span className="m-badge m-badge--info m-badge--wide">
                                245
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Accounts
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Help
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--line">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Notifications
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="m-menu__item  m-menu__item--submenu m-menu__item--bottom-1" aria-haspopup="true" data-menu-submenu-toggle="hover">
          <a href="#" className="m-menu__link m-menu__toggle">
            <i className="m-menu__link-icon flaticon-info"></i>
            <span className="m-menu__link-text">
              Help
            </span>
            <i className="m-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="m-menu__submenu m-menu__submenu--up">
            <span className="m-menu__arrow"></span>
            <ul className="m-menu__subnav">
              <li className="m-menu__item  m-menu__item--parent m-menu__item--bottom-1" aria-haspopup="true">
                <span className="m-menu__link">
                  <span className="m-menu__link-text">
                    Help
                  </span>
                </span>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Support
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Blog
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Documentation
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Pricing
                  </span>
                </a>
              </li>
              <li className="m-menu__item " aria-haspopup="true" data-redirect="true">
                <a href="inner.html" className="m-menu__link ">
                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                    <span></span>
                  </i>
                  <span className="m-menu__link-text">
                    Terms
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div id="mCSB_3_scrollbar_vertical" className="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" css="display: none;">
    <div className="mCSB_draggerContainer">
      <div id="mCSB_3_dragger_vertical" className="mCSB_dragger" css="position: absolute; min-height: 50px; height: 0px; top: 0px;">
        <div className="mCSB_dragger_bar" css="line-height: 50px;"></div>
      </div>
      <div className="mCSB_draggerRail"></div>
    </div>
  </div>
</div>
  </div>
);

export default Sidebar;