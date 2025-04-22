'use client'
import { useState } from 'react';

function page() {
  const product = {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description: "Sleek, simple, and endlessly versatile — this black t-shirt is a wardrobe essential. Made from soft, breathable cotton, it offers all-day comfort whether you're layering up or wearing it solo. The classic crew neckline and regular fit make it perfect for any occasion, from casual days out to relaxed evenings in. Durable, stylish, and easy to pair with anything — you can't go wrong with this timeless piece.",
  };

  const handleClick = () => {
    const phoneNumber = '212649123993'; // Replace with your number
    const message = 'I want to purchase this product';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // opens in new tab
  };

  return (
    <div className='container mx-auto px-10 flex flex-wrap space-x-20'>
      {/* Center Image Container */}
      <div className="flex justify-center w-full sm:w-auto">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="w-full sm:w-[500px] lg:w-[400px] mt-5 ml-20 rounded-md bg-gray-200 object-cover group-hover:opacity-75"
        />
      </div>

      {/* Product Information */}
      <div>
        <div className="mt-4 flex justify-between">
          <div>
            <h1 className="font-extrabold sm:text-7xl text-5xl py-5 font-serif text-white">
              {product.name}
            </h1>
            <p className="mt-1 font-extrabold text-3xl font-serif text-white">{product.color}</p>
            <p className="font-extrabold text-3xl font-serif text-white">{product.price}</p>
            <p className="mt-4 text-white text-base whitespace-normal break-words max-w-xl">{product.description}</p>
          </div>
        </div>
        <button 
          onClick={handleClick} 
          className='cursor-pointer font-serif border-2 mt-7 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform p-3 rounded-md'>
          Contact via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default page;

