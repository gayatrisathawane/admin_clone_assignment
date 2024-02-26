import React from 'react'
import './CustomerPreview.css';
import CircularProgressBar from './../ CircularProgressBar/ CircularProgressBar.js';


function CustomerPreview() {
  return (
    <>
      <div className='previw-container shadow-lg rounded'>
        <h4 className='title-color-2'>Customer Preview</h4>
        <div className='ms-3'>
        <CircularProgressBar progress={5} strokeWidth={10} sqSize={150} />
        
        </div>
      
        <p className='fw-bold mt-3'>New Customer This Month</p>
        <hr className='mt-5'/>
       <p className='text-center'>Active Customer</p>
        <p className='text-success fw-bold text-center fs-4'>↑ 45.00 %</p>
      </div>
    </>
  )
}

export default CustomerPreview