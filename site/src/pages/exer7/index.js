import { useState, useEffect } from "react";


export default function Orcamento() {
    const [gastos, setGastos] = useState();
    const [ganhos, setGanhos] = useState();
    const [situacao, setSituacao] = useState();

    function dinheiro (ganhos, gastos) {
        let porcentagem = (gastos*100)/ganhos;

        if (porcentagem >100) 
        {
           setSituacao('Orçamento comprometido! Hora de rever seus gastos!');
        }

        else if(porcentagem > 80) 
        {
            setSituacao('Cuidado, seu orçamento pode ficar comprometido!');
        }

        else if (porcentagem  > 50) 
        {
            setSituacao('Atenção, melhor conter os gastos!');
        }

        else if(porcentagem > 20) 
        {
            setSituacao('Muito bem, seus gastos não ultarpassam metade dos ganhos!');
        }

        else if(porcentagem >= 0) {
            setSituacao( 'Parabéns, está gerenciando bem seu orçamento!');
        }
        else {
            setSituacao('entrada invalida')
        }

      
    }
    useEffect( () => {
        dinheiro(ganhos,gastos);
    }, [ganhos, gastos]);



    return (
        <section>
            <div>
                <h1>Insira seus Ganhos:</h1>
                <input type='number' value={ganhos} onChange={e=>setGanhos(e.target.value)}/>
            </div>

            <div>
                <h1>Insira seus Gastos:</h1>
                <input type='number' value={gastos} onChange={e=>setGastos(e.target.value)}/>
            </div>

            <div>
            <span> {situacao}</span>
        </div>

        </section>
    )
}

