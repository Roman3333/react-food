import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AuthType, Status } from './types';

export const fetchAuth = createAsyncThunk<AuthType>('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchRegister = createAsyncThunk<AuthType>('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);
  return data;
});

const initialState: AuthType = {
  data: null,
  status: Status.LOADING,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = [];
    });

    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = [];
    });

    builder.addCase(fetchRegister.pending, (state, action) => {
      state.status = Status.LOADING;
      state.data = [];
    });

    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.data = [];
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
