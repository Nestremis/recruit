import React from 'react'
import './blockOne.scss'


const BlockOne = () => {
  return (
    <>
    <div className="blockOne">
      <div className="fieldset">        
          <input type="radio" className="input"/> 
          <label> Opcja pierwsza </label>

          <input type="radio" className="input"/> 
          <label> Opcja druga </label>
     
          <input type="radio" className="input"/> 
          <label> Opcja losowa </label>
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
}

export default BlockOne