'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const products = JSON.parse(localStorage.getItem('products') || '[]');
      console.log('Looking for product with ID:', id);
      console.log('Available products:', products);
      
      // Try both string and number comparison
      const foundProduct = products.find(p => 
        p.id === Number(id) || 
        p.id?.toString() === id.toString()
      );
      
      console.log('Found product:', foundProduct);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error('Product not found, redirecting to home');
        router.push('/Shop/Produits');
      }
    }
  }, [id, router]);

  const handleClick = () => {
    if (!product) return;
    const phoneNumber = '212649123993';
    const message = `I want to purchase ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className='container pt-7 mx-auto px-10 flex pb-25 flex-wrap space-x-20'>
      <div className="flex justify-center border-4 border-black rounded-md overflow-hidden w-full max-w-[600px] mx-auto">
        <Image
          alt={product.imageAlt}
          src={product.imageSrc}
          className="w-full h-auto object-contain p-1"
        />
      </div>
      <div>
        <div className="mt-4 ml-4 flex justify-between pr-7">
          <div>
            <h1 className="font-extrabold sm:text-7xl text-5xl py-5 text-black" style={{ fontFamily: 'var(--font-bebas)' }}>
              {product.name}
            </h1>
            <p className="mt-1 font-extrabold text-3xl text-black" style={{ fontFamily: 'var(--font-bebas)' }}>{product.color}</p>
            <p className="font-extrabold text-3xl text-black" style={{ fontFamily: 'var(--font-bebas)' }}>{product.price}</p>
            <p className="mt-4 text-black text-base whitespace-normal break-words max-w-xl" style={{ fontFamily: 'var(--font-bebas)' }}>
              {product.description || 'No description available'}
            </p>
          </div>
        </div>
        <button 
          onClick={handleClick} 
          className='cursor-pointer text-black border-2 mt-7 ml-4 border-black bg-transparent text-2xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform p-3 rounded-md' 
          style={{ fontFamily: 'var(--font-bebas)' }}>
          Contact via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ProductPage;