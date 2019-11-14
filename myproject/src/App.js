import React from 'react';
//import './App.css';
//import Authorize from './components/pages/auth';
//import Events from './components/pages/events';
//import Bookings from './components/pages/bookings';
//import {BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
//import Mainnavigation from './components/navigation/mainnavigation';
// import Receivejson from './components/pages/receivejson';
import Customerform from './components/pages/events';

class App extends React.Component
{
  render()
  {
    return(<div>
      {/* <BrowserRouter>
        <React.Fragment>
        <Mainnavigation/>
        <main className="main-content">
          <Switch>
            <Redirect from="/" to="/auth" exact/>       
            <Route path="/auth" component={Authorize}/>
            <Route path="/events" component={Events}/>
            <Route path="/bookings" component={Bookings}/>
       
          </Switch>
          </main>
          </React.Fragment>
        </BrowserRouter>
    
     
      <Receivejson />  */}
      <Customerform />
    </div>)
  }
}

export default App;
