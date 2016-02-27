import React, { Component } from 'react';
import {
  Grid, Row, Col, Form, FormGroup, Input, Button
} from 'react-bootstrap';
import Header from "./Header.js"

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
