import React from "react";

export default class LoginForm extends React.Component{
    render () {
        return (
            <div className="form-group" id="login-form">
                <h3>Log In</h3>
                <label for="username">Username</label> <br/>
                <input type="text" id="username-input" className="form-control"></input> 
                <br></br>
                <label for="password">Password</label> <br/>
                <input type="text" id="password-input" className="form-control"></input> <br/>

                <button className="btn btn-primary">Submit</button>
            </div>
        )
    }
}