import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    img: "",
    name: "",
    status: false,
};

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        adminData: initialValue,
    },
    reducers: {
        addAdminData: (state, action) => {
            state.adminData = action.payload;
        },
    },
});

export const { addAdminData } = adminSlice.actions;
export default adminSlice;
