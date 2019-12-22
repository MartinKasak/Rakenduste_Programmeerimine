import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {Elements, CardElement} from "react-stripe-elements";
import "./stripe.css";
import {injectStripe} from "react-stripe-elements";
import PropTypes from "prop-types";


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
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.stripe.createToken().then(function(error, result) {
            //Handle result.error or result token
            console.log("result",error,  result);
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


const InjectedStripeForm = injectStripe(StripeForm);