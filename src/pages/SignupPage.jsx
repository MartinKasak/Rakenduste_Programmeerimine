import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";
import {toast} from "react-toastify";
import * as services from "../services.js";

class SignupPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        services.signup(this.state)
        .then(() => {
            this.props.history.push("/login");
            toast.success("Registreerumine oli edukas! :)");
        }).catch(err => {
            console.log("Error", err);
            toast.error("Registreerumisel esines viga :(");
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render(){
        return (
            <>
                <div><h1 style={{textAlign: "center"}}>Register</h1></div>            
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input type="email" placeholder="email" name="email" onChange={this.handleChange} />
                        <input type="password" placeholder="password"name="password" onChange={this.handleChange} />
                        <button>create</button>
                        <p className="message">Already registered? <Link to={"/login"}>Sign In</Link></p>
                    </form>
                </div>
            </>
        );
    }
}
export default SignupPage;