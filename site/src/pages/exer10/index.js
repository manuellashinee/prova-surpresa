import { useState } from 'react'
import './index.scss'

export default function Linha(){
    
const [ qtd, setQtd] = useState();
const [ resultado, setResultado] = useState([]);



    function linhazinha(qtd){
        let array = []
        for(let cont = 1; cont <= qtd; cont++) {
         
            array.push(" * ");
            setResultado(array);
        }
    }

    function resul(){
        linhazinha(qtd);
    }

    return (
    
        <section> 
            <h1>Asterisco</h1>


            <div>
                <input type='number' value={qtd}  onChange={e=>setQtd(e.target.value)}/>
            </div>

            {resultado.map(item => 
            
            <div className='a'>

              {item}
            
              </div>
          
          )} 
         
       
            <div>
                <button onClick={resul}>Formar</button>
            </div>
        </section>
    )
}
