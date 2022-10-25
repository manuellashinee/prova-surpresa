import { useState } from "react";

export default function Media() {

    const [alunos, setAlunos] = useState([]);
    const [input, setInput] = useState([]);
    const [resultado, setResultado] = useState([]);


    function AparecerInput(input) {
       
        let arr= [];

        for(let i = 1; i <= input; i++){
            arr=[...arr, i]
            setResultado(arr);
        }
    }
        function Mostrarresul(){
            AparecerInput(input)
        }

    

    return(
        <section>
            <h1>Exercício 14</h1>

            <div>
                <input type='number' value={input} onChange={e  =>setInput (e.target.value)}/>
                
                <button onClick={Mostrarresul}>Mostrar</button>
                <div>
                    {resultado.map((item) => (
                        <div>
                        <p>Aluno {item}</p><input type='number'></input>
                        </div>
                    ))}
                </div>
             
                </div>
                


             
              
                
        
        </section>
    )

}