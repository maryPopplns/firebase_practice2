import './App.css';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import app from './firebase-config';
import Login from './components/Login';
import Logout from './components/Logout';
import Form from './components/Form';

function App() {
  const [login, setLogin] = useState(true);

  function onClickHandler() {
    setLogin((prevState) => !prevState);
  }

  return (
    <div id='input_container'>
      {login ? (
        <Login onClick={onClickHandler} />
      ) : (
        <Logout onClick={onClickHandler} />
      )}
      <Form />
    </div>
  );
}

export default App;
