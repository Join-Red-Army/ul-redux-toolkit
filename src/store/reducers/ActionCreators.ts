import axios from 'axios'
import type { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async(_, thunkAPI) => {

    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return responce.data;
    } 
    
    catch {
      return thunkAPI.rejectWithValue("Не удалось осуществить запрос")
    }

  }
);


// предыдущая реализация без Thunk
// import { userSlice } from './UserSlice'
// import type { AppDispatch } from '../store'

// Чтобы пользоваться таким функционалом, не надо возвращать из action результат, 
// а надо вернуть другую функцию, которая аргументом принимает dispatch. 
// Уже из этой функции будем производить какие-то асинхронные действия.

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     // подсветить индикатор загрузки
//     dispatch(userSlice.actions.usersFetching());
//     // выполнить сетевой запрос
//     const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     // если ошибка всё ещё не произошла - всё завершилось корректно
//     dispatch(userSlice.actions.usersFetchingSuccess(responce.data));
    
//   } catch (e) {
//       const error = e as Error;
//       dispatch(userSlice.actions.usersFetchingError(error.message))
//   }
// }