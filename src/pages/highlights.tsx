import Head from 'next/head';
import React from 'react';

function Highlights() {
    const projects = [
        {
            id: 1,
            title: "Antalya Büyükşehir Belediyesi Çocuk Konseri",
            description: "Penguen Sanat olarak, Antalya Büyükşehir Belediyesi tarafından düzenlenen bu çocuk konserinde sahne alarak genç yeteneklere ilham verdik.",
            image: "/highlights/cocuk-konseri.png",
            category: "Müzik & Tiyatro",
            link: "https://www.youtube.com/live/Q7v6EmiSh1Y" // Add a link here if available
        },
        {
            id: 2,
            title: "23 Nisan Şenliği",
            description: "Penguen Sanat olarak, 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı’na özel düzenlenen bu müzik şenliğinde de yer aldık.",
            image: "/highlights/23nisan.jpeg",
            category: "Müzik",
            link: ""
        },
        {
            id: 3,
            title: "Antalya Büyükşehir Belediyesi Ramazan Etkinlikleri",
            description: "Ramazan ayının manevi atmosferinde, Penguen Sanat olarak Antalya Büyükşehir Belediyesi'nin düzenlediği müzik ve tiyatro etkinliklerine katıldık.",
            image: "/highlights/ramazan.png",
            category: "Müzik & Tiyatro",
            link: "https://www.youtube.com/live/jYDUn7fw0mc" // Add a link here if available
        },
        {
            id: 4,
            title: "Retrovos Çocuk Konseri",
            description: "Penguen Sanat olarak, Retrovos Çocuk Konseri'nde sahne alarak çocuklarla birlikte müziğin gücünü keşfettik.",
            image: "/highlights/retrovos.jpeg",
            category: "Müzik",
            link: "" // Add a link here if available
        },
        {
            id: 5,
            title: "Tiyatro Etkinlikleri",
            description: "Penguen Sanat olarak, düzenlediğimiz tiyatro etkinliklerinde katılımcılara sahnede drama ve yaratıcı performans deneyimleri sunduk.",
            image: "/highlights/tiyatro-etkinlikleri.jpeg",
            category: "Tiyatro & Drama",
            link: "" // Add a link here if available
        },
        {
            id: 6,
            title: "Şehit Teğmen Ayfer Gök Anaokulu Şarkısı",
            description: "Okullara Özel Şarkılar Projemizin ilk şarkısını Şehit Teğmen Ayfer Gök Anaokuluna yaptık.",
            image: "/highlights/saga.png",
            category: "Şarkı",
            link: "https://www.youtube.com/watch?v=Mi-DiHNrl5E" // Add a link here if available
        }, {
            id: 7,
            title: "Cengiz Topel Anaokulu Şarkısı",
            description: "Okullara Özel Şarkılar Projemizin 3. Şarkısını Cengiz Topel Anaokuluna yaptık ve güzelde bir çalışma oldu. Bu projede emeği geçen tüm ekip arkadaşlarımıza teşekkür ederiz.",
            image: "/highlights/cta.png",
            category: "Şarkı",
            link: "https://www.youtube.com/watch?v=SaKaDXdfFYo" // Add a link here if available
        },
    ];

    return (
        <div>
            <Head>
                <title>Penguen Sanat | Öne Çıkanlar</title>
            </Head>
            <section className="p-4 lg:p-8 mt-20  bg-gray-100  text-gray-800">
                <header className="text-center pt-10">
                    <h2 className="  text-gray-900 text-4xl">Öne Çıkanlar</h2>
                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Sanat dolu anılarımızı keşfedin! Daha önce gerçekleştirdiğimiz etkinliklerden ilham alın ve bu unutulmaz anların bir parçası olun.
                    </p>
                </header>

                <div className="container pt-10   mx-auto space-y-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex bg-gray-100  flex-col overflow-hidden rounded-sm shadow-lg lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-80  bg-gray-500 aspect-video"
                            />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl  ">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                <p className="my-6 dark:text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section></div>
    );
}

export default Highlights;
