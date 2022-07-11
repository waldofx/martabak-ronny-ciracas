import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";
import LoadingSVG from "../components/loadingsvg";

//import hooks
import useGetMenusByPrice from "../hooks/useGetMenusByPrice";
import useDeleteMenus from "../hooks/useDeleteMenus";

//import assets
import QRIS_BCA from "../assets/img/QRIS_BCA.png";
import QRIS_OVO from "../assets/img/QRIS_OVO.png";

function Menu() {
    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;

    // ----------------- custom hook graphql -------------------------
    const { dataByPrice, loadingDataByPrice, errorDataByPrice } = useGetMenusByPrice();

    //setmenus at the start of render using useeffect
    const [menudatas, setMenus] = useState([]);
    useEffect(() => {
        if (dataByPrice) {
            setMenus(dataByPrice.menus);
        }
    }, [dataByPrice]);

    //error + loading
    const isError = errorDataByPrice;
    const isLoading = loadingDataByPrice;

    //handle edit & delete
    const { deleteMenus } = useDeleteMenus();
    function handleDelete(id) {
        return function (e) {
            if (window.confirm("Are you sure you want to delete this menu?")) {
                deleteMenus({
                    variables: {
                        id: id,
                    },
                });
                window.alert("Menu deleted!");
                window.location.reload(false);
            }
        };
    }

    // ----------------- render -------------------------
    return (
        <div className="bg-gray-100">
            <Header />

            <div className="container mx-5">
                {isAdmin && (
                    <a
                        href="/menu/create"
                        class="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                        Buat menu baru!
                    </a>
                )}
            </div>

            <div className="container mx-5">
                <h1 className="text-5xl font-bold text-red-600 flex justify-center mb-8">Daftar Menu</h1>

                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <LoadingSVG />}
                {!isError && !isLoading && (
                    <div>
                        <div className="bg-white">
                            <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {menudatas.map((menudata) => (
                                        <div className="group">
                                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                <img
                                                    src={menudata.img}
                                                    alt={menudata.name}
                                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                                    style={{ "max-height": "280px" }}
                                                />
                                            </div>
                                            <h3 className="mt-4 text-md text-gray-700">{menudata.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">Rp. {menudata.price}</p>
                                            {isAdmin && (
                                                <div className="mt-4">
                                                    <button
                                                        className="text-white font-bold bg-red-600 hover:bg-red-800 py-2 px-2 rounded mr-5"
                                                        onClick={handleDelete(menudata.id)}
                                                    >
                                                        DELETE
                                                    </button>
                                                    <a
                                                        href={`/menu/edit/${menudata.id}`}
                                                        className="text-white font-bold bg-green-600 hover:bg-green-800 py-2 px-2 rounded"
                                                    >
                                                        EDIT
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="container mx-5 text-center">
                <p>*Harga diatas belum termasuk harga pengantaran makanan untuk pesanan online.</p>
                <p className="mb-5">
                    Setelah memilih yang ingin dipesan, silahkan memesan melalui Whatsapp <strong> No 0822-6067-9579 </strong>{" "}
                    Atau Klik di sini
                    <a
                        href="https://api.whatsapp.com/send?phone=6282260679579"
                        className="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <svg
                                class="w-10 h-10 text-green-400 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                        </button>
                    </a>
                </p>
                <div className="mb-10">
                    <div className="mb-5">
                        <p>
                            Setelah konfirmasi pesanan, silahkan bayar melalui transfer BCA - Rek. BCA atas nama Thjie Njun Tet
                            628 118 2801.
                        </p>
                        <p>Atau Bayar melalui OVO atas nama Martabak Bangka Ronny.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 place-items-center">
                        <img
                            src={QRIS_BCA}
                            alt="QRIS_BCA"
                            className="w-1/2 h-full object-center object-cover group-hover:opacity-75"
                            // style={{ "max-height": "280px" }}
                        />
                        <img
                            src={QRIS_OVO}
                            alt="QRIS_OVO"
                            className="w-1/2 h-full object-center object-cover group-hover:opacity-75"
                            // style={{ "max-height": "280px" }}
                        />
                    </div>
                </div>
                <div>
                    <p>
                        Jika ingin beli online dan diantar, bisa pakai gofood dan grabfood dengan nama merchant nya MARTABAK
                        BANGKA RONNY CIRACAS CIBUBUR. Silahkan klik link dibawah ini:
                    </p>
                    <div className="mt-5 mb-10">
                        <a
                            href="https://gofood.co.id/jakarta/restaurant/martabak-bangka-ronny-ciracas-bd8b01e9-0133-4eb6-bb7e-07fbb1753a80"
                            className="text-white font-bold bg-green-700 hover:bg-green-900 py-2 px-2 rounded mx-5 mt-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GoFood
                        </a>
                        <a
                            href="https://food.grab.com/id/id/restaurant/martabak-bangka-ronny-cibubur-delivery/6-CYLDLVCXT2BZWA"
                            className="text-white font-bold bg-green-700 hover:bg-green-900 py-2 px-2 rounded m-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GrabFood
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Menu;
