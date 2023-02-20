import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './Helper/ScrollToTop';
import Header from './Template/Header';
import Footer from './Template/Footer';
import Sidebar from './Template/Sidebar';
import Approute from './Approute';
export default class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop/>
          <Header/>
          <Sidebar/>
          <Approute/>
          <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}
