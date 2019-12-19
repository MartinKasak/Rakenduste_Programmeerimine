import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

const SortDropdown = ({direction, onChange}) => (
    <div>
        <select value={direction} onChange={onChange} className="mdl-selectfield">
            <option value={-1}>Price descending</option>
            <option value={1}>Price ascending</option>
        </select>
    </div>
);

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SortDropdown;