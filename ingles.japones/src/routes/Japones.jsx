import React, { useState } from "react";
import styles from '../css/Japones.module.css'

const Japones = ()=> {
    const [showElement, setShowELement] = useState(false)
    const [showButton , setShowButton] = useState(true)
    const [num,setNum] = useState(0)
    const randomNum = (min, max) => {
        return Math.floor(Math.random() *(max - min  + 1)) + min;
    }
    function handleclick(){
        setShowELement(true)
        setShowButton(false)
        setNum(randomNum(1,20));
        
        if (num == 1){
            <h1> oi</h1>
        }else{
            <h1>ola</h1>
        }
    }
    return(
        <div>
            <div>
                <h1>Japones</h1>
            </div>
            <div>
                {showButton ?<button onClick={handleclick} className={styles.start}> iniciar</button> :null}
                {showElement? <input type="text" className={styles.caixa1} /> :null}
            </div>
        </div>
        
    )
}

export default Japones;