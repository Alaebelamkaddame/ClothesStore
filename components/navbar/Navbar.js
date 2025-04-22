import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='container mx-auto flex justify-between items-center p-4 text-white'>
        <h1 className='font-extrabold text-4xl font-serif py-5'><Link href="/">Clothes Store</Link></h1>
        <ul className='flex space-x-7 font-serif text-2xl cursor-pointer  '>
            <li className='hover:underline transition-all duration-300 ease-in-out transform'><Link href="/Shop">Shop</Link></li>
            <li className='hover:underline transition-all duration-300 ease-in-out transform'><Link href="/Contact">Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar