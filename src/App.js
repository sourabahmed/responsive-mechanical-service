
import './App.css';
import Banner from './components/Banner/Banner';
import Experts from './components/Experts/Experts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Services></Services>
              <Experts></Experts>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Banner></Banner>
              <Services></Services>
              <Experts></Experts>
              <Footer></Footer>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="/booking/:serviceid">
              <Booking></Booking>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
