import { useEffect, useState } from 'react'
import './index.scss'

export default function Gasolina() {

    const [capacidade, setCapacidade] = useState();
    const [consumo, setConsumo] = useState();
    const [distancia,  setDistancia] = useState();
    const [total, setTotal] = useState();

    function paradasCalcular (capac, consul, distan) {
        let pop = capac/consul;
        let loli = distan/pop;
        let final = loli/capac;
        setTotal(Math.trunc(final));

        if(!capac || !consul || !distan) {

            setTotal(0);
        }
    }

    useEffect( () => {
        paradasCalcular(capacidade,consumo, distancia);
    }, [capacidade, consumo, distancia]);


    return(
        <section>
        <div>
            <p>Capacidade:</p>
            <input type='number' value={capacidade} onChange={e => setCapacidade(e.target.value)}/>
        </div>


        <div>
            <p>Consumo de Gasolina:</p>
            <input type='number' value={consumo} onChange={e => setConsumo(e.target.value)}/>
        </div>

        <div>
            <p>Distancia:</p>
            <input type='number' value={distancia} onChange={e => setDistancia(e.target.value)}/>
        </div>

        <div>
            <span> {total} é a quantidade de paradas necessárias.</span>
        </div>
        
        </section>
    )
}