import './App.css';
import { Provider, useSelector } from 'react-redux'
import { store } from './store'

import { BrowserRouter as Router, Route, Switch, PrivateRoute} from 'react-router-dom'

import Navigation from './components/Navigation'

function App() {
  // const player = useSelector((state) => state.user.player)
  // console.log(player)
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
