import Head from 'next/head';
import React from 'react';

function Workshop() {
    const projects = [
        {
            id: 1,
            title: "Ritim Atölyesi",
            description: "Müzik ritimlerini keşfederek eğlenin ve yaratıcılığınızı geliştirin.",
            image: "/workshops/rhythm_workshop.jpg",
            category: "Müzik",
            link: "https://www.instagram.com/penguensanatmerkezi"
        },
        {
            id: 2,
            title: "Kodlama Atölyesi",
            description: "Kodlama dünyasına eğlenceli bir başlangıç yapın ve yeni şeyler öğrenin.",
            image: "/workshops/code_workshop.webp",
            category: "Teknoloji",
            link: "https://www.instagram.com/penguensanatmerkezi"
        },
        {
            id: 3,
            title: "Seramik Atölyesi",
            description: "Kendi seramik eserlerinizi oluşturmanın keyfini çıkarın!",
            image: "/workshops/ceramic_workshop.jpg",
            category: "Sanat",
            link: "https://www.instagram.com/penguensanatmerkezi"
        },
        {
            id: 4,
            title: "Drama Atölyesi",
            description: "Drama yeteneklerinizi geliştirerek eğlenin ve yeni deneyimler kazanın.",
            image: "/workshops/drama_workshop.jpg",
            category: "Tiyatro",
            link: "https://www.instagram.com/penguensanatmerkezi"
        },
    ];

    return (
        <div>
            <Head>
                <title>Penguen Sanat | Atölyeler</title>
            </Head>
            <section className="p-4 lg:p-8 mt-20  bg-gray-100  text-gray-800">
                <header className="text-center pt-10">
                    <h2 className="  text-gray-900 text-4xl">Penguen Sanat Atölyeleri</h2>
                    <p className="mt-4 max-w-lg mx-auto text-gray-600">
                        Ritim, drama, seramik ve kodlama gibi eğlenceli ve eğitici atölyelerimizle hobi dünyanızı genişletin!
                    </p>
                </header>

                {/* Grid Section */}
                <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 uppercase">{project.category}</span>
                                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="mt-4 text-gray-600">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-block text-orange-500 hover:text-orange-700"
                                >
                                    Daha Fazla Bilgi
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action Section */}
                <div className="mt-12 py-10 text-center">
                    <h3 className="text-3xl font-bold text-gray-900">Penguen Sanat'ta Yerinizi Ayırtın!</h3>
                    <p className="mt-4 text-gray-600">
                        Etkinlik tarihlerini ve kayıt formlarını yakından takip edin!
                    </p>
                    <a
                        href="https://www.instagram.com/penguensanatmerkezi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600"
                    >
                        Instagram'dan Takip Edin
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Workshop;
