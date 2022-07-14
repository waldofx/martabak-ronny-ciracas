import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import { addFormData } from "../store/formDataSlice";
import useInsertPost from "../hooks/useInsertPosts";

function CreatePost() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;

    const dispatch = useDispatch();
    const history = useHistory();
    const { insertPosts } = useInsertPost();

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

        insertPosts({
            variables: {
                object: {
                    created_at: date,
                    title: formData.title,
                    content: formData.content,
                },
            },
        });

        alert("Data berhasil dikirim ke database!");
        history.push("/post");
    }

    return (
        <div>
            <Header />
            <div className="container flex items-center justify-center mb-16">
                <form class="w-full max-w-sm" onSubmit={handleSubmit} action="">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
                                Judul
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Judul"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="content">
                                Isi
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-24"
                                id="content"
                                name="content"
                                type="text"
                                placeholder="Isi"
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
                                Tambahkan Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default CreatePost;
