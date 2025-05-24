import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cases: null,
  error: null,
  isLoading: false,
  success: false,
};

export const getCases = createAsyncThunk(
  "cases/best-cases",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://darkgray-crow-946145.hostingersite.com/api/blogs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Failed to Fetch Best Cases");
      }
      const data = await response.json();

      console.log("data", data.data);
      return data;
    } catch (err) {
      console.log("rejectWithValue");
      return rejectWithValue(err.message);
    }
  }
);

const aboutSlice = createSlice({
  name: "cases",
  initialState,
  extraReducers: (builder) => {
    // Best Cases
    builder
      .addCase(getCases.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getCases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cases = action.payload.data;
        console.log("payload", state.cases);
        state.error = null;
        state.success = true;
      })
      .addCase(getCases.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.success = false;
      });
  },
});

export default aboutSlice.reducer;
