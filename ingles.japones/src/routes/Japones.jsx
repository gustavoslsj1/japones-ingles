import React, { useState } from "react";
import styles from '../css/Japones.module.css'

const Japones = ()=> {
    const [showElement, setShowELement] = useState(false)
    const [showButton , setShowButton] = useState(true)
    function handleclick(){
        console.log('clikado')
        setShowELement(true)
        setInterval(1000)
        setShowButton(false)
    }
    return(
        <div>
            <div>
                <h1>Japnones</h1>
            </div>
            <div>
                {showButton ?<button onClick={handleclick} className={styles.start}> iniciar</button> :null}
               {showElement? <input type="text" className={styles.caixa1} /> :null}
            </div>
        </div>
        
    )
}

export default Japones;