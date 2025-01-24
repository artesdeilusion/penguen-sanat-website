import Head from 'next/head';
import React from 'react';

function Workshop() {
    const projects = [
        {
            id: 1,
            title: "Keman Ders Notları",
            description: "Kurslarımızdaki önemli noktaları tekrar etmek için aşağıdaki ders notlarına göz atabilirsiniz.",
            image: "https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Müzik",
            link: "https://drive.google.com/file/d/17dPPTaBr6YnHnLy57opmsfATlaVCPuYC/view"
        },
        {
            id: 2,
            title: "Piyano Ders Notları",
            description: "Kurslarımızdaki önemli noktaları tekrar etmek için aşağıdaki ders notlarına göz atabilirsiniz.",
            image: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Müzik",
            link: "https://drive.google.com/drive/folders/1dfE9Y0Ot7RCBmOtpGStNXVFHc4wTI6lH"
        },
        
    ];

    return (
        <div>
            <Head>
                <title>Penguen Sanat | Ders Notları</title>
            </Head>
            <section className="p-4 lg:p-8 mt-20  bg-gray-100  text-gray-800">
                <header className="text-center pt-10">
                    <h2 className="  text-gray-900 text-4xl">Ders Notları</h2>
                    <p className="mt-4 max-w-lg mx-auto text-gray-600">
                    Kurslarımızdaki önemli noktaları tekrar etmek için aşağıdaki ders notlarına göz atabilirsiniz.
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
                                    Notu Görüntüle
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
 
 
            </section>
        </div>
    );
}

export default Workshop;
