import React, { useState } from "react";
import styles from '../css/Japones.module.css'


const Japones = () => {
    const imagens = ['https://i.pinimg.com/236x/db/63/58/db6358b98afd0d48a48389ce172a9c17.jpg',
        'https://i.pinimg.com/236x/8e/ca/cb/8ecacb803697a7822ba26aedc6ab99d0.jpg',
        'https://i.pinimg.com/236x/f8/d8/e2/f8d8e25d7079e78ed8347056a39b0ac4.jpg'];
    const [showElement, setShowELement] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [showImagem, setShowImagem] = useState(false)
    const [showButton2, setShowButton2] = useState(false)



    function handleclick() {
        setShowButton(true)
        setShowELement(true)
        setShowButton(false)
        setShowImagem(true)
        setShowButton2(true)

    }

    const [indiceImagem, setIndiceImagem] = useState(0);
    const trocarImagem = () => {
        const proximoIndice = (indiceImagem + 1) % imagens.length;
        setIndiceImagem(proximoIndice);
    }
    return (
        <div>
            <div >
                {showButton ? <button onClick={handleclick} className={styles.start}> start </button> : null}
                {showElement ? <input type="text" className={styles.caixa1} /> : null}
                {showImagem ? <img src={imagens[indiceImagem]}></img> : null}
                {showButton2 ? <button onClick={trocarImagem} className={styles.next}> next</button> : null}
                <div className={styles.estilos}>
                    <h2 className={ styles.estilos_jogo}>estilos de jogo</h2>
                    <h2 className={styles.tradicional}>tradicional</h2>                
                    <h2 className={styles.tradutor} onClick={handleclick}>tradutor</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div >

            </div>
        </div>

    )
}

export default Japones;