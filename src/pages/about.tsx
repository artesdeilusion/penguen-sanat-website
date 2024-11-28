import Head from 'next/head';
import React from 'react';

function About() {
    return (
        <div className="min-h-screen mt-20   text-gray-700">
            <Head>
                <title>Penguen Sanat | Hakkımızda</title>
            </Head>

            {/* Hero Section */}
            <section className="  text-gray-800">
                <div className="container flex flex-col items-center justify-center p-6 mx-auto sm:pt-12 lg:pt-24">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="ps-tabela.png" alt="" className="rounded-xl object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 text-center lg:max-w-md xl:max-w-lg">
                        <h1 className="text-4xl leading-none sm:text-5xl">
                            <div className="text-center space-y-1">
                                <div className="text-left">
                                    <span className="ml-5">Satranç</span>
                                </div>
                                <div className="text-right">
                                    <span className=" text-green-500">Müzik</span>
                                </div>
                                <div className="text-left">
                                    <span className="text-purple-500">Resim</span>
                                </div>
                                <div className="text-right">
                                    <span className="ml-40 text-orange-500">Tiyatro</span>
                                </div>
                                <div className="text-left">
                                    <span className="ml-5 text-blue-500">Robotik</span>
                                </div>
                            </div>

                        </h1>
                        <p className="mt-6 mb-4 text-lg sm:mb-8">
                            Sanatın Gücüyle İlham Veren,
                            <br className="hidden md:inline lg:hidden" />Yaratıcılıkla Geleceği Şekillendiren Bir Topluluk
                        </p>
                        <div className="flex flex-row  sm:items-center sm:justify-center sm:flex-row space-x-4">
                            <a rel="noopener noreferrer" target='_blank' href="http://register.penguensanat.com/" className="btn bg-orange-500 text-white border-none hover:bg-orange-600">Kayıt Ol</a>
                            <a rel="noopener noreferrer" target='_blank' href="https://maps.app.goo.gl/aBevPFgDU9V2V7Wz7" className="btn bg-orange-500 text-white border-none hover:bg-orange-600">Yol Tarifi</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="   sm:mt-20 bg-gray-100">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="mb-8   text-4xl   tracking-tight leading-tight text-center text-gray-900">İşbirlikleri ve Projeler</h2>
                    <div className="grid sm:p-0 px-8 grid-cols-3 gap-12 text-black sm:gap-5 md:grid-cols-3 lg:grid-cols-9  ">
                        <a href="https://ibb.istanbul/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/ibb-logo.png" className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://www.antalya.bel.tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/abb.png   " className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://www.korg.com/tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/korg-logo.png" className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://www.halkbank.com.tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/halkbank.png" className="w-auto  h-auto" alt="" />
                        </a>

                        <a href="https://www.migros.com.tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/migros-logo.png" className="w-auto  h-auto" alt="" />
                        </a>

                        <a href="https://www.ziraatbank.com.tr/tr" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/ziraat-logo.png" className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://www.vodafone.com.tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/vodafone-logo.svg" className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://pitbullstrings.com/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/pitbull-strings-logo.webp" className="w-auto  h-auto" alt="" />
                        </a>
                        <a href="https://www.meb.gov.tr/" target="_blank" className="flex justify-center items-center">
                            <img src="/brands/meb-logo.png" className="w-auto  h-auto" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            {/* About Us Section */}
            <section className="py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl  text-center mb-6">Biz kimiz?</h2>
                    <p className="text-lg text-center max-w-4xl mx-auto">
                        Penguen Sanat olarak, sanatın, müziğin ve eğitimin dönüştürücü gücüne inanıyoruz. Toplumun kalbinde yer alan merkezimizde, yaratıcılığı teşvik etmeyi, becerileri geliştirmeyi ve her yaştan insanın tutkularını beslemeyi misyon edindik. İster bir enstrüman çalmayı öğrenmek, ister resim yapma sanatında ustalaşmak, isterse robotik ve kodlama dünyasını keşfetmek olsun, hayal gücünün fırsatlarla buluştuğu bir ortam sunuyoruz.


                    </p>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div>
                            <h3 className="text-3xl  mb-4">Vizyonumuz</h3>
                            <p className="text-lg">
                                Bireylerin potansiyellerini keşfetmelerine ve yaratıcılık ile yenilikçilik sayesinde anlamlı bir fark yaratmalarına olanak tanıyan lider bir kurum olmak.

                            </p>
                        </div>
                        {/* Mission */}
                        <div>
                            <h3 className="text-3xl  mb-4">Misyonumuz</h3>
                            <p className="text-lg">
                                Merak uyandıran, yaratıcılığı teşvik eden ve öğrencileri dinamik bir dünyada başarılı olmaları için gerekli becerilerle donatan destekleyici ve kapsayıcı bir öğrenme ortamı yaratmayı hedefliyoruz.







                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-6 max-w-5xl m-auto pb-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl   sm:text-4xl text-black text-center mb-6">Kurslarımız</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
                        {[
                            { name: "Dreama", description: "Melodi ve armoni sanatını öğrenerek yaratıcılığınızı geliştirin.", link: "/courses/drama", image: "course-cards/1.png" },
                            { name: "Robotics", description: "Teknolojiyi keşfedin ve robotik alanında uzmanlaşarak geleceği inşa edin.", link: "/courses/robotics", image: "course-cards/2.png" },
                            { name: "Chess", description: "Strateji geliştirin, analitik düşünme yeteneğinizi artırın ve satranç ustası olun.", link: "/courses/chess", image: "course-cards/3.png" },
                            { name: "Music", description: "Müzik aletlerini keşfedin ve yaratıcılığınızı notalarla ifade edin.", link: "/courses/music", image: "course-cards/4.png" },
                            { name: "Resim", description: "Renkler ile yaratıcılığınızı serbest bırakın ve eşsiz eserler yaratın.", link: "/courses/paint", image: "course-cards/5.png" }
                        ].map((course, index) => (
                            <a
                                key={index}
                                href={course.link}
                                className="group rounded-3xl p-4 transition-all duration-300 transform group- hover:scale-105 shadow-lg bg-white overflow-hidden text-center flex flex-col items-center hover:shadow-2xl hover:bg-gray-50"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full"
                                    />
                                </div>
                                <div className="mt-4 text-black">
                                    <p className="text-gray-600 text-sm">{course.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 bg-indigo-50">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl   mb-6">Neden Penguen Sanat?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Uzman Eğitmenler",
                                description: "Alanında deneyimli profesyonellerden eğitim alın."
                            },
                            {
                                title: "Yaratıcı Ortam",
                                description: "Destekleyici bir atmosferde potansiyelinizi açığa çıkarın."
                            },
                            {
                                title: "Modern Ekipmanlar",
                                description: "En son teknolojiye sahip kaynaklarla öğrenmenin keyfini çıkarın."
                            },
                            {
                                title: "Topluma Katkı",
                                description: "İlham verici bir topluluğun parçası olun ve fark yaratın."
                            }
                        ].map((reason, index) => (
                            <div key={index} className="p-10 rounded-3xl shadow-md bg-white">
                                <h4 className="text-xl  mb-2">{reason.title}</h4>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12  ">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Sanat Okulumuz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/bekleme-odası.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Bekleme Odası</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/chess-room.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Satranç Odası</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/class-one.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Derslik</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/class-two.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Derslik</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/coding-studio.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Kodlama Atölyesi</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/drama-room.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Drama Odası</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/music-studio-1.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Müzik Stüdyosu</p>
                            </div>
                        </div>
                    </div> <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/music-studio-2.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Müzik Stüdyosu</p>
                            </div>
                        </div>
                    </div> <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/paint-studio.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Resim Sınıfı</p>
                            </div>
                        </div>
                    </div> <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/record-room.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Kayıt Odası</p>
                            </div>
                        </div>
                    </div> <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/theater-2.png"
                                alt="Class One"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Tiyatro Sahnesi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl   text-gray-900 sm:text-4xl">
                            Hemen Aramıza Katıl!
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
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

export default About;
