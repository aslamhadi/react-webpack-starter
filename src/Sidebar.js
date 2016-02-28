/* ex: set tabstop=2 shiftwidth=2  expandtab: */

import React, { Component } from "react";

class Sidebar extends Component {

  render() {
    return (
      <div className="page-sidebar-wrapper">
        <div className="page-sidebar navbar-collapse collapse">
          <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <li className="nav-item start active open">
              <a href="javascript:;" className="nav-link nav-toggle">
                <i className="icon-home"></i>
                <span className="title">Dashboard</span>
                <span className="selected"></span>
                <span className="arrow open"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item start active open">
                  <a href="index.html" className="nav-link ">
                    <i className="icon-bar-chart"></i>
                    <span className="title">Dashboard 1</span>
                    <span className="selected"></span>
                  </a>
                </li>
                <li className="nav-item start ">
                  <a href="dashboard_2.html" className="nav-link ">
                    <i className="icon-bulb"></i>
                    <span className="title">Dashboard 2</span>
                    <span className="badge badge-success">1</span>
                  </a>
                </li>
                  <li className="nav-item start ">
                    <a href="dashboard_3.html" className="nav-link ">
                      <i className="icon-graph"></i>
                      <span className="title">Dashboard 3</span>
                      <span className="badge badge-danger">5</span>
                    </a>
                  </li>
                </ul>
            </li>
            <li className="heading">
              <h3 className="uppercase">Features</h3>
            </li>
            <li className="nav-item  ">
              <a href="javascript:;" className="nav-link nav-toggle">
                <i className="icon-diamond"></i>
                <span className="title">UI Features</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item  ">
                  <a href="ui_colors.html" className="nav-link ">
                    <span className="title">Color Library</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_general.html" className="nav-link ">
                    <span className="title">General Components</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_buttons.html" className="nav-link ">
                    <span className="title">Buttons</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_confirmations.html" className="nav-link ">
                    <span className="title">Popover Confirmations</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_icons.html" className="nav-link ">
                    <span className="title">Font Icons</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_socicons.html" className="nav-link ">
                    <span className="title">Social Icons</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_typography.html" className="nav-link ">
                    <span className="title">Typography</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                    <span className="title">Tabs, Accordions & Navs</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_timeline.html" className="nav-link ">
                    <span className="title">Timeline</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_tree.html" className="nav-link ">
                    <span className="title">Tree View</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <span className="title">Page Progress Bar</span>
                    <span className="arrow"></span>
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item ">
                      <a href="ui_page_progress_style_1.html" className="nav-link "> Flash </a>
                    </li>
                    <li className="nav-item ">
                      <a href="ui_page_progress_style_2.html" className="nav-link "> Big Counter </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="ui_blockui.html" className="nav-link ">
                    <span className="title">Block UI</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_bootstrap_growl.html" className="nav-link ">
                    <span className="title">Bootstrap Growl Notifications</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_notific8.html" className="nav-link ">
                    <span className="title">Notific8 Notifications</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_toastr.html" className="nav-link ">
                    <span className="title">Toastr Notifications</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_bootbox.html" className="nav-link ">
                    <span className="title">Bootbox Dialogs</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_alerts_api.html" className="nav-link ">
                    <span className="title">Metronic Alerts API</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_session_timeout.html" className="nav-link ">
                    <span className="title">Session Timeout</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_idle_timeout.html" className="nav-link ">
                    <span className="title">User Idle Timeout</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_modals.html" className="nav-link ">
                    <span className="title">Modals</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_extended_modals.html" className="nav-link ">
                    <span className="title">Extended Modals</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_tiles.html" className="nav-link ">
                    <span className="title">Tiles</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_datepaginator.html" className="nav-link ">
                    <span className="title">Date Paginator</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="ui_nestable.html" className="nav-link ">
                    <span className="title">Nestable List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item  ">
              <a href="javascript:;" className="nav-link nav-toggle">
                <i className="icon-puzzle"></i>
                <span className="title">Components</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item  ">
                  <a href="components_date_time_pickers.html" className="nav-link ">
                    <span className="title">Date & Time Pickers</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_color_pickers.html" className="nav-link ">
                    <span className="title">Color Pickers</span>
                    <span className="badge badge-danger">2</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_select2.html" className="nav-link ">
                    <span className="title">Select2 Dropdowns</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_select.html" className="nav-link ">
                    <span className="title">Bootstrap Select</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_multi_select.html" className="nav-link ">
                    <span className="title">Multi Select</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_select_splitter.html" className="nav-link ">
                    <span className="title">Select Splitter</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_typeahead.html" className="nav-link ">
                    <span className="title">Typeahead Autocomplete</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_tagsinput.html" className="nav-link ">
                    <span className="title">Bootstrap Tagsinput</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_switch.html" className="nav-link ">
                    <span className="title">Bootstrap Switch</span>
                    <span className="badge badge-success">6</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_maxlength.html" className="nav-link ">
                    <span className="title">Bootstrap Maxlength</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_fileinput.html" className="nav-link ">
                    <span className="title">Bootstrap File Input</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_bootstrap_touchspin.html" className="nav-link ">
                    <span className="title">Bootstrap Touchspin</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_form_tools.html" className="nav-link ">
                    <span className="title">Form Widgets & Tools</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_context_menu.html" className="nav-link ">
                    <span className="title">Context Menu</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_editors.html" className="nav-link ">
                    <span className="title">Markdown & WYSIWYG Editors</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_code_editors.html" className="nav-link ">
                    <span className="title">Code Editors</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_ion_sliders.html" className="nav-link ">
                    <span className="title">Ion Range Sliders</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_noui_sliders.html" className="nav-link ">
                    <span className="title">NoUI Range Sliders</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="components_knob_dials.html" className="nav-link ">
                    <span className="title">Knob Circle Dials</span>
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
