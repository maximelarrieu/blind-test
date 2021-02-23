import './App.css';

import { BrowserRouter as Router, Route, Switch, PrivateRoute} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Game from './components/Game'
import Question from './components/Question'
import Profile from './components/Profile'
import Result from './components/Result'
import Authenticate from './components/Authenticate'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={Authenticate} />
        <Route path="/game" component={Game} />
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
