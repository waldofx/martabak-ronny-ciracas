import React from "react";

//import components
import Header from "../components/header";
import Footer from "../components/footer";
import Map from "../components/map";

//import assets
import Toko from "../assets/img/toko.png";
import Nama from "../assets/img/Nama_Martabak.png";

function About() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="mx-20">
                <div>
                    <h1 className="text-5xl font-bold text-red-600 flex justify-center mb-10">Martabak Ronny Ciracas</h1>
                    <h6 className="font-bold mb-1">Sejarah Toko</h6>
                    <p className="mb-4">lorem ipsum</p>
                    <img
                        alt="Foto Toko Martabak"
                        src={Toko}
                        style={{
                            "max-width": "500px",
                            width: "80%",
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "margin-top": "20px",
                            "margin-bot": "20px",
                        }}
                    />
                    <div
                        style={{
                            "max-width": "500px",
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "margin-top": "20px",
                            "margin-bot": "20px",
                        }}
                    >
                        <Map />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-red-600 flex justify-center mb-10 mt-10">Sejarah Tentang Martabak</h1>
                    <h6 className="font-bold mb-1">Pengertian Martabak</h6>
                    <p className="mb-4">
                        Di Indonesia, dikenal dua jenis martabak yaitu Martabak Manis dan Martabak Telur. Menurut Kamus Besar
                        Bahasa Indonesia, Martabak Manis adalah makanan terbuat dr adonan terigu, telur, gula, yg ditaburi bubuk
                        kacang tanah dan cokelat, kemudian dipanggang dan dilipat; Sedangkan definisi Martabak Telur adalah
                        makanan terbuat dr adonan tepung terigu (untuk lapisan luar) dan adonan telur, daging giling (cincang),
                        dan rempah (untuk bagian isi) yg kemudian digoreng.
                    </p>
                    <h6 className="font-bold mb-1">Sejarah Martabak Manis</h6>
                    <p className="mb-4">
                        Martabak Manis atau yang aslinya bernama Hok Lo Pan awalnya adalah Makanan Khas Bangka Belitung. Hok Lo
                        Pan atau Martabak diciptakan oleh orang-orang Hakka ( Khek ) Bangka. Satu-satunya di dunia, makanan orang
                        suku Hakka (khek) yang memakai nama suku Hoklo. Hampir semua orang di kota-kota besar seperti di kota
                        Jakarta mengenal Martabak Bangka, nama aslinya di Bangka adalah Hok Lo Pan (Martabak ). Arti Hurfiah Hok
                        Lo Pan ( Martabak ) adalah Kue Orang Hok Lo. Hok Lo Pan ( Martabak ) adalah kue yang sangat sederhana.
                        Membuatnya pun sepertinya mudah. Hanya 12 Menit menunggu Hok Lo Pan ( Martabak ) pun Jadi. Menggunakan
                        tepung terigu, diolesi dengan mentega, ditaburi coklat butir campur kacang tanah dan wijen, atau Keju
                        parut campur wijen, kemudian diberikan susu kental manis, selesai. Ringkasnya seperti itu. Kini, isi dalam
                        Hok Lo Pan ( Martabak ) beragam, ada pisang, strawberry, blueberry, dll. Aslinya hanya wijen saja.
                    </p>
                    <img
                        alt="nama martabak di berbagai bagian Indonesia"
                        src={Nama}
                        style={{
                            "max-width": "500px",
                            width: "80%",
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "margin-top": "20px",
                            "margin-bot": "20px",
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
