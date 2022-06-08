import React from 'react';
import './footer.scss';


const Footer = ({setName, setReset}) => {


    const reset = () => {
        setName(false)
    };

    const showName = (name) => {
        setName(current => !current)  
    }; 

    return (
        <>
        <div className='footer'>
            <div className='foot-container'>   
            <div className="css-logo">              
                <div className='css'> CSS <br/> IS <br/> AWESOME</div>
                <div className='square'></div>
            </div>
               
                <h3 title='nabthat'> nabthat </h3>    


                <div className="dropup">

                    <label htmlFor="touch">
                        <b> POKAŻ </b>                        
                    </label>    

                    <input type="checkbox" id="touch"/> 
                    
                    
                    <div className="slide">
                        <button 
                            onClick={() => reset()}
                        >
                          <i></i> ZRESETUJ USTAWIENIA
                        </button>
                      
                        <button 
                            onClick={() => showName(true)}
                        > 
                            <i></i> POKAŻ DANE OSOBOWE
                        </button>
                    </div>

                </div> 

            </div>
        </div>
        </>
    )
}

export default Footer
