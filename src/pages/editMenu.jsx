import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import { addFormData } from "../store/formDataSlice";
import useUpdateMenu from "../hooks/useUpdateMenus";

const GetMenuByID = gql`
    query MyQuery($id: Int!) {
        menus(where: { id: { _eq: $id } }) {
            id
            img
            name
            price
        }
    }
`;

function EditMenu() {
    //initial detail
    const { id } = useParams();
    const { data } = useQuery(GetMenuByID, {
        variables: { id },
    });

    const [formData, setFormData] = useState({
        img: "",
        name: "",
        price: "",
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const { updateMenus } = useUpdateMenu();

    function handleEdit(e) {
        console.log("Data sekarang: ", data.menus[0]);
        setFormData({
            ...formData,
            img: data.menus[0].img,
            name: data.menus[0].name,
            price: data.menus[0].price,
        });
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addFormData(formData));
        console.log("Data submitted: ", formData);

        updateMenus({
            variables: {
                id: id,
                object: {
                    img: formData.img,
                    name: formData.name,
                    price: formData.price,
                },
            },
        });
        alert("Data berhasil dikirim ke database!");
        history.push("/menu");
    }

    return (
        <div>
            <Header />
            <div className="container flex items-center justify-center mb-16">
                <form class="w-full max-w-sm" onSubmit={handleSubmit} action="">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                                Nama
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="name"
                                name="name"
                                type="text"
                                placeholder={formData.name}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="price">
                                Harga
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="price"
                                name="price"
                                type="number"
                                placeholder={formData.price}
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
                                Link Gambar
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="img"
                                name="img"
                                type="text"
                                placeholder={formData.img}
                                value={formData.img}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={handleEdit}
                            >
                                Data sekarang
                            </button>
                        </div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Edit Menu
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default EditMenu;
