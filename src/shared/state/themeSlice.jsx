import { createSlice } from "@reduxjs/toolkit";

let themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("theme") || "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export let { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
