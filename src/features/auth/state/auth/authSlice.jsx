import { createSlice } from "@reduxjs/toolkit";
import { loginEmployeeAction, currentLoggedInEmployeeAction } from "./authActions";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployeeAction.pending, (state, action) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        console.log("Login Employee pending....");
      })
      .addCase(loginEmployeeAction.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        console.log("Long Emplyee rejected....");
      })
      .addCase(loginEmployeeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.employee = action.payload;
        console.log("Long Emplyee fulfilled!....");
      })
      .addCase(currentLoggedInEmployeeAction.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        console.log("Registering Employee.....");
      })

      .addCase(currentLoggedInEmployeeAction.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        console.log("Failed to Registere Employee.....");
      })
      .addCase(currentLoggedInEmployeeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.employee = action.payload;
        console.log("Employe has been Registered Successfully.....");
      });
  },
});

export let { addEmployee, removeEmployee } = authReducer.actions;

export default authReducer.reducer;
