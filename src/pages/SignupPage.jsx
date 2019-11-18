import React from "react";
import "./signupform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";




class SignupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state);
        event.preventDefault();
        console.log("submit", this.state); 
        fetch("/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => res.json())
        .then( data=>{
            console.log("data", data);
            this.props.history.push("/login");
        })
        .catch ( err => {
            console.log("Error", err);
        });  
    };

    handleChange = (e) => {
        console.log("handle change", e.target.name, e.target.value);
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };


    render() {
        return (
            <>
            <div><h1 style={{textAlign: "center"}}>Signup</h1></div>
            <div className="signupSection">
            <div className="info">
                <h2>SignUpPage</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                <p>Konto registreerimine</p>
            </div>
            <form className="register-form"  onSubmit={this.handleSubmit}>
            <h2 className="header2_info">Loo konto</h2>
                <ul className="noBullet">
                    <li>
                        <label htmlFor="email"></label>
                        <input type="email" className="inputFields" placeholder="Email" name= {"email"} onChange = {this.handleChange}/>
                    </li>
                    
                    <li>
                        <label htmlFor="password"></label>
                        <input type="password" className="inputFields" placeholder="Confrim Password" name= {"confirmPassword"} onChange = {this.handleChange}/>
                    </li>

                    <li id="center-btn">
                        <button className="join-btn"> Submit </button>
                    </li>
                    <p className="message">Registreerinud? <Link to={"/login"}>Login</Link></p>

                </ul>
            </form>
        </div>
        </>
        );
    }
}

export default SignupPage; 