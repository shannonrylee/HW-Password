import '../styles/Validator.css'

const Validator = (props) => {
  
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username"
        onChange={props.handleChange} value={props.username}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={props.handleChange1} value={props.password}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={props.handleChange2} value={props.confirmPassword}/>
        <label htmlFor="passwordConfirm">Confirm password</label>
        
        <button type="submit" onClick={props.validPassword} onChange={props.handleChange3}value={props.valid}>Sign Up</button>
        <p>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
