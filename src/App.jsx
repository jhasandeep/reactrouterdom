import React from 'react'

import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';




const App = () => {

  let auth = true;
  return (<>
    
    <Routes>

<Route  path="/profile" element={<PrivateRoute auth={auth} ><Profile/> </PrivateRoute>}/>

      <Route element={<PrivateRoute auth={auth} />}>
        <Route path="/" element={<Home/>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App