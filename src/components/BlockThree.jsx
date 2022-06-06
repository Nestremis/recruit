import React from 'react';
import './blockTwo.scss';


const BlockOne = ({currentRecord}) => {

  // const[text, setText] = useState(0);

  // const records = Records;

  // const handleClick = (e)=> {
  //   if (currentRecord <= records.length) {
  //     setCurrentRecord(currentRecord + 1);
  //   } 
  // };


  return (
    <>
      {
      
          <article> {currentRecord}  </article>
        // records.map(record => {
        //   return(
        //     <article key={record.id}>
        //       { records[currentRecord].content}
        //     </article>
        //   )
        //  }
        // ) 
      //   {text && (
      //     <div>
      //     { records[currentRecord].content}
      //     </div>
      // )}    
      }   
    </> 
  )
};

export default BlockOne;