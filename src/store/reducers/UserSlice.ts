import { IUser } from '../../models/IUser'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'


// типизация стейта в этом slice
interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

// дефольный state
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: ''
}

// slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // поле должно остаться, даже если оно пустое
  
  extraReducers: {

    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';            // ошибка обнуляется
      state.users = action.payload;
    },

    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload // сообщение об ошибке
    }

  }

  // предыдущая реализация
  // reducers: {
  //   // сетевой запрос начался
  //   usersFetching(state) {
  //     state.isLoading = true;
  //   },
    
  //   // сетевой запрос выполнен корректно
  //   usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
  //     state.isLoading = false;
  //     state.error = '';            // ошибка обнуляется
  //     state.users = action.payload;
  //   },

  //   // сетевой запрос завершён с ошибкой
  //   usersFetchingError(state, action: PayloadAction<string>) {
  //     state.isLoading = false;
  //     state.error = action.payload // сообщение об ошибке
  //   }
  // }
});


// после создания слайса из него можно вытащить reducer и actionCreator\
export default userSlice.reducer

// export const { increment } = userSlice.actions;
// Чувак в курсе обращается к экшенам через сам slice