import { useState, useEffect } from 'react';
import './index.scss'


export default function Sorvete() {
const [qtdPeq, setQtdpeq] = useState();
const [qtdMed, setQtdMed] = useState();
const [qtdGra, setQtdGra] = useState();
const [desc, setDesc] = useState();
const [ final, setFinal] = useState();




  function custo(){
    let total = qtdPeq*13.50 + qtdMed*15.00 + qtdGra*17.50;
    let porcentagem = total*(desc/100);
    let final = total - porcentagem;
    setFinal(final);

  }
  
    useEffect(() => {
      custo();
    
    }, [final])
  
  return (
   

        <section>
          <div className='titulo'>
            <h1>Preços do Açaí</h1>
          </div>

    <div className='alinhamento'> 
    <div className='quadro'>
      
      <div className='informacoes'>
            <p>Qtd.Pequena:</p>
            <input className='inserir' type='number' value={qtdPeq}  onChange={e => setQtdpeq(Number(e.target.value))}/>
          </div>

          <div>
            <p>Qtd.Media:</p>
            <input className='inserir' type='number' value={qtdMed}  onChange={e => setQtdMed(Number(e.target.value))}/>
          </div>

          <div>
            <p>Qtd.Grande:</p>
            <input className='inserir' type='number' value={qtdGra}  onChange={e => setQtdGra(Number(e.target.value))} />
          </div>

          <div>
            <p>Desconto:</p>
            <input className='inserir' type='number' value={desc}  onChange={e => setDesc(Number(e.target.value))}/>
          </div>

          <div>
            <h2>O valor total é: </h2>
          <button onClick={custo}>Calcular</button>

          {final}

          </div>
    </div>
     
</div>


         

          


        </section>
        
        
    
  );
}