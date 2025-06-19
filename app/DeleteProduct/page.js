'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function DeleteProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <div className="w-full md:w-1/4 space-y-4">
          <Link 
            href="/AddProduct" 
            className="block w-full p-4 bg-white text-black border-4 border-black hover:bg-black hover:text-white transition"
          >
            Add Product
          </Link>
          <Link 
            href="/DeleteProduct" 
            className="block w-full p-4 bg-black text-white border-4 border-black hover:bg-gray-800 transition"
          >
            Delete Product
          </Link>
        </div>

        {/* Product List */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-6 text-black">Delete Products</h1>
          
          {products.length === 0 ? (
            <p className="text-xl">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="border-4 border-black p-4 rounded-lg hover:shadow-xl transition"
                >
                  {product.imageSrc && (
                    <Image 
                      src={product.imageSrc} 
                      alt={product.imageAlt || product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                  )}
                  <h2 className="text-xl text-black font-bold">{product.name}</h2>
                  <p className="text-black ">{product.color}</p>
                  <p className="text-lg text-black font-semibold">{product.price}</p>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeleteProductPage;