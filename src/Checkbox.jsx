import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked}) => (
    <div>
        <label>
            <imput 
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange} />
        </label>
    </div>
);

Checkbox.propTypes={
    name:PropTypes.string.isRecuired,
    onChange:PropTypes.func.isRecuired,
    checked: PropTypes.bool.isRecuired,

};

export default Checkbox;