 import Head from "next/head";

export default function MusicCourses() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Penguen Sanat | Müzik</title>
            </Head>  {/* Hero Section */}
            <div className="hero pt-20 h-screen relative">
                <div className="hero-overlay bg-[#A8E6CF]"></div>
                <div className="hero-content flex flex-col text-center text-black relative z-10">
                    <img src="/course-cards/4.png" className="h-80 w-auto" alt="Music Courses" />
                    <p className="mt-2 max-w-screen-md text-xl">
                        Müziğin büyülü dünyasına adım atın! Gitar, keman, piyano, bateri ve daha fazlasını öğrenmek için uzman eğitmenlerimizle çalışın. Güzel Sanatlar ve Konservatuvar hazırlık eğitimleri de burada!
                    </p>
                </div>
            </div>

            {/* Course Types Section */}
            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Müzik Kurslarımız</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Gitar Kursu", image: "/instruments/guitar.png", desc: "Gitar çalmayı en temelden öğrenin." },
                            { name: "Keman Kursu", image: "/instruments/violin.png", desc: "Kemanla klasik müziğin inceliklerini keşfedin." },
                            { name: "Piyano Kursu", image: "/instruments/piano.webp", desc: "Parmaklarınızla melodilere hayat verin." },
                            { name: "Bateri Kursu", image: "/instruments/drums.png", desc: "Ritimlerin ustası olun." },
                            { name: "Bağlama Kursu", image: "/instruments/baglama.png", desc: "Halk müziğimizin enstrümanını öğrenin." },
                        ].map((course, idx) => (
                            <div key={idx} className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                                <img src={course.image} alt={course.name} className="h-40 mx-auto mb-4" />
                                <h3 className="text-2xl mb-2">{course.name}</h3>
                                <p className="text-gray-600">{course.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Benefits Section */}
            <section className="py-12 bg-[#A8E6CF] text-black">
                <div className="container mx-auto text-center px-6 lg:px-12">
                    <h2 className="text-4xl mb-6">Neden Bizi Seçmelisiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 shadow-lg rounded-2xl bg-white text-center">
                            <h3 className="text-2xl   mb-3">Uzman Eğitmenler</h3>
                            <p>Alanında uzman eğitmenlerimizle birebir eğitim alın.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-2xl bg-white text-center">
                            <h3 className="text-2xl   mb-3">Kapsamlı İçerikler</h3>
                            <p>Tüm seviyelere uygun kurs içerikleri.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-2xl bg-white text-center">
                            <h3 className="text-2xl   mb-3">Performans Geliştirme</h3>
                            <p>Güzel Sanatlar ve Konservatuvar sınavlarına tam destek.</p>
                        </div>
                        {/* New Box for Special Programs */}
                        <div className="p-6 shadow-lg rounded-2xl bg-white text-center">
                            <h3 className="text-2xl   mb-3">Kaliteli Eğitimler</h3>
                            <p>BİLSEM, Güzel Sanatlar gibi yetenek sınavları ve konservatuvar hazırlığı için özel dersler ve rehberlik hizmeti veriyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lesson Notes Section */}
            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-4xl mb-6">Ders Notları</h2>
                    <p className="text-lg mb-8">
                        Kurslarımızdaki önemli noktaları tekrar etmek için aşağıdaki ders notlarına göz atabilirsiniz.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Keman Ders Notları", link: "https://drive.google.com/file/d/17dPPTaBr6YnHnLy57opmsfATlaVCPuYC/view" },
                            { name: "Piyano Ders Notları", link: "https://drive.google.com/drive/folders/1dfE9Y0Ot7RCBmOtpGStNXVFHc4wTI6lH" },
                        ].map((note, idx) => (
                            <a
                                key={idx}
                                href={note.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 bg-gray-100 rounded-2xl shadow-xl hover:bg-gray-200 text-black transition-all"
                            >
                                {note.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white text-black ">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Müzik Dersliklerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">

                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/music-studio-1.png"
                                alt="Müzik Stüdyosu"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Müzik Stüdyosu</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/music-studio-2.png"
                                alt="Müzik Stüdyosu"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Müzik Stüdyosu</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/class-one.png"
                                alt="Derslik"
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
                                alt="Derslik"
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
                                src="/classes/record-room.png"
                                alt="Kayıt Odası"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white   text-lg">Kayıt Odası</p>
                            </div>
                        </div>
                    </div>



                </div>
            </section >
            {/* Call to Action Section */}
            <section className="py-12 bg-[#388E3C] text-white text-center">
                <h2 className="text-4xl mb-4">Müzik Tutkunuza İlk Adımı Atın!</h2>
                <p className="text-lg mb-6">
                    Kurslarımızla yeteneklerinizi geliştirin, müzikle hayatınızı güzelleştirin.
                </p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#388E3C] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>
            </section>
        </div>
    );
}
