import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav class = "navbar navbar-light bg-light" >
        <Link to="/" className="navbar-brand">Ex Tracker</Link>
        <Link to="/create" className="nav-link ml-auto">Create Exercise Log</Link>
        <Link to="/user" className="nav-link">Create User</Link>
      </nav>
    );
  }
}