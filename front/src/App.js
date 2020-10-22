import React from 'react';
import ContactState from './context/contacts/ContactState';
import VisitState from './context/visits/VisitState';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Visits from './components/visits/Visits';

function App() {
  return (
    <ContactState>
      <VisitState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/visits' component={Visits} />
                <Route exact path='/contacts' component={Contacts} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </VisitState>
    </ContactState>
  );
}

export default App;
