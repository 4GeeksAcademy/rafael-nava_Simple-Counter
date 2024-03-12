// Contador.jsx
import React, { useState, useEffect } from 'react';
import styles from './Contador.module.css';

function Contador() {
const [cuentaAtras, setCuentaAtras] = useState([0,0,0,0]);
const [pausa,setPausa] = useState(false);

useEffect(() =>{
    let intervaloID;
    if(!pausa){ intervaloID = setInterval(() => {

        setCuentaAtras(prevCuenta => {
            const newCuentaAtras = [...prevCuenta];
            newCuentaAtras[3] += 1;

            if(newCuentaAtras[3] === 10){
                newCuentaAtras[3] = 0;
                newCuentaAtras[2] += 1;

                if(newCuentaAtras[2] === 10){
                    newCuentaAtras[2] = 0;
                    newCuentaAtras[1] += 1;

                    if(newCuentaAtras[1] === 10){
                        newCuentaAtras[1] = 0;
                        newCuentaAtras[0] += 1;

                        if(newCuentaAtras[0] === 10){
                            return[0,0,0,0];
                        }
                    }
                }
            }
            return newCuentaAtras;});
    }, 1000);
}
return () => clearInterval(intervaloID);
},[pausa])

const darlePausa = () => {
    setPausa(!pausa);
};

const reiniciarContador = () => {
    setCuentaAtras([0, 0, 0, 0]);
    setCorrer(true);
};

    return (
        <>
        <div className={`${styles.contenedor}`}>
            <div className={`${styles.reloj}`}>
            <i class="far fa-clock"></i>
            </div>
            <div className='cuatro'>{cuentaAtras}</div>
        </div>
        <div className={`${styles.divbotones}`}>
            <div>
            <button className={`${styles.button}`} onClick={darlePausa}><i class="fas fa-pause"></i></button>
            </div>
            <div>
        <button className={`${styles.button}`} onClick={reiniciarContador}><i class="fas fa-redo-alt"></i></button>
            </div>
        </div>


        </>
    )
}

export default Contador
