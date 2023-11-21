import React, { useState } from 'react'
import '../../src/media.css';

function CalcularMedia() {
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')
    const [media, setMedia] = useState('');

    const calcularmedia = () => {
        const resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        setMedia(resultado)
    }
    

    return(
        <div className='Calculadora'>
            <input className='n1' type='number' value={nota1} onChange={(e) => setNota1(e.target.value)}placeholder='Digite a primera nota..'/>
            <input className='n2' type='number' value={nota2} onChange={(e) => setNota2(e.target.value)}placeholder='Digite a segunda nota..'/>
            <input className='n3' type='number' value={nota3} onChange={(e) => setNota3(e.target.value)}placeholder='Digite a terceira nota..'/>
            
            <button className='botao' onClick={calcularmedia}>Calcular Média</button>
            {media !== null && <p className='resul'>Resultado:{media}</p>}
            if(media = 4){
               alert('Você está Reprovado!!')
            } else(media = 4 && media = 6){
                alert('Você está em Recuperação!!!')
            } else(media = 6){
                alert('Você está APROVADO!!!!')
            }
        </div>
        
    )
}
export default CalcularMedia;