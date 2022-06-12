import React, { useEffect } from 'react';
import './blockThree.scss';


const BlockThree = ({currentRecord, addedRecord, reset, setCurrentRecord, setAddedRecord}) => {

// const [currentOrder, setCurrentOrder] = useState([]);
// const currentItems = [currentRecord, addedRecord]; 

useEffect(() => {
  const order = [currentRecord, addedRecord]; 
  order.sort();
  order.map(()=> order[0])
  order.map(()=> order[1])
  
  // return () => {
    // order[0]
    // order[1];
  // }
},);


 useEffect(() => {
   if (reset) {
     setCurrentRecord('');
     setAddedRecord('');
   }
 },);

//  useEffect(() => {
//    first
 
//    return () => {
//      second
//    }
//  }, [third])
 


 
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

