'use client'
import Link from 'next/link'

function page() {
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
          {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
            {
                id: 6,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',   
                color: 'Black',
            },
            {
                id: 7,
                name: 'Basic Tee',
                href: '#',
                imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
              }

      ]
  return (
    <div className='container mx-auto'>
        <div className='font-extrabold font-serif text-6xl text-center py-7'>
            <h1> All Products : </h1>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href="/Shop/Produits">
                    <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                        <div>
                        <h3 className="text-sm text-white">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}                        </h3>
                        <p className="mt-1 text-sm text-white">{product.color}</p>
                        </div>
                        <p className="text-sm font-medium text-white">{product.price}</p>
                    </div>
                  </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page