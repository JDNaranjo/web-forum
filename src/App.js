import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { app } from './fb'
import Forum from './pages/Forum/Forum';
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/" >
          <>
            { user ? <Forum /> : <Login setUser={setUser} /> }
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
