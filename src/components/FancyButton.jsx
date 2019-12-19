import React from "react";
import {MdChevronRight} from "react-icons/md";
import PropTypes from "prop-types";
import "./fancybutton.css";

const FancyButton = ({children, onClick}) => {
    return (
        <div className={"btn btn--fancy"} onClick={onClick}>
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
    onClick: PropTypes.func.isRequired
};

export default FancyButton; 