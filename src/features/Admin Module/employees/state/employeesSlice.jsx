import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: null,
        isLoading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees = action.payload;
            console.log("Employees added!")
        }
    }
})