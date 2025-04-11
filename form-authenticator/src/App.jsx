import './App.css';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import UserPassHead from './components/UserPassHead';
import {useState} from 'react';

function App() {
  const [token, setToken] = useState(null);
  const [ displayUser, setDisplayUser ] = useState("");


  return (
    <>
          <UserPassHead userName={displayUser}/>
          <div className="innerText">
          <SignUpForm setToken={setToken}
                                  setDisplayUser={setDisplayUser}
                                   />
          <Authenticate token={token}/>
          </div>
     
    </>
  )
}

export default App
