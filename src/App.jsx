import React from 'react'
import './App.css';
import {auth} from './firebase/init'
import { createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged   } from "firebase/auth";
function App() {

  const[user, setUser] = React.useState({})
  const[loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user);
      if(user){
        setUser(user)
      }
    }) 
  }, []);

  function register(){
    console.log('click')
    createUserWithEmailAndPassword(auth, "email@gmail.com", "password")
    .then((userCredential) => {
        console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  function login(){
    signInWithEmailAndPassword(auth, "email@gmail.com", "password")
    .then(({ user }) => {
      console.log({user})
      setUser({ user })
      })
      .catch((error) => {
        
        console.log(error)
      })

  }
  function logout(){
    signOut(auth)
    setUser({})

  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>logout</button>
      {loading ? 'Loading..' : user.email}
    </div>
  );
}

export default App;
