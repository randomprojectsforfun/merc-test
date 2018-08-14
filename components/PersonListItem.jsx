import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const icons = {
    'Droid': 'android',
    'Human': 'user-circle',
    default: 'question'
};

export const getSpeciesIcon = (name) => icons[name] || icons.default;

const PersonListItem = ({ name, height, gender, mass, species }) => (
    <div>
        <Icon icon={getSpeciesIcon(species.name)} />
        <h2>{name}</h2>
        <span>height: {height}</span>
        <span>mass: {gender}</span>
        <span>gender: {mass}</span>
    </div>
);

PersonListItem.defaultProps = {
    height: 'N/A',
    gender: 'N/A',
    mass: 'N/A'
};

PersonListItem.propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    gender: PropTypes.string,
    mass: PropTypes.string,
    species: PropTypes.shape({
        name: PropTypes.string
    }).isRequired
};

export default PersonListItem;