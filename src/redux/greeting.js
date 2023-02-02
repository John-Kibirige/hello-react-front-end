import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ENDPOINT = "http://localhost:3000/api/endpoints/greeting"

const initialState = {
  greeting: {},
  status: 'idle',
};

export const fetchGreeting = createAsyncThunk('hello-rails-greeting', async () => {
  try {
    const response = await axios.get(ENDPOINT);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchGreeting.pending, (state) => {
            const st = state;
            st.status = 'loading'
        })
        .addCase(fetchGreeting.fulfilled, (state, action) => {
            const st = state
            st.status = 'succeeded';
            st.greeting = action.payload
        })
        .addCase(fetchGreeting.rejected, (state, action) => {
            throw new Error(action.error)
        })
    }
})

export default greetingSlice;
