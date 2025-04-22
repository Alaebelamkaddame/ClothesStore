import React from 'react'

function Footer() {
    return (
      <footer className="bg-black py-4 border-t-2 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Made by Alae belamkaddame. 
          <span className="mx-2">|</span>
          <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
          <span className="mx-2">|</span>
          <a href="mailto:contact@example.com" className="hover:text-white">contact@example.com</a>
        </div>
      </footer>
    );
  }

export default Footer