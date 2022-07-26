import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import useUpdatePost from "../hooks/useUpdatePosts";

const GetPostByID = gql`
    query MyQuery($id: Int!) {
        posts(where: { id: { _eq: $id } }) {
            id
            title
            content
        }
    }
`;

function EditPost() {
    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;

    //initial detail
    const { id } = useParams();
    const { data } = useQuery(GetPostByID, {
        variables: { id },
    });

    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const history = useHistory();

    const { updatePosts } = useUpdatePost();

    function handleEdit(e) {
        console.log("Data sekarang: ", data.posts[0]);
        setFormData({
            ...formData,
            title: data.posts[0].title,
            content: data.posts[0].content,
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
        console.log("Data submitted: ", formData);

        if (!isAdmin) {
            return alert("Anda belum login!");
        }

        if (formData.title === "" || formData.content === "") {
            alert("Data belum lengkap!");
        } else {
            updatePosts({
                variables: {
                    id: id,
                    object: {
                        title: formData.title,
                        content: formData.content,
                    },
                },
            });
            alert("Data berhasil dikirim ke database!");
            history.push("/post");
        }
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
                                placeholder={formData.title}
                                value={formData.title}
                                onChange={handleChange}
                                required
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
                            <textarea
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-24"
                                id="content"
                                name="content"
                                type="text"
                                placeholder={formData.content}
                                value={formData.content}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={handleEdit}
                            >
                                Data sekarang
                            </button>
                        </div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Edit Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default EditPost;
