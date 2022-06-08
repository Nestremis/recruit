import React, { useEffect } from 'react';
import './blockTwo.scss';


const BlockThree = ({currentRecord, addedRecord, reset, setCurrentRecord, setAddedRecord}) => {

 useEffect(() => {
   if (reset) {
     setCurrentRecord('');
     setAddedRecord('');
   }
  //  return () => {
  //    second
  //  }
 },[reset]);
 


  return (
    <>
      {currentRecord && (
        <div>
           {currentRecord}
        </div>
       )}    

      {addedRecord && (
        <div>
           {addedRecord}
        </div>
      )}    
    </> 
  )
};

export default BlockThree;

