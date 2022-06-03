import React, {useState} from 'react';
import './footer.scss';


const Footer = () => {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return (
        <>
        <div className='footer'>
            <div className='foot-container'>                    
                <h2> nabthat </h2>                  
             <div className='menu-icon' onClick={handleClick} > </div>
            </div>
        </div>
        </>
    )
}

export default Footer
