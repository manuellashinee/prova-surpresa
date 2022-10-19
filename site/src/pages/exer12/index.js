import { useState, useEffect } from 'react';
import './index.scss'

export default function Beber(){
    const [estudante, setEstudante] = useState();
    const [litro, setLitro] = useState();
    const [consumo, setConsumo] = useState();
    const [resultado, setResultado] = useState(0);
    



    function cafe(estudantes, litros, consumos){
      try{
        let resposta = litros;
        let a = (estudantes  * consumos) / 1000;

        while( resposta < a){
            resposta= Number(resposta)+ Number(litros);
        }
        setResultado(resposta);
      } catch(err){
        alert(err.message)
      }
    }

    function cafezeiro(){
        cafe(estudante, litro, consumo) ;
    }

    useEffect( () => {
        cafe(estudante, litro, consumo);
    }, [estudante, litro, consumo]);



    return(
        <section>
            <h1> Alunos que beberão café:</h1>

            <div>
                <h1>Alunos</h1>
                <input type='number' value={estudante} onChange={e => setEstudante(e.target.value)}/>
            </div>

            <div>
                <h1>litros</h1>
                <input type='number' value={litro}  onChange={e=>setLitro(e.target.value)}/>
            </div>

            <div>
                <h1>Consumo</h1>
                <input type='number' value={consumo}  onChange={e=>setConsumo(e.target.value)}/>
            </div>
            <div>
                <button onClick={cafezeiro}>Calcular</button>
            </div>


          <p> {resultado}</p>

           
        </section>
    )
}






