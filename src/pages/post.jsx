import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";
import LoadingSVG from "../components/loadingsvg";

//import hooks
import useGetPostsByNewest from "../hooks/useGetPostsByNewest";
import useDeletePosts from "../hooks/useDeletePosts";

function Post() {
    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;

    // ----------------- custom hook graphql -------------------------
    const { dataByNewest, loadingDataByNewest, errorDataByNewest } = useGetPostsByNewest();

    //setposts at the start of render using useeffect
    const [postdatas, setPosts] = useState([]);
    useEffect(() => {
        if (dataByNewest) {
            setPosts(dataByNewest.posts);
        }
    }, [dataByNewest]);

    //error + loading
    const isError = errorDataByNewest;
    const isLoading = loadingDataByNewest;

    //handle edit & delete
    const { deletePosts } = useDeletePosts();
    function handleDelete(id) {
        return function (e) {
            if (window.confirm("Are you sure you want to delete this post?")) {
                deletePosts({
                    variables: {
                        id: id,
                    },
                });
                window.alert("Post deleted!");
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
                        href="/post/create"
                        class="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                        Buat post baru!
                    </a>
                )}
            </div>

            <div className="container mx-5">
                <h1 className="text-5xl font-bold text-red-600 flex justify-center mb-8">Kabar Terbaru</h1>

                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <LoadingSVG />}
                {!isError && !isLoading && (
                    <div>
                        <div className="">
                            <div className="max-w-2xl mx-auto pb-16 pt-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-10">
                                    {postdatas.map((postdata) => (
                                        <div className="group w-full border-solid border-2 shadow-md px-6 pb-6">
                                            <h3 className="mt-4 text-2xl font-medium font-bold text-gray-700">
                                                {postdata.title}
                                            </h3>
                                            <p className="mt-1 text-m text-gray-900 break-words">{postdata.content}</p>
                                            {isAdmin && (
                                                <div className="mt-4">
                                                    <button
                                                        className="text-white font-bold bg-red-600 hover:bg-red-800 py-2 px-2 rounded mr-5"
                                                        onClick={handleDelete(postdata.id)}
                                                    >
                                                        DELETE
                                                    </button>
                                                    <a
                                                        href={`/post/edit/${postdata.id}`}
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

            <Footer />
        </div>
    );
}

export default Post;
