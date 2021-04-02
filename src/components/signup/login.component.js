import React, { Component } from "react";
import { Link } from "react-router-dom";
// import SignUp from "./signup.component";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2>Sign In</h2>
                <div style={{padding:'20px', marginLeft:'20px', marginRight:'20px'}}>
                    <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                     
                        <input type="email" className="form-control" placeholder="Enter email" style={{border:'none', borderBottom:'1px solid grey', padding:'5px', width:'250px'}} />
                    </div>

                    <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                        
                    
                        <input type="password" className="form-control" placeholder="Enter password" style={{border:'none', borderBottom:'1px solid grey', padding:'5px',  width:'250px'}}  />
                    </div>
                    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox uk-margin-small-top">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label uk-margin-small-left" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                {/* <br/> */}
                <p className="forgot-password text-right">
                    Don't have an account? <Link to="/sign-up">Create one</Link>
                </p>
            </form>
        );
    }
}