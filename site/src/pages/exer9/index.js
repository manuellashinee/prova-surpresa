import { useState } from 'react';
import './index.scss'

export default function Naturais(){
    const [inicio, SetInicio] = useState();
    const [fim, SetFim] = useState();
    const [resultado, setResultado] = useState([]);
   



    function contarAte(inicio, fim) {
       
            let arr= [];
    
            for(let i = inicio; i <= fim; i++){
                arr.push(i);
                setResultado(arr);
            }
        
    }
 
    function addLista(){
       contarAte(inicio,fim)
    }

    return(

        <section>
            <h1>Numeros Naturais</h1>
            <div>
                <input type='number' value={inicio} onChange={e=>SetInicio(e.target.value)}/>
            </div>
            <div>
                <input type='number' value={fim} onChange={e=>SetFim(e.target.value)}/>
            </div>
         
        
           
            {resultado.map(item => 
            
              <div>

                {item}
              
                </div>
            
            )} 
            
           
         
         <div>
            <button onClick={addLista}>funcionar</button>
         </div>
        </section>
    )
}