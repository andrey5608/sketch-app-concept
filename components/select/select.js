import React from 'react';
import './select.scss';

const Select = ({ options = [], onChange, selected, disabled }) => {
  const renderOptions = () => {
    return options.map(({ value, label }) => {
      return (
        <option key={value} value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <select
      value={selected}
      disabled={disabled}
      onChange={event => {
        onChange(event.currentTarget.value);
      }}
    >
      {renderOptions()}
    </select>
  );
};

export default Select;
