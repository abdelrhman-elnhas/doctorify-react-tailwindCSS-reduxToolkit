import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "@utils/apiRequest";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoading: false,
  success: false,
};

export const getProfile = createAsyncThunk(
  "user/user-profile",
  async (_, { dispatch, getState }) => {
    try {
      const response = await apiRequest(
        "https://darkgray-crow-946145.hostingersite.com/api/auth/user-profile",
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
        throw new Error(err.message || "Failed to Logout");
      }
      return response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // User Profile
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        console.log(action.payload.user);
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.error = null;
        state.success = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
