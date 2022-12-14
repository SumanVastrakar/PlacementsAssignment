import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";

export const login = createAsyncThunk("auth/login", async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {

        const response = await api.signIn(formValue);
        toast.success("Login Successfully");
        alert("user Logged In successfully")
        console.log("success")
        navigate("/");
        return response.data;

    } catch (err) {
        alert(err.response.data.message);
        // console.log(err.response.data.message)
        // return rejectWithValue(err.response.data);
        console.log(err)
    }
})
export const register = createAsyncThunk("auth/register", async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {

        const response = await api.signUp(formValue);
        toast.success("Login Successfully");
        alert("User Registered In successfully")
        console.log("success")
        navigate("/");
        return response.data;

    } catch (err) {
        alert(err.response.data.message);
        // console.log(err.response.data.message)
        // return rejectWithValue(err.response.data);
        console.log(err)
    }
})
export const product = createAsyncThunk("auth/postproduct", async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {

        const response = await api.product(formValue);
        toast.success("Product Added Successfully");
        alert("Product added successfully")
      
        navigate("/");
        return response.data;

    } catch (err) {
        alert(err.response.data.message);
        // console.log(err.response.data.message)
        // return rejectWithValue(err.response.data);
        console.log(err)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: "",
        loading: false
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },
        [register.pending]: (state, action) => {
            state.loading = true
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
            state.user = action.payload
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        }
    }
});



export default authSlice.reducer;
