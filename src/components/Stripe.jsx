import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {Elements, CardElement} from "react-stripe-elements";
import "./stripe.css";
import {injectStripe} from "react-stripe-elements";
import PropTypes from "prop-types";
import * as services from "../services";
import * as selectors from "../store/selectors";
import {connect} from "react-redux";

class Stripe extends React.PureComponent{
    static propTypes = {
        sum: PropTypes.number.isRequired,
    };
    render(){
        return (
        <StripeProvider apiKey="pk_test_QDWe5y1OWEKu5gffJPvtmpeg00hQ5nbiGh">
        <Elements>
            <InjectedStripeForm sum={this.props.sum}/>
        </Elements>
        </StripeProvider>
        );
    }
}

export default Stripe; 

class StripeForm extends React.PureComponent{

    static propTypes = {
        stripe: PropTypes.object.isRequired,
        sum:PropTypes.number.isRequired,
        userId:PropTypes.string.isRequired,
        token:PropTypes.string.isRequired, 
    }; 

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.stripe.createToken().then( ({error, token} ) => {
            console.log("result", error, token);
            if(error) {
                console.error("token error", error);
                return;
            }
            services.checkout({stripeToken: token, userId: this.props.userId, token: this.props.token})
            .then(x => {
                console.log("checkout", x);
            })
            .catch(err => {
                console.error(err);
            });
        });
    };

    render(){
        return(
            <form className={"stripe__form"} onSubmit={this.handleSubmit}>
                <label>
                Card details
                <CardElement style={{base: {fontSize: "18px"}}} />
                </label>
            <button className= {"stripe__button"}>Pay {this.props.sum}EUR </button>
            </form>
        );
    }

}   

const mapStateToProps = (store) => {
    return {
        userId:selectors.getUserId(store),
        token:selectors.getToken(store),
    };
};

const InjectedStripeForm = connect(mapStateToProps)(injectStripe(StripeForm));