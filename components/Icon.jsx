import PropTypes from "prop-types";
import React from "react";

const Icon = ({ icon }) => (<i className={`fal ${icon}`} />);

Icon.propTypes = {
    icon: PropTypes.string.isRequired
};

export default Icon;