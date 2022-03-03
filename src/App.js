
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 const [mode, setmode] = useState('light')
 const [alert, setAlert] = useState(null)
 const showAlert =(message, type)=>{
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);

 }
 const [btnmode, setbtnmode] = useState('success')
 const [darkMode, setDarkMode] = useState('Enable Dark Mode')
 const toggleMode = ()=>{
   if(mode === 'light')
   {
     setmode('dark');
     setDarkMode('Disable Dark Mode');
     document.body.style.backgroundColor = '#3f2474';
     setbtnmode('dark');
     showAlert("Dark mode enabled","success");

   }
   else{
    setmode('light');
    setDarkMode('Enable Dark Mode');
    document.body.style.backgroundColor = 'white';
    setbtnmode('success');
    showAlert('Light mode enabled','success');
   }
 }
  return (
    <>
    <Router>
   <Navbar title="Prashant" mode={mode} toggleMode={toggleMode} darkMode={darkMode}   />
   <Alert alert={alert}></Alert>
   
   <div className="container">
     
   <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm mode={mode} btnmode={btnmode} showAlert={showAlert} />
          </Route>
  </Switch>
   </div>
   </Router>


   
    </>
  );
}

export default App;
