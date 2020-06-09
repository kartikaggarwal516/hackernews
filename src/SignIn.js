import React, {Component} from "react"
import SignUp from "./SignUp"

class SignIn extends Component{
    state = {
        users: []
    }
    render(){
        const {users} = this.state
        return(
            <div className="login">
                <form className="SignIn-form">
                <center><h3>Sign In</h3></center>
                <div className="SI-form-group">
                    <label >Email address</label>
                    <input type="email" placeholder="Enter mail"></input>
                </div> 
                <div className="SI-form-group">
                    <label >Password</label>
                    <input type="password" placeholder="Enter password"></input>
                </div>
                <div className="checkbox-gp">
                    <input type="checkbox"></input>
                    <label>Remember Me</label> 
                </div>
                <div className="SI-form-group">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
                <div className="pwd">
                    <span>Forgot</span><a href="#">password?</a>
                </div>              
            </form>
            <SignUp users = {users} />
            </div>
        )
    }
}

export default SignIn