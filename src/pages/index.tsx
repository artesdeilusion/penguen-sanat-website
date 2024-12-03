
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

                const images = [
    {link:"/courses/robotics", id: 1, src: '/courses/1.png', alt: 'Robotik ve Drama' },
    {link:"/courses/drama", id: 2, src: '/courses/2.png', alt: 'Tiyatro ve Drama' },
    {link:"/courses/chess", id: 3,src: '/courses/3.png',alt: 'Satranç' }, 
    {link:"/courses/paint", id: 4,src: '/courses/4.png',alt: 'Resim' },
    {link:"/courses/music", id: 5,src: '/courses/5.png',alt: 'Müzik' },

  ];

    return (
        <div>

            <section className="sm:pt-36 pt-32 relative  ">
                <Head>
                    <title>Penguen Sanat</title>
                </Head>



 
    <div className="max-w-4xl px-4  mx-auto">
    <Carousel
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={2000}
  showStatus={false}
  className="rounded-lg shadow-lg"
>
  {images.map((image) => (
    <Link href={image.link} key={image.id}>
      <div className="relative">
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full h-64 sm:h-[450px] rounded-xl"
        />
        <p className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm py-2 px-4 rounded-b-lg">
          {image.alt}
        </p>
      </div>
    </Link>
  ))}
</Carousel>

    </div>


                
 
                <div className="relative mx-auto max-w-screen-xl px-4 pt-10 pb-10 lg:flex   lg:items-center">
                    
                    <div className="mx-auto max-w-xl text-black text-center">
                        <h1 className="text-5xl">
                            Antalya’da <br />
                            <strong className="font-extrabold text-orange-500 sm:block"> Sanatın Kalbine </strong>
                            Yolculuk
                        </h1>
                        <p className="mt-4 font-noto sm:text-xl/relaxed">
                            Yaratıcılığınızı keşfedin ve müzik, drama ve sanatın büyüleyici dünyasına adım atın. Penguen Sanat Merkezi’nde her an, sanatsal hayallerinize bir adım daha yakın!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setShowModal(true)}
                                className="btn bg-orange-500 text-white border-none hover:bg-orange-600"
                            >
                                Tanıtımı İzle
                            </button>
                        </div>
                      
                    </div>
                </div>
            </section>


            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[13]">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl "
                        onClick={() => setShowModal(false)}>
                        &times;
                    </button>
                    <div className="relative ">
                        <iframe
                            width="500"
                            height="494"
                            src="https://www.youtube.com/embed/sJYO3hurbvU"
                            title="Penguen Sanat Merkezi Tanıtım Videosu | Antalya&#39;da Sanatın Kalbi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-2xl">
                        </iframe>
                    </div>
                </div>
            )}

 

            <section>
                <div className="mx-auto max-w-screen-2xl text-black px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src="insideps.png"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-3xl   sm:text-4xl">
                                    Biz kimiz?
                                </h2>

                                <p className="mt-4 font-noto text-lg text-gray-600">
                                    2015 yılında kurulan sanat merkezimiz, müzik eğitimi, tiyatro ve sanat etkinlikleri alanlarında uzman kadrosuyla hizmet vermektedir. Sanatı sevdirmek, yetenekleri keşfetmek ve geliştirmek için çeşitli eğitim programları sunuyoruz. Hem çocuklara hem de yetişkinlere yönelik kurslarımızla sanatı yaşamın bir parçası haline getirmeyi amaçlıyoruz.
                                </p>

                                <Link
                                    href="/about"
                                    className="mt-8 btn bg-orange-500 text-white border-none hover:bg-orange-600"
                                >
                                    Daha fazla
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="bg-orange-400">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl  text-gray-900 sm:text-3xl">Penguen Store</h2>
                                    <p className="mt-4 font-noto text-gray-500">
                                        Sanatseverler için özenle seçilmiş enstrüman koleksiyonumuzla hizmetinizdeyiz. Gitar, keman ve daha fazlası için mağazamıza göz atabilirsiniz.
                                    </p>
                                </header>
                                <Link
                                    href="/market"
                                    className="mt-8 btn btn-outline    text-black hover:text-white border-black hover:border-transparent   hover:bg-black                "
                                >
                                    Hepsini gör
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li className="block rounded overflow-hidden bg-white shadow">
                                    <img
                                        src="products/acoustic-guitar.jpg"
                                        alt="acoustic-guitar.jpg"
                                        className="h-[350px] w-full object-contain sm:h-[450px]"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-sm text-gray-700">Akustik Gitar</h3>
                                        <p className="text-xs text-gray-500">Marka: -</p>
                                    </div>
                                </li>
                                <li className="block rounded overflow-hidden bg-white shadow">
                                    <img
                                        src="products/electric-guitar.webp"
                                        alt="acoustic-guitar.jpg"
                                        className="h-[350px] w-full object-contain sm:h-[450px]"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-sm text-gray-700">Elektro Gitar</h3>
                                        <p className="text-xs text-gray-500">Marka: -</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl  text-gray-900 sm:text-3xl">Öne Çıkanlar</h2>

                        <p className="mx-auto  font-noto mt-4 max-w-md text-gray-500">
                            Sanat dolu anılarımızı keşfedin! Daha önce gerçekleştirdiğimiz etkinliklerden ilham alın ve bu unutulmaz anların bir parçası olun.     </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li>
                            <div className="group relative block">
                                <img
                                    src="/highlights/tiyatro-etkinlikleri.jpeg"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Tiyatro Etkinlikleri</h3>


                                </div>
                            </div>
                        </li>

                        <li>

                            <div className="group relative block">
                                <img
                                    src="/highlights/retrovos.jpeg"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">Retrovos Çocuk Konseri</h3>


                                </div>
                            </div>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <div className="group relative block">
                                <img
                                    src="/highlights/23nisan.jpeg"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white">23 Nisan Şenliği</h3>


                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>



            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl   text-gray-900 sm:text-4xl">
                            Hemen Aramıza Katıl!
                        </h2>

                        <p className="hidden font-noto text-gray-500 md:mt-4 md:block">
                            Sanat dolu bir dünyaya adım atın. Etkinliklerden haberdar olun, özel fırsatlara erişin ve yeteneklerinizi geliştirmek için ilk adımı atın!
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="http://register.penguensanat.com/"
                                className="btn btn-outline    text-black hover:text-white border-black hover:border-transparent   hover:bg-black   "
                            >
                                Şimdi katıl!
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>


        </div >
    );
}
