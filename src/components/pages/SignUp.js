import React, { Component } from 'react';   
import '../../App.css';
import App_login from '../signup/App_signup';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <App_login />
      // <div className="Login" style={{width:'50%', backgroundColor:'blue', alignContent:'center', textAlign:'center', margin:'auto'}}>
      //   <form onSubmit={this.handleSubmit}>
      //     {
      //       this.state.error &&
      //       <h3 data-test="error" onClick={this.dismissError}>
      //         <button onClick={this.dismissError}>✖</button>
      //         {this.state.error}
      //       </h3>
      //     }
      //     <label>User Name</label>
      //     <br></br>
      //     <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
      //     <br>
      //     </br>
      //     <br>
      //     </br>
      //     <label>Password</label>
      //     <br></br>
      //     <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
      //     <br>
      //     </br>
      //     <br>
      //     </br>
      //     <br>
      //     </br>
      //     <div style={{justifyContent:'center', flex:'display'}}>  
      //     <input type="submit" style={{marginLeft:'auto', padding: '10px'}} value="Log In" data-test="submit" /> </div>
      //   </form>
      // </div>
    )
  }
}

export default SignUp;