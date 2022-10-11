import { useEffect, useState } from 'react';
import './index.scss'

export default function Temperatura(){
    const [situ, setSitu] = useState("");
    const [resultado, setResultado] = useState(0);

    function Febre(situ){
    
       if(situ >= 41){
        setResultado('Hipertemia');
       } 
       else if(situ >= 39.6 && situ <= 41){
        setResultado('Febre Alta');
       }
       else if(situ >= 37.6 && situ <= 39.6){
        setResultado('Febre');
       }
       else if(situ >= 36 && situ <=37.6){
        setResultado('Normal');
       }
       else if(situ <= 36){
        setResultado('Hiportemia')
       }
    }

    useEffect(() => {
        Febre(situ);
    }, [situ])


    return(
        <section>
            <h1>Febre</h1>
            <p>Temperatura</p>
            <input type= 'number' value={situ} onChange={e => setSitu(e.target.value)} />
            <br/>
            <span>Sua temperatura é {resultado}</span>
        </section>

    )
}