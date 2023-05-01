import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import axios from 'axios';

// initial state
const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  id: '',
};

// main function to call API to login
export const loadUser = createAsyncThunk(
  'profile/loadUser',
  // promise
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const res = await axios.post(
          'http://localhost:3001/api/v1/user/profile',
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('profileSlice response:', res);
        const firstName = res.data.body.firstName;
        const lastName = res.data.body.lastName;
        // token location : data.body.token(info in Swagger)
        //   const token = res.data.body.token;
        //   localStorage.setItem('token', token);
        // will be saved in the 'action.payload'
        return { firstName, lastName };
      }
    } catch (error) {
      const errorMsg = error.response.data.message;
      console.log('profileSlice errormsg:', errorMsg);
      return rejectWithValue(errorMsg);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},

  //   extra reducers to handle http request
  extraReducers: (builder) => {
    // when loginUser function result is 'pending'
    builder.addCase(loadUser.pending, (state, action) => {
      return { ...state, profileStatus: 'pending' };
    });
    // when loginUser function result is 'fullfilled'
    builder.addCase(loadUser.fulfilled, (state, action) => {
      console.log('profileSlice action.payload:', action.payload);
      if (action.payload) {
        return {
          ...state,
          //   token: action.payload,
          //   loginStatus: 'success',
          firstName: action.payload.firstName,
          profileStatus: 'success',
        };
      } else return state;
    });
    // when loginUser function result is 'rejected'
    builder.addCase(loadUser.rejected, (state, action) => {
      return {
        ...state,
        profileStatus: 'rejected',
        // loginError: action.payload,
      };
    });
  },
});

export default profileSlice.reducer;
