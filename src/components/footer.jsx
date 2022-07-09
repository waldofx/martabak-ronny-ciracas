import React from "react";

function Footer() {
    return (
        <footer class="bg-gray-100 text-center lg:text-left mt-5">
            <div class="container p-6 text-gray-800">
                <div class="grid lg:grid-cols-2 gap-4">
                    <div class="mb-6 md:mb-0">
                        <h5 class="font-medium mb-2 uppercase">Hubungi kami melalui:</h5>
                        {/* <p class="flex items-center justify-center md:justify-start">
                            <a
                                href="tel:+62-817-4932-144"
                                class="text-white font-bold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="phone"
                                    class="w-4 mr-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                    ></path>
                                </svg>
                                Telepon
                            </a>
                        </p>*/}
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

            <div class="text-center text-gray-700 p-4" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright: Martabak Ronny Ciracas
            </div>
        </footer>
    );
}

export default Footer;
