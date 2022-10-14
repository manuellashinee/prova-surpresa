import { useState,useEffect } from 'react';
import './index.scss'



export default function Ingressos(){
  const [ inteira, setInteira] = useState("");
  const [ meia, setMeia] = useState("");
  const [ diaSemana, setDiasemana] = useState("");
  const [ nacional, setNacional] = useState(false);
  const [ resul, setResul] = useState(0);


    function totalCompra(inteira, meia, diaSemana, nacional) {
       
        if(nacional === true) {
            setResul((Number(inteira) + Number(meia) ) * 5.00);
        }
        if(diaSemana === "quarta"){
            setResul((Number(inteira) + Number(meia)) * 14.25);
        }
        else 
        {
            setResul((meia * 14.25) + (inteira * 28.50));
        }
       
    }

    useEffect(() => {
        totalCompra(inteira, meia, diaSemana, nacional);
    }, [inteira, meia, diaSemana, nacional ])


    return (

        <section>
            <h1>Ingressos Para o cinema</h1>
            <p>Inteira</p>
            <input type='number'  value={inteira} onChange={e=>setInteira(e.target.value)}/>
            <p>Meia</p>
            <input type='number'  value={meia} onChange={e=>setMeia(e.target.value)}/>
            <p>Dia da Semana</p>
            <input type='text'  value={diaSemana} onChange={e=>setDiasemana(e.target.value)}/>
            <p>Nacional</p>
            <input type='checkbox'  value={nacional} onChange={e=>setNacional(e.target.value)}/>
            <br/>
            <br/>
            <span>O preço é {resul}</span>
            

        </section>
    )
}