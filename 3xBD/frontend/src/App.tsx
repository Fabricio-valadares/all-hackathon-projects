import './Style.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Spend from './pages/spend';
import Dashboard from './pages/dashbord';
import CreateAccount from './pages/create-account';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Dashboard}  exact />
        <Route path='/gastos' component={Spend} />
        <Route path='/criarconta' component={CreateAccount} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>

  )
}export default App;