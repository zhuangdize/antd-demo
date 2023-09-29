import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from './type';

export interface BaseState {
  user: UserInfo | null;
}

const defaultState: BaseState = {
  user: null,
};

export const counterSlice = createSlice({
  name: 'base',
  initialState: defaultState,
  reducers: {
    updateUserInfo: (state: BaseState, { payload }: { payload: Partial<BaseState['user']> }) => {
      state.user = {
        ...state.user,
        ...payload,
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const {  updateUserInfo } = counterSlice.actions

export default counterSlice.reducer