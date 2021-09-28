import { Route, Switch } from 'react-router-dom';
import About from './components/shared/About';
import Home from './components/shared/Home';
import Todos from './components/todos/Todos';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    {/* <MainNavbar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todos" component={Todos} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;