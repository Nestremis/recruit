import * as React from 'react';
import './radioButton.scss';

const RadioButton = ({ label, value, onChange, checked }) => {
    return (
      <label>
        <input 
          type="radio" 
          checked={value} 
          onChange={onChange} 
         />
            {label}
      </label>
    );
  };  

export default RadioButton;