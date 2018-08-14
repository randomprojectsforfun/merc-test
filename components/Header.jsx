import React from 'react';
import { Consumer } from '../components/PageLayout';



const Header = (props) => (
    <Consumer>
        {({ search, sort, handleInputChange }) => (
            <div>
                <input value={search} onChange={handleInputChange('search')} />

                <select onChange={handleInputChange('sort')}>
                    <option />
                </select>
                {props.children}
            </div>
        )}
    </Consumer>
);

Header.sortOptions = {
    ascending: 'Asc',
    descending: 'Desc'
};

export default Header;