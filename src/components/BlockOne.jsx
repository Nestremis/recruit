import React, { useState, useEffect } from 'react'
import './blockOne.scss'
import RadioButton from './RadioButton'


const BlockOne = ({setOptionMade, reset, setReset }) => {  

  const [selected, setSelected] = useState('');
  
  const firstOptionChange = () => {
    setSelected('Opcja pierwsza');
  };
  const secondOptionChange = () => {
    setSelected('Opcja druga');
  };
  const thirdOptionChange = () => {
    setSelected('Opcja losowa');
  };

  function passChosenOption() {
    setOptionMade(selected);
  }; 
  
  useEffect(() => {
    if (reset === true) {
      setSelected('')
    }
    return () => {
      setReset(false)
    }
  },[reset, setReset]);

  return (
    <>
    <div className="blockOne">
      <div className="fieldset">        
            <RadioButton 
              label="Opcja pierwsza"
              value={selected === "Opcja pierwsza"}
              onChange={firstOptionChange}
              checked={passChosenOption()}
            />
            <RadioButton 
              label="Opcja druga"
              value={selected === "Opcja druga"}
              onChange={secondOptionChange}
              checked={passChosenOption()}
            />
            <RadioButton 
              label="Opcja losowa"
              value={selected === 'Opcja losowa'}
              onChange={thirdOptionChange}
              checked={passChosenOption()}
            />
      </div>
    </div>
    </>
  )
};

export default BlockOne;
