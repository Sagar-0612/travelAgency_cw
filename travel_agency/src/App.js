import React, {useState} from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  const [currForm, setCurrForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrForm(formName);
  }
  return (
    <div className="App">
      {
        currForm === "login" ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
