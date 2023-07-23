// Чтобы пользоваться таким функционалом, не надо возвращать из action результат, 
// а надо вернуть другую функцию, которая аргументом принимает dispatch. 
// Уже из этой функции будем производить какие-то асинхронные действия.

import axios from 'axios'
import { userSlice } from './UserSlice'
import type { AppDispatch } from '../store'
import type { IUser } from '../../models/IUser'


export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    // подсветить индикатор загрузки
    dispatch(userSlice.actions.usersFetching());
    // выполнить сетевой запрос
    const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    // если ошибка всё ещё не произошла - всё завершилось корректно
    dispatch(userSlice.actions.usersFetchingSuccess(responce.data));
    
  } catch (e) {
      const error = e as Error;
      dispatch(userSlice.actions.usersFetchingError(error.message))
  }
}