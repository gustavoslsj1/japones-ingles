import React, { useState } from "react";
import styles from '../css/Japones.module.css'
var click = 1
let imagens = (
    img1 = ("https://i.pinimg.com/564x/84/5c/88/845c88fa54714cb1327cb91d9a4bb393.jpg"),
    img2 = ("https://i.pinimg.com/236x/10/e0/19/10e01952a1cf6b4406a64eb316388dda.jpg"),
    img3 = ("https://i.pinimg.com/236x/86/d5/5c/86d55c940446bf12de410bbd6599fbd4.jpg"),
    img4 = ("https://i.pinimg.com/236x/da/7c/7a/da7c7afd84961469f2c461ea581c14ae.jpg"),
    img5 = ("https://i.pinimg.com/236x/7c/05/de/7c05de6b6dc45c8b91029bf14696a2fb.jpg")
)
const Japones = ()=> {
    const [showElement, setShowELement] = useState(false)
    const [showButton , setShowButton] = useState(true)
    const [showImagem , setShowImagem] = useState(false)
    const [showButton2,setShowButton2] = useState(false)
    const [imagem, setImagem] = useState(imagens)

    function handleclick(){
        setShowELement(true)
        setShowButton(false)
        setShowImagem(true)
        setShowButton2(true)
        setImagem(img1)
    }
    function changeImage(){
        setImagem(img2)
    }
    return(
        <div>
            <div className={styles.container}>
                {showButton ?<button onClick={handleclick} className={styles.start}> start </button> :null}
                {showElement? <input type="text" className={styles.caixa1} /> :null}
                {showImagem ?<img src={imagem} alt="okay" className={styles.imagem}/>:null}  
                {showButton2?<button onClick={changeImage} className={styles.next}> next</button>:null} 
            </div>
        </div>
        
    )
}

export default Japones;