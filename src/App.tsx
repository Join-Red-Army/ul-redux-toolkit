import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  
  // получить значение из state
  const count = useAppSelector(state => state.userReducer.count);
  
  // типизированный dispatch
  const dispatch = useAppDispatch();

  // получить функцию action
  const increment = userSlice.actions.increment;


  return (
    <div className="App">
      <header className="App-header">
        
        <h1>{ count }</h1>

        <button 
          onClick={ () => dispatch(increment(10))}
        >
          прибавить
        </button>

      </header>
    </div>
  );
}

export default App;
