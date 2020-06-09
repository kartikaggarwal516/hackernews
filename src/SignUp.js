import React, { Component } from "react";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

export default class SignUp extends Component {
    state={
        user: {},
        errors: {
            firstname: "",
            lastname : "",
            mail : "",
            pwd : "",
            submitmsg: ""
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        let errors = this.state.errors        

        switch(name)
        {
            case "firstname": {
                let num = value.match(/\d/g) //array of numbers
                console.log("num",num)
                console.log("typeof num",typeof(num))
                errors.firstname = 
                !isNaN(num.join(""))                
                ? "Firstname should be only in letters"
                : ""
                break 
            }
            case "lastname": {
                let num = value.match(/\d/g) //array of numbers
                errors.lastname = 
                !isNaN(num.join(""))                
                ? "Lastname should be only in letters"
                : ""
                break
            }
            case "mail": {
                errors.mail = 
                validEmailRegex.test(value) 
                ? ""    //this.props.users.map(user => {user.mail == value ? return "already exist" : return "" })
                : "Email is not valid"
                break
            }
            case "pwd": {
                errors.pwd = 
                value.length < 8
                ? "Password should be of minimum 8 character"
                : ""
                break
            }
            default: break
        }

        this.setState({ errors, user : { [name] : value} })
    }

    validateForm = errors => {
        console.log("validateForm")
        let valid = true
        Object.values(errors).map( msg => msg.length>0 && (valid = false))
        return valid
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("submit action")
        let errors = this.state.errors
                
        this.validateForm(this.state.errors)
        ? this.props.users = [...this.props.users, this.state.user]
        : errors.submitmsg ="Please fill all the fields correctly"        

        this.setState({errors})
        console.log("submit",errors.submitmsg)
        // else if(this.props.users[mail] == this.state.user[mail])
        // alert("User already exist, Please choose any other mail")
        // else                
    }

    render() {
        const {errors} = this.state
        return (
            <form className="SU-form" onSubmit={this.handleSubmit}>
                <center><h3>Sign Up</h3></center>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={this.handleChange} />
                    { errors.firstname.length > 0 && <div className="errmsg">{errors.firstname}</div> }
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={this.handleChange} />
                    {errors.lastname.length>0 && <div className="errmsg">{errors.lastname}</div>}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="mail" onChange={this.handleChange} />
                    { errors.mail.length > 0 && <div className="errmsg">{errors.mail}</div> }
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="pwd" onChange={this.handleChange} />
                    { errors.pwd.length > 0 && <div className="errmsg">{errors.pwd}</div> }
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                { errors.submitmsg.length > 0 && <div className="errmsg">{errors.submitmsg}</div> }                
            </form>
        );
    }
}