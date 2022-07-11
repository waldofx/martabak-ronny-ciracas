import React from "react";

function Footer() {
    return (
        <footer class="text-center lg:text-left mt-5 bg-amber-600 ">
            <div class="container p-6 text-gray-100">
                <div class="grid lg:grid-cols-2 gap-4">
                    <div class="mb-6 md:mb-0">
                        <h5 class="font-medium mb-2 uppercase">Hubungi kami melalui:</h5>
                        <p> No. Telp: 0817-4932-144</p>
                        <p> Email: martabakbangka039@gmail.com</p>
                    </div>

                    <div class="mb-6 md:mb-0">
                        <h5 class="font-medium mb-2 uppercase">Alamat</h5>
                        {/* <a
                            href="https://www.google.com/maps/dir//Ronny+Martabak+Bangka/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69ece93dcc95cd:0x8e7a451b02fc00bb!2m2!1d106.88399779999999!2d-6.3517000999999995"
                            class="text-white font-bold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded"
                        >
                            Lihat Rute
                        </a> */}
                        <p class="mt-2">
                            <div>Jalan Raya Lapangan Tembak No.5, RT.2</div>
                            <div>Cibubur, Ciracas, Kota Jakarta Timur</div>
                            <div>Daerah Khusus Ibukota Jakarta 13720</div>
                            <div>Indonesia</div>
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center text-amber-100 p-4" style={{ "background-color": "rgba(0, 0, 0, 0.1)" }}>
                © 2022 Copyright: Martabak Ronny Ciracas
            </div>
        </footer>
    );
}

export default Footer;
