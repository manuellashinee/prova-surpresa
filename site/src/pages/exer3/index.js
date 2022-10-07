import { useEffect, useState } from 'react'
import './index.scss'



export default function Kilo(){
    const [peso, setPeso] = useState(0);
    const [resul, setResul] = useState("");

    function sorveteria(gramas){
        let x = 3.50;
        if(gramas >=1000){
            x=3.00
        }
        const valor = gramas/100 *x;
        setResul("Total a pagar é" + valor);
        if(gramas < 0){
            setResul('Peso é invalido')
        }
        
        }
    
        useEffect(() => {
            sorveteria(peso);
        }, [peso])

    return(
        <section>
            <h1> Sorveteria </h1>
            <p>Gramas</p>
            <input type='number' value={peso} onChange={e => setPeso(e.target.value)} />
            <br/>
            <span>{resul}</span>
        </section>
    )
}