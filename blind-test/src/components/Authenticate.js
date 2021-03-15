import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../firebase";
import {appActions} from "../actions/appActions"
import { Input, TextField, Button } from '@material-ui/core'


const Authentication = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    // playerName: ""
  })

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
    console.log(state.email)
    console.log(state.password)
    // console.log(state.playerName)
    signin(
      state.email,
      state.password,
      // state.playerName,
      dispatch,
      )

  }

  return (
    <div>
    <h1>oui</h1>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      {/* <TextField id="standard-basic" label="Standard" name="playername" value={state.playerName} onChange={handleInputChange} /> */}
      <TextField id="filled-basic" label="Filled" variant="filled" name="email" value={state.email} onChange={handleInputChange}/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" name="password" value={state.password} onChange={handleInputChange}/>
      <Button type="submit">TEST</Button>
    </form>
  </div>
  );
};

export default Authentication;