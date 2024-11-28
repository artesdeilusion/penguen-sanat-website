import Head from "next/head";

export default function PaintCourse() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Penguen Sanat | Resim</title>
            </Head>
            {/* Hero Section */}
            <div className="hero pt-20 h-screen relative">
                <div className="hero-overlay bg-[#FFF9C4]"></div>
                <div className="hero-content flex flex-col text-center text-black [#FBC02D] relative z-10">
                    <img src="/course-cards/5.png" className="h-80 w-auto" alt="Paint Course" />
                    <p className="mt-2 font-noto max-w-screen-md text-xl">
                        Hayal gücünüzü renklere dökün! Profesyonel eğitmenlerimizle yağlı boya, suluboya ve karakalem gibi farklı teknikleri keşfedin. Kendi sanat eserlerinizi yaratma keyfini yaşayın!
                    </p>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Ne Öğreneceksiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-10 shadow-xl rounded-3xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Temel Çizim Teknikleri</h3>
                            <p className="font-noto text-gray-600">
                                Çizim tekniklerini öğrenerek perspektif, ışık ve gölge kullanımı konusunda uzmanlaşın.
                            </p>
                        </div>
                        <div className="p-10 shadow-xl rounded-3xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Renk Karıştırma</h3>
                            <p className="font-noto text-gray-600">
                                Farklı boya türlerini keşfedin ve renk karıştırma teknikleriyle eşsiz tonlar yaratın.
                            </p>
                        </div>
                        <div className="p-10 shadow-xl rounded-3xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Sanat Kompozisyonu</h3>
                            <p className="font-noto text-gray-600">
                                Kompozisyonun temel kurallarını öğrenerek sanat eserlerinize estetik bir dokunuş katın.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Facilities Section */}
            <section className="py-12 bg-gray-100 text-black">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Sanat Atölyelerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/paint-studio.png"
                                alt="Sanat Atölyesi"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Sanat Atölyesi</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-12 text-white bg-[#FBC02D] text-center">
                <h2 className="text-4xl mb-4">Şimdi Kayıt Ol!</h2>
                <p className="text-lg font-noto mb-6">Hayal gücünüzü keşfedin ve benzersiz sanat eserleri yaratın.</p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#FBC02D] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>
            </section>
        </div>
    );
}
