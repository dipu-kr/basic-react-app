 import './App.css';
 import {Route, Switch} from 'react-router';
 import Home from './Home';
 import Aboutpage from './Pages/Aboutpage';
 import Contactpage from './Pages/Contactpage';
 import Servicespage from './Pages/Servicespage';
 import Errorpage from './Pages/Errorpage';
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/aboutpage" component={Aboutpage}></Route>
      <Route path="/servicespage" component={Servicespage}></Route>
      <Route path="/contactpage" component={Contactpage}></Route>
      <Route component={Errorpage}></Route>
    </Switch>
    </>
  );
}

export default App;
