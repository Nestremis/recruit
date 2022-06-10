import React, { useEffect } from 'react';
import './blockThree.scss';


const BlockThree = ({currentRecord, addedRecord, reset, setCurrentRecord, setAddedRecord}) => {

 useEffect(() => {
   if (reset) {
     setCurrentRecord('');
     setAddedRecord('');
   }
 },);
 
  return (
    <>
    <div className="wrapper">
    
      {currentRecord && (
        <article>
           {currentRecord}
        </article>
       )}    

      {addedRecord && (
        <article>
           {addedRecord}
        </article>
      )}    

      </div>
    </> 
  )
};

export default BlockThree;

