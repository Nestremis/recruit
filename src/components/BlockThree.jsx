import React from 'react';
import './blockTwo.scss';


const BlockOne = ({currentRecord, addedRecord}) => {

  // const[text, setText] = useState(0);

  // const records = Records;

  // const handleClick = (e)=> {
  //   if (currentRecord <= records.length) {
  //     setCurrentRecord(currentRecord + 1);
  //   } 
  // };


  return (
    <>
      { <article> {currentRecord}  </article> }   
      { <article> {addedRecord}  </article> }   
    </> 
  )
};

export default BlockOne;