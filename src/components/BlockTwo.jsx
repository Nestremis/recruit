import React from 'react'
import './blockTwo.scss'
import records from '../records.json';

const BlockTwo = ({ optionMade, setCurrentRecord, currentRecord, setAddedRecord }) => {

  let random = Math.floor(Math.random() * records.length);

  const handleReplace = () => {
    if (optionMade === 'Opcja pierwsza') {
      setCurrentRecord(records[0].content);
    } else if (optionMade === 'Opcja druga') {
      setCurrentRecord(records[1].content)
    } else if (optionMade === 'Opcja losowa') {
      setCurrentRecord(records[random].content)
    }
  };

  const handleAddText = () => {    
      const nextRandomText = records[random].content;
      if (currentRecord !== nextRandomText) {
        setAddedRecord(nextRandomText)
      } else {
        setAddedRecord(records[7].content)
      }
      // else {
      //   setAddedRecord(prev => records[random].content)
      // }
  };

  return (
    <div className="blockTwo">

        <button 
          className="leftButton"
          onClick={() => handleReplace()}
        > 
          ZASTĄP 
        </button>

        <button 
          className="rightButton"
          onClick={() => handleAddText()}
        > 
          DOKLEJ 
        </button>
        
       { <div> {optionMade} </div> }    
        
    </div>
  )
};
      
      export default BlockTwo;