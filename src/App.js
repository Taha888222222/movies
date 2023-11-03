
import { useState } from 'react';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import moviesData from './work/Data';
import Movielist from './work/Movieslist';
import Addmovies from './work/Addmovies';

function App() {
  const [movies,setmovises]= useState(moviesData)
  const add = (newmovie) => {
    setmovises([...movies,newmovie])
  }
  return (
    <div className="App">
      <h1 className='gh'>§BEST MOVIES§</h1>
      
       <Movielist movies={movies}/>
       <Addmovies add={add}/>
    </div>
  );
}

export default App;
