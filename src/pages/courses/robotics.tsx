import Build from "@mui/icons-material/Build";
import Code from "@mui/icons-material/Code";
import PrecisionManufacturing from "@mui/icons-material/PrecisionManufacturing";
import Head from "next/head";

export default function RoboticCodingCourse() {
    return (
        <div className="  min-h-screen">
            <Head>
                <title>Penguen Sanat | Robotik Kodlama</title>
            </Head>
            {/* Hero Section */}
            <div className="hero pt-20 h-screen relative">
                <div className="hero-overlay bg-[#81D4FA]"></div>
                <div className="hero-content flex flex-col text-center text-black relative z-10">
                    <img src="/course-cards/2.png" className="h-80 w-auto" alt="Robotic Coding Course" />
                    <p className="mt-2 max-w-screen-md text-xl">
                        Teknolojiye adım atın! Robotik kodlama ile mekanik sistemlerin nasıl çalıştığını öğrenin ve kendi robotlarınızı tasarlayın. STEM eğitimiyle geleceğin mühendislerinden biri olun!
                    </p>
                </div>
            </div>a

            {/* What You'll Learn Section */}
            <section className="py-12 text-black px-6 lg:px-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl text-center mb-6">Ne Öğreneceksiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Temel Robotik</h3>
                            <p className="text-gray-600">
                                Robotların yapısını ve çalışma prensiplerini öğrenerek temel mekanik bilgisi edinin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Kodlama Teknikleri</h3>
                            <p className="text-gray-600">
                                Arduino ve benzeri platformlarla robotların yazılımını geliştirin.
                            </p>
                        </div>
                        <div className="p-6 shadow-xl rounded-2xl bg-gray-100 text-center">
                            <h3 className="text-2xl mb-2">Problem Çözme</h3>
                            <p className="text-gray-600">
                                STEM projeleriyle yaratıcılığınızı ve analitik düşünme becerilerinizi geliştirin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" p-8   bg-gray-100   text-gray-800">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-4xl  ">Robotlarınızı Kodlayın!</h2>
                    <p className="dark:text-gray-600">Kendi projelerinizi geliştirerek teknoloji dünyasında yerinizi alın.</p>
                </div>
                <div className="container    text-center mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="  text-[#0277BD] inline-block rounded-full  border-[#0277BD] border-4   flex-col items-center p-10">

                        <Build className="w-12 h-12 "></Build>
                        <h3 className="my-3 text-2xl font-semibold">Mekanik Tasarım</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Robot parçalarının kullanımı.</p>
                            <p>3D yazıcı ve devre tasarımı.</p>                        </div>
                    </div>
                    <div className="  text-white inline-block rounded-full bg-[#0277BD] border-[#0277BD] border-4   flex-col items-center p-10">
                        <Code className="w-12 h-12  "></Code>
                        <h3 className="my-3 text-2xl font-semibold">Kodlama</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Arduino ve Python programlama.</p>
                            <p>Sensör ve motor kontrolü.</p>
                        </div>
                    </div>
                    <div className="  text-[#0277BD] inline-block rounded-full  border-[#0277BD] border-4   flex-col items-center p-10">
                        <PrecisionManufacturing className="w-12 h-12  "></PrecisionManufacturing>
                        <h3 className="my-3 text-2xl font-semibold">STEM Projeleri</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Gerçek hayat problemlerine çözüm üretme.</p>
                            <p>Takım çalışmasıyla proje geliştirme.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Facilities Section */}
            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-6 lg:px-2 text-center">
                    <h2 className="text-4xl mb-6">Kodlama Atölyelerimiz</h2>
                </div>
                <div className="carousel carousel-center w-full h-96 space-x-4 p-4">

                    <div className="carousel-item">
                        <div className="relative shadow-lg rounded-box w-96 h-auto overflow-hidden">
                            <img
                                src="/classes/coding-studio.png"
                                alt="Kodlama Sınıfı"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end px-4 py-2">
                                <p className="text-white text-lg">Kodlama Sınıfı</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-12 text-white bg-[#0277BD] text-center">
                <h2 className="text-4xl mb-4">Şimdi Kayıt Ol!</h2>
                <p className="text-lg mb-6">Teknoloji dünyasında bir adım önde olun ve kendi robotlarınızı tasarlayın.</p>
                <a href="http://register.penguensanat.com/" target="_blank" className="px-6 py-3 bg-white text-[#01579B] font-semibold rounded-lg shadow-lg hover:bg-gray-200">
                    Kayıt Ol
                </a>
            </section>
        </div>
    );
}
