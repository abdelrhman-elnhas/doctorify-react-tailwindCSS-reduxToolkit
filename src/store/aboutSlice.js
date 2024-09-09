import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "@utils/apiRequest";

const initialState = {
  cases: null,
  error: null,
  isLoading: false,
  success: false,
};

export const getCases = createAsyncThunk(
  "cases/best-cases",
  async (_, { dispatch, getState }) => {
    try {
      const response = await apiRequest(
        "https://darkgray-crow-946145.hostingersite.com/api/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        dispatch,
        getState
      );
      if (!response.ok) {
        const err = response.json();
        throw new Error(err.message || "Failed to Fetch Best Cases");
      }
      return response.json();
    } catch (err) {
      throw new Error(err.message);
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
        state.cases = action.payload.cases;
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
