import React from 'react';
import './footer.scss';


const Footer = ({setName, setReset}) => {


    const makeReset = () => {
        setName(false); 
        setReset(true);
    };

    const showName = () => {
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

                    <label htmlFor="mark" className='footlab'>
                        POKAŻ                         
                    </label>    
                    <input type="checkbox" id="mark"/>                    
                    
                    <div className="slide">
                        <button 
                            onClick={() => makeReset()}
                        >
                          <i></i> ZRESETUJ USTAWIENIA
                        </button>
                      
                        <button 
                            onClick={() => showName()}
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
