import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      name: '',
      age: 0,
      email: '',
    },
  },
  reducers: {
    login: (state, action) => {
      console.log(state, action);
      state.value = action.payload;
      console.log(state, action);
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
