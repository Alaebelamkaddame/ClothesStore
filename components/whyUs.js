import React from 'react'

function WhyUs() {
  return (
    <div className='sm:flex grid-cols-1 items-center justify-center py-10 px-10 gap-4 font-serif'>
        <div className='text-center pb-5'>
            <h1 className='text-5xl  font-extrabold '>Why Choose Us?</h1>
            <p className='text-xl  py-10'>
                We are committed to providing the best shopping experience for our customers.
                <br /> Here are a few reasons why you should choose us:
            </p>
            <ul >
                <li>We love what we do</li>
                <li>We are the best in what we do</li>
                <li>We are definetly attractive</li>
                <li>We have the best quality in the market</li>
            </ul>
        </div>
        <div>
            <img src="/whyUs.png" alt="Why Us" className='w-full h-100 object-cover rounded-lg shadow-lg' />
        </div>
    </div>
  )
}

export default WhyUs