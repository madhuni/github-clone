// eslint-disable-file no-noninteractive-element-interactions
import React, { useState } from 'react';
import { GoCheck } from 'react-icons/go';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './CustomSelect.component.scss';

export default function CustomSelect({ text, options, selectHandler }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const onClickHandler = () => {
    setShowOptions(!showOptions);
  };

  const onSelectHandler = (e) => {
    e.persist();
    const newSelectedValue = e.target.innerText;
    setSelectedOption(newSelectedValue);
    setShowOptions(false);
    selectHandler(newSelectedValue);
  };

  return (
    <div className="custom-select">
      <Button clickHandler={onClickHandler}>
        {text}: {selectedOption}
      </Button>
      {/* Options List */}
      {showOptions && (
        <ul className="options-list">
          <li className="options-list__item">
            <strong>Select {text}</strong>
          </li>
          {options.map((item) => (
            <li
              className={`options-list__item ${
                item === selectedOption && 'options-list__item--selected'
              }`}
              key={item}
              onClick={onSelectHandler}
              onKeyDown={onSelectHandler}
            >
              {item}
              {item === selectedOption && <GoCheck />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectHandler: PropTypes.func.isRequired,
};
