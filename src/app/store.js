import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // store에 counterSlice에 저장한 reducer함수들을 불러오는 역할을 함
    // counter: counterReducer,
  },
});
