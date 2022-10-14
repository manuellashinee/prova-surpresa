import { useState, useEffect } from "react";


export default function Orcamento() {
    const [gastos, setGastos] = useState();
    const [ganhos, setGanhos] = useState();
    const [situacao, setSituacao] = useState();

    function dinheiro (ganhos, gastos) {
        let msg ='';
        let bom  =  (ganhos/100) * 20;
        let okay = (ganhos/100) * 50;
        let atencao = (ganhos/100) * 80;
        let ruim = (ganhos/100) *100;

        if (gastos <= bom) 
        {
            msg = 'Parabéns, está gerenciando bem seu orçamento!';
        }

        if (gastos <= okay && gastos > bom) 
        {
            msg = 'Muito bem, seus gastos não ultarpassam metade dos ganhos!';
        }

        if (gastos <= atencao && gastos > okay) 
        {
            msg = 'Atenção, melhor conter os gastos!';
        }

        if (gastos <= ruim) 
        {
            msg = 'Cuidado, seu orçamento pode ficar comprometido!';
        }

        else {
            msg = 'Orçamento comprometido! Hora de rever seus gastos!'
        }

        setSituacao(msg);
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

