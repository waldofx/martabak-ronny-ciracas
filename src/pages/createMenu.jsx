import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { app } from "../base";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import { addFormData } from "../store/formDataSlice";
import useInsertMenu from "../hooks/useInsertMenus";

function CreateMenu() {
    const [formData, setFormData] = useState({
        img: "",
        name: "",
        price: "",
        file: "",
    });

    const dispatch = useDispatch();
    const history = useHistory();
    const { insertMenus } = useInsertMenu();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "img") {
            //get img file data
            console.log("on change img triggered!");
            console.log("files:", e.target.files[0]);
            const file = e.target.files[0];
            setFormData((prev) => {
                return { ...prev, file: file };
            });
        }

        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addFormData(formData));
        console.log("Data submitted: ", formData);

        if (formData.name === "" || formData.price === "" || formData.img === "") {
            alert("Data belum lengkap!");
        } else {
            // send image to firebase
            const file = formData.file;
            const storageRef = app.storage().ref();
            console.log("tetete", uuidv4());
            const fileRef = storageRef.child(`${file.name}${uuidv4()}`);
            console.log("file = ", file);
            console.log("storageRef = ", storageRef);
            console.log("fileRef = ", fileRef);
            fileRef.put(file).then((e) => {
                console.log("Uploaded a file");
                console.log("didalam e = ", e);
                e.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("File available at", downloadURL);
                    // insert data to hasura
                    insertMenus({
                        variables: {
                            object: {
                                img: downloadURL,
                                name: formData.name,
                                price: formData.price,
                            },
                        },
                    });
                    console.log("Data berhasil dikirim ke database!");
                    alert("Data berhasil dikirim ke database!");
                    history.push("/menu");
                });
            });
        }
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
                                placeholder="Martabak"
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
                                placeholder="0"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
                                Gambar
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="img"
                                name="img"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Tambahkan Menu
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default CreateMenu;
