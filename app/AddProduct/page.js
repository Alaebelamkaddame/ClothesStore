'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function Page() {
  const [product, setProduct] = useState({
    name: '',
    color: '',
    price: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get current products or start a new list
    const existing = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = { ...product, id: Date.now() };
    
    // Save updated list
    localStorage.setItem('products', JSON.stringify([...existing, newProduct]));
  
    // Optionally redirect or reset
    alert('Product added!');
  };
  

  return (
    <form onSubmit={handleSubmit} className='container justify-center mx-auto px-10 flex pb-25 flex-wrap space-x-20'>
        <div className='mt-5 '>
            <Link href=""
              className="w-full cursor-pointer p-4 mr-5 bg-white text-black py-3 rounded border-4 border-black mb-3 hover:text-white hover:bg-gray-800 transition"
            >
              Add Product
            </Link>
          <Link href="/DeleteProduct"
            className="w-full cursor-pointer p-4 mt-6 block  bg-white text-black py-3 rounded border-4 border-black mb-3 hover:text-white hover:bg-gray-800 transition"
          >
            Delete Product
          </Link>
      </div>
      {/* Product Info Fields */}
      <div className="flex flex-col space-y-4 mt-5 w-full sm:w-[400px]">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="p-3 border rounded text-black text-xl font-bold"
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={product.color}
          onChange={handleChange}
          className="p-3 border rounded text-black text-xl font-bold"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="p-3 border rounded text-black text-xl font-bold"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          rows={5}
          className="p-3 border rounded text-black text-base"
          required
        />
        <input
          type="text"
          name="imageSrc"
          placeholder="Image URL"
          value={product.imageSrc}
          onChange={handleChange}
          className="p-3 border rounded text-black text-base"
          required
        />
        <input
          type="text"
          name="imageAlt"
          placeholder="Image Alt Text"
          value={product.imageAlt}
          onChange={handleChange}
          className="p-3 border rounded text-black text-base"
        />

        <button
          type="submit"
          className="text-black border-2 border-black bg-transparent text-2xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform p-3 rounded-md"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}

export default Page;
