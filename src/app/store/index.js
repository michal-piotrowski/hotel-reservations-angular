
import HrAxios, { URL } from '../http/HrAxios.js';
import { isEmpty } from 'lodash';
import { slice } from './slices.js';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: slice.reducer
});

