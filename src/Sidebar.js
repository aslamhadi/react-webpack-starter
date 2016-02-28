/* ex: set tabstop=2 shiftwidth=2  expandtab: */

import React, { Component } from "react";

class Sidebar extends Component {

  render() {
    return (
      <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
          <ul class="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <li class="nav-item start active open">
              <a href="javascript:;" class="nav-link nav-toggle">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
                <span class="selected"></span>
                <span class="arrow open"></span>
              </a>
              <ul class="sub-menu">
                <li class="nav-item start active open">
                  <a href="index.html" class="nav-link ">
                    <i class="icon-bar-chart"></i>
                    <span class="title">Dashboard 1</span>
                    <span class="selected"></span>
                  </a>
                </li>
                <li class="nav-item start ">
                  <a href="dashboard_2.html" class="nav-link ">
                    <i class="icon-bulb"></i>
                    <span class="title">Dashboard 2</span>
                    <span class="badge badge-success">1</span>
                  </a>
                </li>
                  <li class="nav-item start ">
                    <a href="dashboard_3.html" class="nav-link ">
                      <i class="icon-graph"></i>
                      <span class="title">Dashboard 3</span>
                      <span class="badge badge-danger">5</span>
                    </a>
                  </li>
                </ul>
            </li>
            <li class="heading">
              <h3 class="uppercase">Features</h3>
            </li>
            <li class="nav-item  ">
              <a href="javascript:;" class="nav-link nav-toggle">
                <i class="icon-diamond"></i>
                <span class="title">UI Features</span>
                <span class="arrow"></span>
              </a>
              <ul class="sub-menu">
                <li class="nav-item  ">
                  <a href="ui_colors.html" class="nav-link ">
                    <span class="title">Color Library</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_general.html" class="nav-link ">
                    <span class="title">General Components</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_buttons.html" class="nav-link ">
                    <span class="title">Buttons</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_confirmations.html" class="nav-link ">
                    <span class="title">Popover Confirmations</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_icons.html" class="nav-link ">
                    <span class="title">Font Icons</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_socicons.html" class="nav-link ">
                    <span class="title">Social Icons</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_typography.html" class="nav-link ">
                    <span class="title">Typography</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_tabs_accordions_navs.html" class="nav-link ">
                    <span class="title">Tabs, Accordions & Navs</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_timeline.html" class="nav-link ">
                    <span class="title">Timeline</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_tree.html" class="nav-link ">
                    <span class="title">Tree View</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="javascript:;" class="nav-link nav-toggle">
                    <span class="title">Page Progress Bar</span>
                    <span class="arrow"></span>
                  </a>
                  <ul class="sub-menu">
                    <li class="nav-item ">
                      <a href="ui_page_progress_style_1.html" class="nav-link "> Flash </a>
                    </li>
                    <li class="nav-item ">
                      <a href="ui_page_progress_style_2.html" class="nav-link "> Big Counter </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item  ">
                  <a href="ui_blockui.html" class="nav-link ">
                    <span class="title">Block UI</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_bootstrap_growl.html" class="nav-link ">
                    <span class="title">Bootstrap Growl Notifications</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_notific8.html" class="nav-link ">
                    <span class="title">Notific8 Notifications</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_toastr.html" class="nav-link ">
                    <span class="title">Toastr Notifications</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_bootbox.html" class="nav-link ">
                    <span class="title">Bootbox Dialogs</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_alerts_api.html" class="nav-link ">
                    <span class="title">Metronic Alerts API</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_session_timeout.html" class="nav-link ">
                    <span class="title">Session Timeout</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_idle_timeout.html" class="nav-link ">
                    <span class="title">User Idle Timeout</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_modals.html" class="nav-link ">
                    <span class="title">Modals</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_extended_modals.html" class="nav-link ">
                    <span class="title">Extended Modals</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_tiles.html" class="nav-link ">
                    <span class="title">Tiles</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_datepaginator.html" class="nav-link ">
                    <span class="title">Date Paginator</span>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a href="ui_nestable.html" class="nav-link ">
                    <span class="title">Nestable List</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
