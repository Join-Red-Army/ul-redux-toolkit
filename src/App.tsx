import './App.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {

  // // получить значение из state
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  
  // // типизированный dispatch
  // const dispatch = useAppDispatch();

  // // на старте выполнить сетевой запрос
  // useEffect(
  //   () => { dispatch(fetchUsers())}, 
  //   []
  // )

  return (
    <div className="App">
      <header className="App-header">

        <PostContainer />
        
        {/* <div>
          <pre>
            { isLoading ? <h1>Идёт загрузка</h1> : null }
            { error ? <h1>{ error }</h1> : null }
            { JSON.stringify(users, null, 2) }
          </pre>
        </div> */}

      </header>
    </div>
  );
}

export default App;
