import React from 'react'
import Link from 'next/link'

function Products() {
    const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
      ]
  return (
    <section className='container mx-auto'>
        <h1 className="text-4xl md:text-6xl font-extrabold text-center pt-20 font-serif text-white drop-shadow-xl mb-4">
            Best Products
        </h1>
            <div >
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:pt-14 lg:max-w-7xl lg:px-8 font-serif">
                    <h2 className="text-2xl font-bold tracking-tight text-white ">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Link href ="/Shop/Produits">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                    <h3 className="text-sm text-white">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}

                                    </h3>
                                    <p className="mt-1 text-sm text-white">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-white">{product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="flex items-center justify-center h-64">
                    <button className='cursor-pointer font-serif border-2 my-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform p-3 rounded-md'>
                        <Link href="/Shop">More Products</Link>
                    </button>
                </div>
            </div>
    </section>
  )
}

export default Products