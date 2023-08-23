import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: {} },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
