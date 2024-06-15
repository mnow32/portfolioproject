import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './components/AboutComponent';
import Projects from './components/ProjectsComponent';
import Contact from './components/ContactComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useCookies } from 'react-cookie';
import CookieConsent from './components/CookieConsent';

function App() {
  const [cookies] = useCookies(["cookieConsent"])
  return (
    console.log(cookies.cookieConsent),
    <div className="App">
      
      
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>

      {cookies.cookieConsent && <CookieConsent/>}
      
      
      
    </div>
  );
}

export default App;
