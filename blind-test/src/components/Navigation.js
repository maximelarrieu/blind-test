import '../App.css';
import { Provider, useSelector } from 'react-redux'
// import { store } from './store'

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Game from './Game'
import Question from './Question'
import Profile from './Profile'
import Result from './Result'
import Authenticate from './Authenticate'

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector(
      (state) => state.user.isAuthenticated
    );
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

function Navigation() {
  const player = useSelector((state) => state.user.player)
  console.log(player)
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={Authenticate} />
        <Route path="/game" component={Game} />
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
        <Route path="/profile">
            <Profile props={player} />
        </Route>
        <PrivateRoute path="/">
            <Home props={player} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Navigation;
