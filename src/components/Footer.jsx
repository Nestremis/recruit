import React from 'react';
import './footer.scss';


const Footer = ({setName}) => {


    const reset = () => '';

    const showName = (name) => {
        // setName(name);
        setName(current => !current)  
    }; 

    return (
        <>
        <div className='footer'>
            <div className='foot-container'>                    
                <div className='css-logo'> CSS <br/> IS <br/> AWESOME</div>
                <h3> -- nabthat --</h3>                  

                <div className="dropup">
                    <button className="dropbtn">POKAŻ ^ </button>
                    <div className="dropup-content">

                        <button 
                          onClick={reset}
                        >
                            &gt; ZRESETUJ USTAWIENIA
                        </button>
                        
                        <button 
                            onClick={() => showName(true)}
                        > 
                            &gt; POKAŻ DANE OSOBOWE
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
