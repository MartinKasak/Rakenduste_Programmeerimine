import React from "react";
import {MdChevronRight} from "react-icons/md";
import PropTypes from "prop-types";
import "./fancybutton.css";

const FancyButton = ({children}) => {
    return (
        <div className={"btn btn--fancy"}>
            <div className={"btn-inner"}>
                <div>
                    {children}
                </div>
                <MdChevronRight />
            </div>
    </div>
    );
};

FancyButton.propTypes = {
    children: PropTypes.string.isRequired,
};

export default FancyButton; 