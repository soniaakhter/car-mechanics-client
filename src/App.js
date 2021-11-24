import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router >
          <Header />
          <Switch >
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/home"> <Home /> </Route>
            <Route exact path="/login"> <Login /> </Route>
            <PrivateRoute exact path="/booking/:serviceId"> <Booking /> </PrivateRoute>
            <Route exact path="/addService"><AddService /></Route>
            <Route exact path="/manageServices"><ManageServices /></Route>
            <Route path="*"> <NotFound /> </Route>


          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
