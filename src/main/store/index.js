import { configureStore } from '@reduxjs/toolkit';
import AuthSlices from 'library/common/slices/AuthSlices';

const reducer = {
    auth: AuthSlices
  }

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;