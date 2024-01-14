import React, { useState } from 'react'

import { createContext } from 'react';
import App from '../App';

export const colorContext= React.createContext();




const store = () => {

  const [color, setColor] = useState("black");


  return (

    <div>

      <colorContext.Provider value={[color,setColor]}>
      <App/>
      
      </colorContext.Provider>
    </div>
    
  )
}

export default store