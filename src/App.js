import React, { Component } from 'react';
import {
  Grid, Row, Col, Form, FormGroup, Input, Button
} from 'react-bootstrap';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <div className="clearfix"> </div>
        <div className="page-container">
          <Sidebar />
          <div className="page-content-wrapper">
            <div className="page-content">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
