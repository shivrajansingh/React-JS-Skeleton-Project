import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
export default class componentName extends Component {
 
 dashboardRoutes(){
    return(
        <React.Fragment>
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route exact path='/' element={<Home/>}/>
            </Routes>
        </React.Fragment>
    )
 }

  render() {
    return (
      <React.Fragment>
        {this.dashboardRoutes()}
      </React.Fragment>
    );
  }
}
