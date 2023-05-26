import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; // react router  
import NoteState from './context/notes/NoteState';// using context api
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert info="this is an alert form app.js " />
        <div className="container">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>

          </Switch>

        </div>
      </Router>
    </NoteState>
  );
}

export default App;
