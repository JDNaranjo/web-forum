import React, { useEffect } from 'react';
import { app } from './fb'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  
  const [user, setUser] = React.useState(null);


  useEffect( ()=>{
    app.auth().onAuthStateChanged((firebaseUser)=>{
      console.log("Existe una sesion iniciada", firebaseUser);
      setUser(firebaseUser);
    })
  }, )
  
  return (
    <>
    { user ? <Home /> : <Login setUser={setUser} /> }
    </>
  );
}

export default App;
