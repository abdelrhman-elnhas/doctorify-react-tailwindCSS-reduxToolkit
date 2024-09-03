import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  isLoading: false,
  success: false,
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch(
    "https://s70fjpw9-8000.uks1.devtunnels.ms/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Login");
  }

  return response.json();
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await fetch(
    "https://s70fjpw9-8000.uks1.devtunnels.ms/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to Register");
  }

  return response.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.success = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.success = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
