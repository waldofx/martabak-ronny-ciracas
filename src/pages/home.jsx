import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Logo from "../assets/img/Logo.jpg";

function Home() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="container mx-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <div className="block lg:hidden">
                        <img alt="logo martabak" src={Logo} />
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-8xl font-bold text-red-700 my-8">MARTABAK RONNY CIRACAS</h1>
                        <h3 className="text-2xl md:text-3xl font-bold text-red-700 my-8">
                            Toko penjual martabak manis spesial bangka paling enak semejak tahun 1995.
                        </h3>
                        <h6 className="text-2xl text-red-700 mb-4">Buka Senin-Jumat pukul 16:00-23:00 WIB.</h6>
                    </div>
                    <div className="hidden lg:block">
                        <img alt="logo martabak" src={Logo} />
                    </div>
                </div>
                {/* <a href="/menu" class="text-white font-bold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded">
                    Lihat Menu!
                </a> */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
