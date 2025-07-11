import { useState } from 'react';
import './App.css';
import Header from './header/header.jsx';
import Movies from './movies/movies.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="CinemaSearch"/>
    <main>
    <Movies />
    </main>
    </div>
  )
}

export default App
