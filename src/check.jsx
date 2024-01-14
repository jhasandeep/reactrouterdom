import React, { useContext } from 'react'
import { colorContext } from './Store/store'

const check = () => {


    const [color, setColor] = useContext(colorContext);

    const handleChange = () => {

        setColor("orange");
    }


  return (
    <div>
        <h2>change background color to orange </h2>

        <button onClick={handleChange}>orange</button>
    </div>
  )
}

export default check