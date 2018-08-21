import React, { Component } from "react";
import "../App.css";

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">MEMERAMA</div>
        <div className="navbar-links">
          <a className="link" href="#Designers">
            Designers
          </a>
          <a className="link" href="#Developers">
            Developers
          </a>
          <a className="link" href="#Community">
            Community
          </a>
          <a className="link" href="#Hire">
            Hire
          </a>
          <a className="link selected" href="#LogIn">
            Log In
          </a>
        </div>
      </div>
    );
  }
}

export class MainSection extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="mainContent-info">
          <h1 className="info-header">
            Community
            <br /> Giving Opportunity
          </h1>
          <p className="info-body">
            Memerama is the largest community of accomplished designers and
            developers giving each other work opportunities and making thousands
            in revenue.
          </p>
          <div className="info-buttons">
            <button>Create Account</button>
            <button className="btn-selected">How It Works</button>
          </div>
          <div className="info-footer">
            <div className="footer-item">FREE for first 3 months</div>
            <div className="footer-item">No Credit Card Needed</div>
          </div>
        </div>
        <img alt="Computer" src={require("../images/Computer_0.png")} />
      </div>
    );
  }
}

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainSection />
      </div>
    );
  }
}
