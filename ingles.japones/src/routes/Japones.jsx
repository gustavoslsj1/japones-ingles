import React, { useState } from "react";
import styles from '../css/Japones.module.css'
import katana from '../img/Katana.jpg'

const Japones = ()=> {
    const [showElement, setShowELement] = useState(false)
    const [showButton , setShowButton] = useState(true)
    const [showImagem , setShowImagem] = useState(false)
    const [num,setNum] = useState(0)
    const randomNum = (min, max) => {
        return Math.floor(Math.random() *(max - min  + 1)) + min;
    }
    function handleclick(){
        setShowELement(true)
        setShowButton(false)
        setShowImagem(true)
        setNum(randomNum(1,20));
        
        if (num == 1){
            console.log('oi')
        }else{
            console.log('ola')
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
                {showImagem?<img src={katana}></img>:null}
            </div>
        </div>
        
    )
}

export default Japones;