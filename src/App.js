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

import { useState } from 'react';

function App() {

  const [alert,setAlert] = useState(null)

  const showAlert = (type, head, message)=>{
    setAlert({
      type:type,
      head:head,
      message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const style = {
    height: "calc(100vh - 3rem)"
  }
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container" style={style} >

          <Switch>

            <Route exact path="/">
              <Home showAlert={showAlert}/>
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
