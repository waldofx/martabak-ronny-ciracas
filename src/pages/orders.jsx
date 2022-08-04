import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";
import LoadingSVG from "../components/loadingsvg";

//import hooks
import useGetOrdersByNewest from "../hooks/useGetOrdersByNewest";
import useUpdateOrder from "../hooks/useUpdateOrders";
import useDeleteOrder from "../hooks/useDeleteOrders";

function Orders() {
    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;

    // ----------------- custom hook graphql -------------------------
    const { dataByNewest, loadingDataByNewest, errorDataByNewest } = useGetOrdersByNewest();

    //setorders at the start of render using useeffect
    const [orderdatas, setOrders] = useState([]);
    useEffect(() => {
        if (dataByNewest) {
            setOrders(dataByNewest.orders);
        }
    }, [dataByNewest]);

    //error + loading
    const isError = errorDataByNewest;
    const isLoading = loadingDataByNewest;

    //handle edit & delete
    const { deleteOrder } = useDeleteOrder();
    function handleDelete(id) {
        return function (e) {
            if (!isAdmin) {
                return alert("Anda belum login!");
            }

            if (window.confirm("Apa anda yakin ingin menghapus pesanan ini?")) {
                deleteOrder({
                    variables: {
                        id: id,
                    },
                });
                window.alert("Pesanan terhapus!");
                window.location.reload(false);
            }
        };
    }

    const { updateOrders } = useUpdateOrder();

    function handleUpdate(id, status) {
        return function (e) {
            e.preventDefault();

            if (!isAdmin) {
                return alert("Anda belum login!");
            }

            if (status) {
                updateOrders({
                    variables: {
                        id: id,
                        object: {
                            status: false,
                        },
                    },
                });
            } else {
                updateOrders({
                    variables: {
                        id: id,
                        object: {
                            status: true,
                        },
                    },
                });
            }

            window.alert("Status diperbarui!");
        };
    }

    // ----------------- render -------------------------
    return (
        <div className="bg-gray-100">
            <Header />

            <div className="container px-5">
                <h1 className="text-5xl font-bold text-red-600 flex justify-center mb-8">Daftar Pesanan</h1>

                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <LoadingSVG />}
                {!isError && !isLoading && (
                    <div>
                        <table class="table-fixed">
                            <thead>
                                <tr>
                                    <th class="w-1/3 px-4 py-2">Pesanan</th>
                                    <th class="w-1/6 px-4 py-2">Harga</th>
                                    <th class="w-1/6 px-4 py-2">Waktu Pemesanan</th>
                                    <th class="w-1/6 px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderdatas.map((orderdata) => (
                                    <tr>
                                        <td class="border px-4 py-2">{orderdata.menu_items}</td>
                                        <td class="border px-4 py-2">Rp. {orderdata.total_price}</td>
                                        <td class="border px-4 py-2">{new Date(orderdata.created_at).toLocaleString()}</td>
                                        <td class="border px-4 py-2">
                                            {orderdata.status === true
                                                ? "Sudah terbayar"
                                                : orderdata.status === false
                                                ? "Belum terbayar"
                                                : "Status tidak diketahui"}
                                        </td>

                                        {isAdmin && (
                                            <td>
                                                <button
                                                    className="text-white font-bold bg-green-600 hover:bg-green-800 py-1 px-1 rounded mr-3"
                                                    onClick={handleUpdate(orderdata.id, orderdata.status)}
                                                >
                                                    GANTI STATUS
                                                </button>
                                                <button
                                                    className="text-white font-bold bg-red-600 hover:bg-red-800 py-1 px-1 rounded"
                                                    onClick={handleDelete(orderdata.id)}
                                                >
                                                    HAPUS
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Orders;
