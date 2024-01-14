import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoute = ({auth, children}) => {

    console.log(auth)
    console.log(children);
   
  

    if(!auth) {

       return <Navigate to={"/login"} />

    }

    

    return children ? children :  <Outlet/>
    
 
}

export default PrivateRoute