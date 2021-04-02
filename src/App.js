import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Sign_Up from './components/signup/signup.component'
import video from './components/pages/video';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={SignUp} />
          <Route path='/sign-up' component={Sign_Up} />
          <Route path='/video' component={video} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
