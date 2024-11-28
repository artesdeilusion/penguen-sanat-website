import Head from 'next/head';
import React from 'react';

function Market() {
    const products = [
        {
            name: "Akustik Gitar",
            brand: "-",
            image: "products/acoustic-guitar.jpg",
            price: 1,
        },
        {
            name: "Elektro Gitar",
            brand: "-",
            image: "products/electric-guitar.webp",
            price: 220.00,
        },
        {
            name: "Org",
            brand: "Casio",
            image: "products/casio-org.jpg",
            price: 300.00,
        },
        {
            name: "Klasik Gitar",
            brand: "-",
            image: "products/classic-guitar.jpg",
            price: 450.00,
        },
        {
            name: "Keman",
            brand: "-",
            image: "products/violin.webp",
            price: 150.00,
        },
        {
            name: "Piyano",
            brand: "-",
            image: "products/piano.jpg",
            price: 220.00,
        },
        {
            name: "Bass Gitar",
            brand: "-",
            image: "products/bass-guitar.jpg",
            price: 300.00,
        },
        {
            name: "Bağlama",
            brand: "-",
            image: "products/baglama.jpg",
            price: 450.00,
        },
    ];

    return (
        <div>
            <Head>
                <title>Penguen Sanat | Mağaza</title>
            </Head>
            <section>
                <div className="mx-auto mt-28 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-4xl text-gray-900">Penguen Store</h2>
                        <p className="mt-4 max-w-md text-gray-500">
                            Sanatseverler için özenle seçilmiş enstrüman koleksiyonumuzla hizmetinizdeyiz.
                        </p>
                        <p className='pt-2 text-gray-400 text-xs'>
                            *Satışlarımızı yalnızca okulumuzdan gerçekleştiriyoruz. <br />Detaylı bilgi için <span><a className='hover:underline' href="tel:+905348418664">+90 534 841 86 64</a></span>
                        </p>
                    </header>

                    <div className="mt-8">
                        <p className="text-sm text-gray-500">{products.length} / {products.length}</p>
                    </div>

                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product, index) => (
                            <li key={index} className="block overflow-hidden bg-white shadow">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[350px] w-full object-contain sm:h-[450px]"
                                />
                                <div className="p-4">
                                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                                    <p className="text-xs text-gray-500">Marka: {product.brand}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Market;
