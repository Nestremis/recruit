import * as React from 'react';

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