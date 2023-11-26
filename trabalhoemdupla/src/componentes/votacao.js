import React, {useState}from 'react';
import '../../src/votacao.css';

function Enquete() {
    const [enquete1, setEnquete1] = useState(0);
    const [enquete2, setEnquete2] = useState(0); 
    const [enquete3, setEnquete3] = useState(0); 

    const Botaomoranga = () => {
        const novoContador = enquete1 + 1;
        setEnquete1(novoContador);
    };

    const Botaochoca = () => {
        const novoContador2 = enquete2 + 1;
        setEnquete2(novoContador2);
    };

    const Botaobauna = () => {
        const novoContador3 = enquete3 + 1;
        setEnquete3(novoContador3);
    };

    return (
        <div className='calculadora'>
            <p className='titulo'>Escolha seu sabor preferido de sorvete!</p>
            <button className='morango' onClick={Botaomoranga}>Morango</button>

            <button className='chocolate'onClick={Botaochoca}>Chocolate</button>

            <button className='baunilha'onClick={Botaobauna}>Baunilha</button>

            <p className='resultado'>Morango Tem {enquete1} votos, Chocolate tem {enquete2} votos e Baunilha tem {enquete3} votos!</p>
        </div>
    );
}

export default Enquete;