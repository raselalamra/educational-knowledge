import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import Founder from './componants/Founders/Founder';
import NotFound from './componants/NotFound/NotFound';
import Footer from './componants/Footer/Footer';
import Service from './componants/Service/Service';
import Home from './componants/Home/Home';
import Header from './componants/Header/Header';
import About from './componants/About/About';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about/:id'>
          <About></About>
          </Route>
          <Route exact path='/about'>
           <About></About>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route exact path='/founders'>
            <Founder></Founder>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
 
export default App;
 
 
 

