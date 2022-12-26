import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios";


const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const { data } = await axios.get('http://localhost:3005/users');
    // await pause(1000);
    return data;
});
//const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { fetchUsers };