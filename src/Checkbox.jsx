import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css"; //https://codepen.io/webdevian/pen/NjQdKK/

const Checkbox = ({name, onChange, checked}) => (
        <div className="toggler">
            <div className={"toggler_name"}>{name}</div>
            <input id={name} name={name} type="checkbox" onChange={onChange} checked={checked}/>
                <label htmlFor={name}>
                    <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
                    </svg>
                    <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                        <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                    </svg>
                </label>
        </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;