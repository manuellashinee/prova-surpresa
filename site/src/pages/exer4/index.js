import { useEffect, useState } from 'react';
import './index.scss'

export default function CalcularSa(){
   
    const [result, setResult] = useState('');
    const [salario, setSalario] = useState('');
    const [bonus, setBonus] = useState('');
    const [desc, setDesc] = useState('');



    function Calcular(salario, bonus, desc){
        let porcentagem = salario* (bonus/100);
        let total = salario - desc + porcentagem;
        setResult(total)

    }

    useEffect(() => {
        Calcular(salario, bonus, desc);
    }, [salario, bonus, desc])

    return(
        <section>
            <h1>Salario</h1>
            <p>Base</p>
            <input type = 'number' value={salario} onChange={e => setSalario(e.target.value)} />
            <p>Mensal</p>
            <input type = 'number' value={bonus} onChange={e => setBonus(e.target.value)} />
            <p>Desconto</p>
            <input type = 'number' value={desc} onChange={e => setDesc(e.target.value)} />
            <br/>
            <span>Seu salario liquido é R$ {result}</span>
        </section>
    )
}