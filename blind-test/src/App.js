import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, PrivateRoute} from 'react-router-dom'

import Home from './components/Home'
import Game from './components/Game'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/game" component={Game} />
        {/*<Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
        <Route path="/profil" component={Profil} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
