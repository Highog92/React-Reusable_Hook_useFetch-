import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './Hooks/UseFetch/UseFetch'

function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const url, setUrl = useState('https://jsonplaceholder.typicode.com/todos/1')
  const { data, isPending, error } = useFetch(url);


  return (
    <>
      <div className="App">
        <h1>useFetch Hook</h1>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && data.map((name) => <p key={name.id}>{name.name}</p>)}
      </div>
    </>
  )
}

export default App
