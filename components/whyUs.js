import React from 'react'

function WhyUs() {
  return (
    <div className='sm:flex grid-cols-1  items-center justify-center py-10 px-10 gap-8'  style={{ fontFamily: 'var(--font-bebas)' }}>
        <div className='text-center pb-5 text-black'>
            <h1 className='text-6xl  font-extrabold '>Why Choose Us?</h1>
            <p className='text-2xl  py-10'>
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
            <img src="https://suzukicycles.com/-/media/project/cycles/images/gsx-8r-microsite/images/headers/2024gsx8rmicrositelifestyleheader2500x1227r10.jpg?mw=992&w=992&hash=CF9120705622AF93F9D5FAAD0BAFB9C9" 
            alt="Why Us" className='w-150 h-100 shadow-2xl object-cover rounded-lg' />
        </div>
    </div>
  )
}

export default WhyUs