import React from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";

function App_login() {
  return (
    <div class="uk-flex uk-height-large uk-background-muted uk-margin uk-text-center">
      <div class="uk-margin-auto uk-margin-auto-vertical uk-width-1-3@s uk-card uk-card-default uk-card-body">
        <Login />
      </div>
    </div>
    
  )
}

export default App_login;