import React from "react";
import "./loginform.css";

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state);  
    };

    handleChange = (e) => {
        console.log("handle change", e.target.name, e.target.value);
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
                        <div className="form-group"><label htmlFor="username">Username</label><input type="text" name="username" value = {this.state.username} onChange = {this.handleChange}/></div>
                        <div className="form-group"><label htmlFor="password">Password</label><input type="password" name="password" value = {this.state.password} onChange = {this.handleChange} /></div>
                        <div className="form-group"><label className="form-remember"><input type="checkbox"/>Remember Me</label><a className="form-recovery" href="#">Forgot Password?</a></div>
                        <div className="form-group"><button type="submit">Log In</button></div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginPage; 