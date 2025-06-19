import React from 'react'
import Link from 'next/link';

function Footer() {
    return (
      <footer className="bg-black py-4 border-t-2 mt-20 bottom-0 w-full mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-white">
          <Link href="/login">© {new Date().getFullYear()} Made by Alae belamkaddame.</Link> 
          <span className="mx-2">|</span>
          <a href="tel:+1234567890" className="hover:text-white">All right réserved</a>
        </div>
      </footer>
    );
  }

export default Footer