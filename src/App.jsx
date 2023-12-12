import './App.css'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [pups, setPups] = useState([])

  useEffect(() => {
    const fetchPups = async () => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      setPups(data.data.players)
      console.log(data.data)

    }
    fetchPups()
  },[])


  return (
    <div>
      <h1>Puppy Bowl</h1>
      <ul>
        {
          pups.map((pup) => {
            return (
              <li key={pup.id}>
                <Link to={`/pups/${pup.id}`}>
                {pup.name}
                </Link>
                </li>
                
            )
          })
        }
      </ul>
    </div>

  )
}

export default App
