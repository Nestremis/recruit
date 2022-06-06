import React from 'react';
import './topbar.scss';


const Topbar = ({name}) => {

    return (
        <>
        <div className='topbar'>
            <div className='top-container'>
                <div className='logo'>
                    LOGO
                </div>          

                 <h1>
                    <span style={{fontWeight:'400'}}>Zadanie</span> rekrutacyjne
                    
                    {name && (
                        <div>
                            Wyatt Earp
                        </div>
                    )}    
                </h1>       
                          
            </div>
        </div>
        </>
    )
}

export default Topbar
