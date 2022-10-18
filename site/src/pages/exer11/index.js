import { useState } from 'react'
import './index.scss'

export default function Retangulo() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resp, setResp] = useState([]);

    function quadrado (base, altura) {
        let array = []
        for(let linha = 1; linha < altura; linha++) {
            for(let coluna = 1; coluna < base; coluna++ )
            array.push(" * ");
            setResp(array);
        }
    }
    function ir (){
        quadrado(base, altura);
    }

    return (
        <section>
        <div>
            <p>Base</p>
            <input type='number' value={base}  onChange={e=>setBase(e.target.value)}/>
        </div>

        {resp.map(item => 
            
            <div className='a'>

              {item}
            
              </div>
          
          )} 
        <div>
            <p>Altura</p>
            <input type='number' value={altura}  onChange={e=>setAltura(e.target.value)}/>
        </div>
                <button onClick={ir}>Calcular</button>
        </section>
    )
}