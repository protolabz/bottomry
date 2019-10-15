import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './login'
import baseurl from './services/axios-url'
const img='logo.png';
// import Register from './register'

export default class Register extends Component {
    render() {
      return (
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6">
                      <div className="card mt-5">
                          <div className="card-header text-center">
                              <img src={baseurl + img} width="150px;"/>
                          </div>
                          <div className="card-body">
                              <h3>Create Account</h3>
                              <form>
                                  <div className="form-group">
                                      <label htmlFor="fname">First Name:</label>
                                      <input type="text" className="form-control" id="fname"/>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="lname">Last Name:</label>
                                      <input type="text" className="form-control" id="lname"/>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="email">Email address:</label>
                                      <input type="email" className="form-control" id="email"/>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="pass">Password:</label>
                                      <input type="password" className="form-control" id="pass"/>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }
  // export default Register;
  if (document.getElementById('fortify')) {
    ReactDOM.render(<Register />, document.getElementById('fortify'));
  }
