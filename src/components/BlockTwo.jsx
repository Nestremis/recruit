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

      // const notUniqueText = 'TREŚĆ NIE JEST UNIKALNA';

      if (currentRecord !== nextRandomText) {
        setAddedRecord(nextRandomText)
        // console.log(nextRandomText.id);
      } else if (currentRecord === nextRandomText) {
        console.log('what');
        setAddedRecord('TREŚĆ NIE JEST UNIKALNA');
        // console.log(record);
      }
      // else {
      //   setAddedRecord(prev => records[random].content)
      // }
  };

  return (
    <div className="blockTwo">

        <button 
          // className="button-left"
          onClick={() => handleReplace()}
        > 
          ZASTĄP 
        </button>

        <button 
          // className="button-right"
          onClick={() => handleAddText()}
        > 
          DOKLEJ 
        </button>

    </div>
  )
};
      
export default BlockTwo;