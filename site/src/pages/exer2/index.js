import { useEffect, useState } from "react";

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
        <section>
            <h1>SIGNO LIBRA</h1>
            <p>MÊS</p>
            <input type='text' value={mes} onChange={e=>setMes(e.target.value)}/>
            <p>DIA</p>
            <input type='number' value={dia} onChange={e=>setDia(e.target.value)}/>
            <br/>
            <hr/>
            <span> VOCÊ É DE LIBRA? {resul? "Sim" : "Não"}</span>
        </section>
    );
}