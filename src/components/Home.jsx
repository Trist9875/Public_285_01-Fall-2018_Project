import React, { Component } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';

export default class Home extends Component {
  render() {
    return (
      
      <div>
        <Navbar></Navbar>
          <Jumbotron title="" subtitle=""></Jumbotron>
          <div className="container">

          <h2>Doc Josh Peeler</h2>
                <p>
                    Information about Josh will be input into this section.
                    ..........
                    ..........
                    ..........
                </p>
          </div>
          
      </div>
      /* If a footer is designed, likely to put
          above the last div
      */
    )
  }
}
