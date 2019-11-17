import React from "react";
import "./signupform.css";

class SignupPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
            confirmPassword:""
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
            <div className="signupSection">
            <div className="info">
                <h2>Welcome to</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                <p>Account registration</p>
            </div>
            <form className="register-form"  onSubmit={this.handleSubmit}>
                <h2>Create Account</h2>
                <ul className="noBullet">
                    <li>
                        <label htmlFor="email"></label>
                        <input type="text" className="inputFields" placeholder="Email" name= {"email"} onChange = {this.handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="password"></label>
                        <input type="password" className="inputFields" placeholder="Password" name= {"password"} onChange = {this.handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="password"></label>
                        <input type="password" className="inputFields" placeholder="Confrim Password" name= {"confirmPassword"} onChange = {this.handleChange}/>
                    </li>

                    <li id="center-btn">
                        <button className="join-btn"> submit </button>
                    </li>
                </ul>
            </form>
        </div>
        );
    }
}

export default SignupPage; 