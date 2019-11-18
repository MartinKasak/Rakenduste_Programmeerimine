import React from "react";
import "./loginform.css";
import { Link } from "react-router-dom";

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state); 
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => {
            console.log("response", res);
        })
        .catch ( err => {
            console.log("Error", err);
        }); 
    };

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div className="form">
            <div className="form-toggle"></div>
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Account Login</h1>
                </div>
                <div className="form-content">
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group"><label htmlFor="email">email</label><input type="email" name="email" value = {this.state.email} onChange = {this.handleChange}/></div>
                        <div className="form-group"><label htmlFor="password">Password</label><input type="password" name="password" value = {this.state.password} onChange = {this.handleChange} /></div>
                        <div className="form-group"><label className="form-remember"><input type="checkbox"/>Remember Me</label><a className="form-recovery" href="#">Forgot Password?</a></div>
                        <div className="form-group"><button type="submit">Log In</button></div>
                        <p className= "message"> Pole registreerinud? <Link to={"/signup"}>Loo konto</Link></p>

                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginPage; 