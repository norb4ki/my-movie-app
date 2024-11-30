import React, { useState } from "react";
import "./dropdown.css";

const CustomDropdown = ({ optionList, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionList[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div
                className="dropdown_header"
                onClick={toggleDropdown}
            >
                {selectedOption ? selectedOption.label : "Select an option"}
                <span className={`dropdown_arrow ${isOpen ? "open" : ""}`}>▼</span>
            </div>
            {isOpen && (
                <ul className="dropdown_list">
                    {optionList.map((option) => (
                        <li
                            key={option.value}
                            className="dropdown_item"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
