import React from 'react';
import {} from './dropdown.css'

const Dropdown = ({optionList, onChange}) => {

    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {optionList.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;