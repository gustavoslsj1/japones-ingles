import React, { useState } from "react";
import styles from '../css/Japones.module.css'
import imagens from './imagens'

const Japones = (props)=> {
  
      
    const [showElement, setShowELement] = useState(false)
    const [showButton , setShowButton] = useState(true)
    const [showImagem , setShowImagem] = useState(false)
    const [showButton2,setShowButton2] = useState(false)
   
    

    function handleclick(){
        setShowELement(true)
        setShowButton(false)
        setShowImagem(true)
        
    }  
    function handleclick2(){
        setShowButton2(true)
    }
    return(
        <div>
            <div q>
                {showButton ?<button onClick={handleclick} className={styles.start}> start </button> :null}
                {showElement? <input type="text" className={styles.caixa1} /> :null}
                {showImagem ? <img src="https://i.pinimg.com/236x/7c/05/de/7c05de6b6dc45c8b91029bf14696a2fb.jpg"></img>: null}
                {showButton2? <button onClick={handleclick2} className={styles.next}> next</button>:null} 
            </div>
        </div>
        
    )
}

export default Japones;