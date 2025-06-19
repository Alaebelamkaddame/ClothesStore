import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='container text-black mx-auto flex justify-between items-center p-4'>
        <h1 className='font-extrabold text-5xl py-5'  style={{ fontFamily: 'var(--font-bebas)' }}><Link href="/">MoTo Lux</Link></h1>
        <ul className='flex space-x-7 text-3xl cursor-pointer'  style={{ fontFamily: 'var(--font-bebas)' }}>
            <li className='hover:underline transition-all duration-300 ease-in-out transform'><Link href="/Shop/Produits">Shop</Link></li>
            <li className='hover:underline transition-all duration-300 ease-in-out transform'><Link href="/Contact">Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar