import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer.js";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import { userUpdate, tokenUpdate } from "../store/actions.js";
import protectedRedirect from "../components/protectedRedirect.jsx";
import * as selectors from "../store/selectors.js";
import * as  services from "../services.js";
import { toast } from "react-toastify";


class UserPage extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            email:""
        };
    }

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,

    };


    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        services.userUpdate(this.state)
            .then( () => {
          toast.success("Success");
    })
        .catch(err =>{
          console.log(err);
          toast.error("Error!");

    });
  };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    };

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

                    <form className="userUpdate_form" onSubmit = {this.handleSubmit}>
                        <input type="email" placeholder="email" name = {"email"} onChange = {this.handleChange}/>
                        <button>SUBMIT</button>
                    </form>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: selectors.getUser(store),
    };
};
export default connect(mapStateToProps)(protectedRedirect(UserPage)); 
