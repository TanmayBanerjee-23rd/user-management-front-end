import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://randomuser.me/api/?results=50");
  return res.json(); // returns { results: [...] }
});

export interface IUsersReduxState {
  list: any[];
  status: string;
}

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle" } as IUsersReduxState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload.results;
      state.status = "success";
    });
  },
});

export const selectUsers = (state: RootState) =>
  state.users as IUsersReduxState;
export default userSlice.reducer;
