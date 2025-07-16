import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// action = {type: "", payload: "?"}
const defaultMovies = {
  movies: [],
}
const reducer = (state = defaultMovies, action) => {
  switch(action.type)
  {
    case "getMovies":
      if (state.movies.length==0){
        console.log('Делаю запрос');
        return {...state, movies: action.payload};
      }
      else{
        console.log('Оно уже заполнено ->', state.movies)
      }
    default:
      return state;
  }
}
const store = createStore(reducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
