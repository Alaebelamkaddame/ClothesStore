'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products') || '[]');
    console.log('Products in localStorage:', localProducts);
    setProducts(localProducts);
  }, []);

  return (
    <div className='container mx-auto p-2'>
      <div className='font-extrabold text-7xl text-black text-center py-7' style={{ fontFamily: 'var(--font-bebas)' }}>
        <h1>All Products:</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group transition-transform duration-300 hover:scale-105 relative text-xl border-4 border-black p-7 rounded-md" style={{ fontFamily: 'var(--font-roboto)' }}>
            <Link href={`/Shop/Produits/${product.id}`}> {/* Case-sensitive path */}
              <Image
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-full h-48 rounded-md object-cover mb-4"
              />
              <div className="mt-4 border-t-2 border-black flex justify-between">
                <div className='pt-2'>
                  <h3 className="text-black">{product.name}</h3>
                  <p className="mt-1 text-black">{product.color}</p>
                </div>
                <p className="font-medium text-black pt-2">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;