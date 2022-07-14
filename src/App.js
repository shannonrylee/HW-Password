import { useState } from 'react'
import Validator from "./components/Validator.jsx"

const App = () => {
  const [username, setUsername] = useState('')
  const handleChange = (event) => {
    event.preventDefault()
    setUsername(event.target.value)
   }
   const [password, setPassword] = useState('')
   const handleChange1= (event) => {
    event.preventDefault()
    setPassword(event.target.value)
   }
   const [passwordConfirm, setPasswordConfirm] = useState('')
   const handleChange2= (event) => {
    event.preventDefault()
    setPasswordConfirm(event.target.value)
   }
   let [valid, setValid] = useState('')
   const handleChange3= (event) => {
    event.preventDefault()
    setValid(event.target.value)
   }


const validPassword = () => {
  if (password === passwordConfirm) {
    valid = true
    alert('Welcome!')
  } else {
   valid = false
   alert('Password does not match!')
  }
}
  
  return (
    <Validator handleChange={handleChange} handleChange1={handleChange1} handleChange2={handleChange2} handleChange3={handleChange3} username={username} password={password}passwordConfirm={passwordConfirm} valid={valid} validPassword={validPassword}/>
  )
}

export default App
