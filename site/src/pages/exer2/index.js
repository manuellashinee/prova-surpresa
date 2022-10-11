import { useEffect, useState } from "react";
import './index.scss'

export default function Signos(){
    const [mes, setMes] = useState("");
    const [dia, setDia] = useState(0);
    const [resul, setResul] = useState(false);

    function libra(mes, dia) {
        let resp= false;
        if(mes ==="Setembro" && dia>22){
        resp= true;}
        if(mes ==="Outubro" && dia<=22){
        resp= true;}

        setResul(resp);
    }


    useEffect( ()=>{
        libra(mes,dia);
    },[mes,dia])

    return (
        <section className='Lana'>
            <h1>SIGNO LIBRA</h1>

            <div className='align'>
                <div className='squad'>

                    <div>
                        <p>MÊS</p>
                        <input type='text' value={mes} onChange={e=>setMes(e.target.value)}/>
                    </div>
                    <div>
                        <p>DIA</p>
                        <input type='number' value={dia} onChange={e=>setDia(e.target.value)}/>
                    </div>
                    <div><span> VOCÊ É DE LIBRA? {resul? "Sim" : "Não"}</span></div>
               </div>
            </div>
            
           
           
        </section>
    );
}