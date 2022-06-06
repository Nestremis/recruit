import React from 'react'
import './blockTwo.scss'
import records from '../records.json';

const BlockTwo = ({ optionMade, setCurrentRecord }) => {

  const handleReplace = () => {
    let random = Math.floor(Math.random() * records.length);

    if (optionMade === 'Opcja pierwsza') {
      setCurrentRecord(records[0].content)
    } else if (optionMade === 'Opcja druga') {
      setCurrentRecord(records[1].content)
    } else if (optionMade === 'Opcja losowa') {
      setCurrentRecord(records[random].content)
    }
  };

  const handleAddText = () => {
    
  };

  return (
    <div className="blockTwo">

        <button 
          className="leftButton"
          // onClick={handleReplace}
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

        
        </div>
        )
      };
      
      export default BlockTwo;
      // { <div> {optionMade} </div> }    