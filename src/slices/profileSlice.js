import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import axios from 'axios';

const isUserLoaded = !!localStorage.getItem('token');

// initial state
const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  id: '',
  profileStatus: isUserLoaded,
  profileUpdated: null,
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
          // the value that user send to DB by API
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // console.log('profileSlice response:', res);

        const firstName = res.data.body.firstName;
        const lastName = res.data.body.lastName;

        // will be saved in the 'action.payload'
        // the data that is received by API -> to display on profile
        return { firstName, lastName };
      }
    } catch (error) {
      const errorMsg = error.response.data.message;
      // console.log('profileSlice errormsg:', errorMsg);
      return rejectWithValue(errorMsg);
    }
  }
);

export const editName = createAsyncThunk(
  'profileEdit/editName',
  // promise
  async (profile, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const res = await axios.put(
          'http://localhost:3001/api/v1/user/profile',
          {
            // the value that user send to DB by API
            // request body
            firstName: profile.firstName,
            lastName: profile.lastName,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('profileEdit response:', res);
        console.log('profile edit slice status:', res.data.status);
        console.log('profile edit slice message:', res.data.message);
        const firstName = res.data.body.firstName;
        const lastName = res.data.body.lastName;
        return { firstName, lastName };
      }
    } catch (error) {
      console.log('error:', error);
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

  // extra reducers to handle http request with promise
  extraReducers: (builder) => {
    // when loadUser function result is 'pending'
    builder.addCase(loadUser.pending, (state, action) => {
      return { ...state, profileStatus: 'pending' };
    });

    // when loadUser function result is 'fullfilled'
    builder.addCase(loadUser.fulfilled, (state, action) => {
      // console.log('profileSlice action.payload:', action.payload);
      if (action.payload) {
        return {
          ...state,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          profileStatus: 'success',
        };
      } else return state;
    });

    // when loadUser function result is 'rejected'
    builder.addCase(loadUser.rejected, (state, action) => {
      return {
        ...state,
        profileStatus: 'rejected',
      };
    });

    builder.addCase(editName.pending, (state, action) => {
      return { ...state, profileUpdated: 'pending' };
    });

    // when loadUser function result is 'fullfilled'
    builder.addCase(editName.fulfilled, (state, action) => {
      console.log('profileUpdateSlice action.payload:', action.payload);
      if (action.payload) {
        return {
          ...state,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          profileUpdated: 'success',
        };
      } else return state;
    });

    // when loadUser function result is 'rejected'
    builder.addCase(editName.rejected, (state, action) => {
      return {
        ...state,
        profileUpdated: 'rejected',
      };
    });
  },
});

export default profileSlice.reducer;
