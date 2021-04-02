import React, { Component } from "react";

export default class Sign_Up extends Component {
    render() {
        return (
            <div class="uk-flex uk-height-xllarge uk-background-muted uk-margin uk-text-center">
                    <div class="uk-margin-auto uk-margin-auto-vertical uk-width-1-3@s uk-card uk-card-default uk-card-body">
            <form>
                <h2>Sign Up</h2>
                    <div style={{padding:'20px', marginLeft:'20px', marginRight:'20px'}}>
                            <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                                
                                <input type="text" className="form-control" placeholder="First name" style={    {border:'none', borderBottom:'1px solid grey', padding:'5px', width:'250px'}} />
                            </div>

                            <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                                
                                <input type="text" className="form-control" placeholder="Last name" style={{border:'none', borderBottom:'1px solid grey', padding:'5px', width:'250px'}} />
                            </div>

                            <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                                
                                <input type="email" className="form-control" placeholder="Enter email" style={{border:'none', borderBottom:'1px solid grey', padding:'5px', width:'250px'}} />
                            </div>

                            <div className="form-group" style={{marginLeft:'20px', marginRight:'20px', padding:'10px'}}>
                                
                                <input type="password" className="form-control" placeholder="Enter password" style={{border:'none', borderBottom:'1px solid grey', padding:'5px', width:'250px'}} />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block uk-margin-small-top">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/login">sign in?</a>
                            </p>
                            </div>    
                </form>
                </div>
                    </div>
        );
    }
}