import { useState } from 'react';
import './App.css';
import { Routerr } from './Routerr';
import { Login } from './pages/Login';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Routerr/>
    </div>
  );
}

export default App;
