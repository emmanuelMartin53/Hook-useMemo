import { useState, useEffect,useMemo } from 'react'
import axios from 'axios'
import Profile from './components/Profile'
import './App.css'

function App() {


  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({})
  const [dark, setDark] = useState(false)

  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((response) => {
        setProfile(response.data)

    })
    .catch((error) => {
      console.log(error)
    })

  }, [count])


  const memoizeValue = useMemo(() => {
    console.log("Je suis dans isOverTen")
    return count > 10
  }, [count])

  console.log(memoizeValue)


  const goDark = () => {
    setDark(!dark)

    if (!dark) {
      document.body.classList.add("bg-secondary")
    } else {
      document.body.classList.remove("bg-secondary")
    }
  }

  const classButtonTheme = dark ? "btn-light" : "btn-dark"
  const textButtonTheme = dark ? "Mode clair" : "Mode sombre"

  return (
   <div className="container">
    <h1 className="text-center">useMemo()</h1>

    {
      memoizeValue && <div className="alert alert-danger" role="alert">STOP!!!</div>
    }

    <button className="btn btn-info m-3 text-white" onClick={() => setCount(count + 1)}>Increment {count}</button>

    <button className={`btn ${classButtonTheme} m-3 float-right`} onClick={goDark}>{textButtonTheme}</button>

    <Profile count={count} profile={profile}/>

   </div>
  )
}

export default App
