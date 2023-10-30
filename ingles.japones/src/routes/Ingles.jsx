import React, { useState } from "react"
import styles from '../css/Ingles.module.css';
const Ingles = () => {
    const  [showElement, setShowELement] = useState(false)
    const  [showButton , setShowButton] = useState(true)
    function handleclick(){
        setShowELement(true)
        setShowButton(false)
    }
    return(
        <div> 
            <h2> Ingles</h2>
            {showElement?<input type="text"></input>:null}
            {showButton? <button onClick={handleclick} >iniciar</button>:null}
        </div>
    )
} 

export default Ingles