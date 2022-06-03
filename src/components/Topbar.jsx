import React, {useState} from 'react';
import './topbar.scss';


const Topbar = () => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return (
        <>
        <div className='topbar'>
            <div className='top-container'>
                <div className='logo'>
                    LOGO
                </div>                 
                <h1>
                    <span style={{fontWeight:'400'}}>Zadanie</span> rekrutacyjne
                </h1>                 
                <div className='menu-icon' onClick={handleClick} > </div>
            </div>
        </div>
        </>
    )
}

export default Topbar
