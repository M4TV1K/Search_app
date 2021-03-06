import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
        <div key={option.value} className="item">
          {option.label}
        </div>
    )
  });

  return (
      <div className="ui form">
        <div className="field">
          <label className="label">Select a color</label>
          <div className="ui selection dropdown visible active">
            <i className="dropdown icon" />
            <div className="test">Select color</div>
            <div className="menu visible transition">
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dropdown;