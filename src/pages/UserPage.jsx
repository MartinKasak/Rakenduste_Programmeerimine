import React from "react";
import PropTypes from "prop-types";
import authConsumer from "../components/authConsumer.jsx";


class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>
                You are {this.props.user.email}, created at {this.props.user.createdAt}
            </div>
        );
    }
}

export default authConsumer(UserPage); 
