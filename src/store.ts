import { configureStore } from '@reduxjs/toolkit';
import baseReducer from '@/model/base';

export default configureStore({
  reducer: {
    base: baseReducer,
  },
})