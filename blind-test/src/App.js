import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, PrivateRoute} from 'react-router-dom'

import Home from './components/Home'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={Home} />
        {/* <Route path="/game" component={Game} />
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
        <Route path="/profil" component={Profil} /> */}
      </Switch>
    </Router>
  );
}

export default App;
