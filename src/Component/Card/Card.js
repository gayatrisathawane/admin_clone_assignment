// import React from 'react'
// import './Card.css';

// function Card({ title, button_text }) {
//     return (
//         <>

//             <div className='smallCard shadow-sm'>
//                 <h4 className='text-center title-color'>{title}</h4>
//                 <hr />
//                 <div className='d-flex align-items-center justify-content-around'>
//                     <p className='mt-3 subTitle'>This Month</p>
//                     <button className='btn buttonCss'>{button_text}</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Card


import React from 'react';
import './Card.css';

function Card({ title, button_text, buttonColor }) {
    return (
        <>
            <div className={`smallCard shadow-sm `}>
                <h4 className='text-center title-color'>{title}</h4>
                <hr />
                <div className='d-flex align-items-center justify-content-around'>
                    <p className='mt-3 subTitle'>This Month</p>
                    <button className={`btn buttonCss  ${buttonColor ? buttonColor : ''}`}>{button_text}</button>
                </div>
            </div>
        </>
    );
}

export default Card;