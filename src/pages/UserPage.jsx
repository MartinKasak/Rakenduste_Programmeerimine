import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer.js";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import { tokenUpdate, userUpdate } from "../store/actions.js";
import protectedRedirect from "../components/protectedRedirect.jsx";
import * as selectors from "../store/selectors.js";
import * as  services from "../services.js";


class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
        token:PropTypes.string.isRequired,  
        userId:PropTypes.string.isRequired,

    };
    state = {
        payments: [],
    };

    componentDidMount(){
        const {userId, token} = this.props;
        services.getPayments({userId, token})
        .then(docs => {
           // console.log("docs",docs);
            this.setState({
                payments:docs,
            });
        });
    }


    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    }
    


    render() {
        return (
            <div className="spacer">
                <div className="box">
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <div className="field">
                            {this.props.user.email}
                        </div>
                        <div className="field">
                            {this.props.user.createdAt}
                        </div>
                        <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton>
                    </div>
                </div>
                <div className={"box"}>
                {this.state.payments.map(payment  =>{
                    return (
                    <div key={payment._id} className={"payment__row"}>
                        <div>{payment.createdAt}</div>
                        <div>{payment.cart.length}</div>
                        <div>{payment.amount}</div>
                    </div>
                    );
                })}
                </div>
            </div>
           
        );
    }
}
 
const mapStateToProps = (store) => {
    return {
        user: selectors.getUser(store),
        token: selectors.getToken(store),
        userId: selectors.getUserId(store),
    };
};
export default connect(mapStateToProps)(protectedRedirect(UserPage)); 
