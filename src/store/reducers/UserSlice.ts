import { IUser } from '../../models/IUser'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


// типизация стейта в этом slice
interface UserState {
  users: IUser[]
  isLoading: false
  error: string
  count: number
}

// дефольный state
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0
}

// slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }

  }
});


// после создания слайса из него можно вытащить reducer и actionCreator\
export default userSlice.reducer

// export const { increment } = userSlice.actions;
// Чувак в курсе обращается к экшенам через сам slice