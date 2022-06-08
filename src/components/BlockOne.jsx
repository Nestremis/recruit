import React, { useEffect, useState } from 'react'
import './blockOne.scss'
import RadioButton from './RadioButton'


const BlockOne = ({setOptionMade, reset}) => {  
  const [selected, setSelected] = useState('');

  function passChosenOption() {
    setOptionMade(selected);
  }; 
  
  const firstOptionChange = () => {
    setSelected('Opcja pierwsza');
  };
  const secondOptionChange = () => {
    setSelected('Opcja druga');
  };
  const thirdOptionChange = () => {
    setSelected('Opcja losowa');
  };
  
  useEffect(() => {
    if (reset) {
        setSelected('');
        }
    // return () => {
    //   reset = !reset
    // }
  },);
  
  return (
    <>
    <div className="blockOne">
      <div className="fieldset">        
            <RadioButton 
              label="Opcja pierwsza"
              value={selected === 'Opcja pierwsza'}
              onChange={firstOptionChange}
              checked={passChosenOption()}
            />
            <RadioButton 
              label="Opcja druga"
              value={selected === 'Opcja druga'}
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

      
      {/*<fieldset className="margin-bottom-md">
        <ul className="flex flex-column gap-xxxs">
          <li>
            <input className="radio" type="radio" name="radio-button" id="radio-1"/>
            <label for="radio-1">Choice 1</label>
          </li>

          <li>
            <input className="radio" type="radio" name="radio-button" id="radio-2"/>
            <label for="radio-2">Lorem ipsum </label>
          </li>
        </ul>
  </fieldset> */}

    </div>
    </>
  )
};

export default BlockOne;

// eslint-disable-next-line no-lone-blocks
{/* // <input type="radio" className="input"/> 
// <label> Opcja pierwsza </label>

// <input type="radio" className="input"/> 
// <label> Opcja druga </label>

// <input type="radio" className="input"/> 
// <label> Opcja losowa </label> */}