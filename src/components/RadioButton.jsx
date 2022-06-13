import * as React from 'react';
import './radioButton.scss';

const RadioButton = ({ label, value, onChange, checked }) => {
    return (
      <label>
        <input 
          type="radio" 
          onChange={onChange} 
          checked={value} 
         />
            {label}
      </label>
    );
  };  

export default RadioButton;