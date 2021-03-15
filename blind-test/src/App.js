import "./App.css";

import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import { launchApp } from "./effects/appEffects";


import { BrowserRouter as Router, Route, Switch, PrivateRoute} from 'react-router-dom'

import Navigation from './components/Navigation'

function App() {
  // const isLoading = useSelector((state) => state.app.isLoading)
  // const isAuthenticated = useSelector((state) => state.app.user !== null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchApp());
  }, []);

  return (
    <Navigation />
  );
}


const MyProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default MyProvider


