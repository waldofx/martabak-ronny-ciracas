import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import { addAdminData } from "../store/adminDataSlice";

// const GetAdminByLogin = gql`
//     query MyQuery($_un: String = "", $_pw: String = "") {
//         admin(where: { password: { _eq: $_pw }, username: { _eq: $_un } }) {
//             id
//             password
//             username
//         }
//     }
// `;

const GetAdminByID = gql`
    query MyQuery($id: Int!) {
        admin(where: { id: { _eq: $id } }) {
            id
            password
            username
        }
    }
`;

function Login() {
    //initial detail
    const { data, loading, error } = useQuery(GetAdminByID, {
        variables: { id: 1 },
    });

    const [adminData, setAdminData] = useState({
        username: "",
        password: "",
        status: true,
    });

    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setAdminData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(loading, error);
        console.log(data.admin[0]);

        if (data.admin[0].username === adminData.username && data.admin[0].password === adminData.password) {
            dispatch(addAdminData(adminData));
            console.log("Data submitted: ", adminData);
            alert("Berhasil login!");
            history.goBack();
        } else {
            console.log("Data submitted: ", adminData);
            alert("Gagal login!");
        }
    }

    return (
        <div>
            <Header />
            <div className="container flex items-center justify-center my-20">
                <form class="w-full max-w-sm" onSubmit={handleSubmit} action="">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="username">
                                Username
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="admin"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
                                Password
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="******************"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
