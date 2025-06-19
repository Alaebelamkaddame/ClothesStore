'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(storedProducts);
  }, []);

  // Get only the first 4 products for single row display
  const displayedProducts = products.slice(0, 4);

  return (
    <section className='container mx-auto'>
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pt-20 text-black drop-shadow-xl mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
        Best Products
      </h1>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-black" style={{ fontFamily: 'var(--font-bebas)' }}>
            {displayedProducts.length > 0 ? 'Featured Products' : 'No products available'}
          </h2>

          {/* Single row container with overflow control */}
          <div className="mt-6 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: 'var(--font-bebas)' }}>
              {displayedProducts.map((product) => (
                <div key={product.id} className="group transition-transform duration-300 hover:scale-105 shadow-2xl relative border-4 border-black p-6 rounded-md h-full">
                  <Link href={`/Shop/Produits/${product.id}`}>
                    <img
                      alt={product.imageAlt || product.name}
                      src={product.imageSrc}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <div className="mt-4 flex pt-4 border-t-2 border-black justify-between text-xl">
                      <div>
                        <h3 className="text-black">{product.name}</h3>
                        <p className="mt-1 text-black">{product.color}</p>
                      </div>
                      <p className="font-medium text-black">{product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {products.length > 4 && (
          <div className="flex items-center justify-center h-32">
            <button className='cursor-pointer text-xl text-black border-2 my-4 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform p-3 rounded-md' style={{ fontFamily: 'var(--font-bebas)' }}>
              <Link href="/Shop">View All Products</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;