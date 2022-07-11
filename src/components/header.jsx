import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//import hooks
import { addAdminData } from "../store/adminDataSlice";

//import assets
import Logo from "../assets/img/Logo Mini.png";

function Header() {
    const [isActive, setActive] = useState(false);

    function toggleHidden() {
        setActive(!isActive);
    }

    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;
    const dispatch = useDispatch();

    function handleLogout() {
        adminData = {
            img: "",
            name: "",
            status: false,
        };
        dispatch(addAdminData(adminData));
        alert("Berhasil logout!");
        window.location.reload(false);
    }

    return (
        <nav class="flex items-center justify-between flex-wrap bg-amber-500 p-6 mb-10">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img alt="logo martabak" src={Logo} class="fill-current h-8 w-8 mr-2" />
                <span class="font-semibold text-xl tracking-tight ">Martabak Ronny Ciracas</span>
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded text-amber-50 border-amber-400 hover:text-white hover:border-white"
                    onClick={toggleHidden}
                >
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={
                    isActive
                        ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                        : "hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                }
            >
                <div class="text-sm lg:flex-grow">
                    <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-amber-50 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-amber-50 hover:text-white mr-4">
                        About
                    </a>
                    <a href="/menu" class="block mt-4 lg:inline-block lg:mt-0 text-amber-50 hover:text-white mr-4">
                        Menu
                    </a>
                    <a href="/post" class="block mt-4 lg:inline-block lg:mt-0 text-amber-50 hover:text-white mr-4">
                        Post
                    </a>
                </div>
                {!isAdmin ? (
                    <div>
                        <a
                            href="/login"
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-amber-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            Login
                        </a>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={handleLogout}
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-amber-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;
