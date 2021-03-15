import {React, useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {signup} from '../firebase'
import {appActions} from "../actions/appActions"
import { Redirect } from 'react-router-dom'

import { Input, TextField, Button } from '@material-ui/core'

const RegisterComponent = () => {
  // const [values, setValues] = useState(initialValues)
    const [setPlayerName, playerName] = useState('')
    const [setEmail, email] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState({
      email: "",
      password: "",
      playerName: ""
    })

    const dispatch = useDispatch();


  const handleInputChange = (event) => {
    const value = event.target.value
    setState({
      ...state, 
      [event.target.name]: value,
    })
  }

   const handleSubmit = (event) => {
      event.preventDefault();
      // dispatch({ type: appActions.APP_IS_LOADING });
      signup(
        state.email,
        state.password,
        state.playerName,
        dispatch,
        )
    }

    return(
        <div>
            <h1>oui</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="standard-basic" label="Standard" name="playername" value={state.playerName} onChange={handleInputChange} />
              <TextField id="filled-basic" label="Filled" variant="filled" name="email" value={state.email} onChange={handleInputChange}/>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" name="password" value={state.password} onChange={handleInputChange}/>
              <Button type="submit" >TEST</Button>
            </form>
        </div>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     playername: state.playername
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//   }
// }

// const Register = connect(null, null)(RegisterComponent)
export default RegisterComponent