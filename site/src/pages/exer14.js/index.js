import { useState } from "react";
import './index.scss'
import { calcMedia, calcMaior, calcMenor, criarArray } from '../../services/media.js'

export default function Media() {

    const [qtd, setQtd] = useState(0);
    const [notasAlunos, setNotasAlunos] = useState([])
  
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);
  
  
    function ok() {
      const x = criarArray(qtd);
      setNotasAlunos(x);
    }
  
    function alterarArray(pos, novoValor) {
      notasAlunos[pos] = Number(novoValor);
      setNotasAlunos([...notasAlunos]);
    }
  
    function calcular() {
      const a = calcMedia(notasAlunos);
      const b = calcMaior(notasAlunos);
      const c = calcMenor(notasAlunos);
  
      setMedia(a);
      setMaior(b);
      setMenor(c);
    }
    return(
        <section>
            <h1>Exercício 14</h1>
            <div>
          Qtd. Alunos: <input type='text' value={qtd} onChange={e => setQtd(e.target.value)} />
          <button onClick={ok}> Aparecer </button>
        </div>

        {notasAlunos.map((item, pos) => 
          <div className="aluno">
            Aluno {pos+1}: <input type='text' value={notasAlunos[pos]} onChange={e => alterarArray(pos, e.target.value)} />
          </div>  
        )}


        <button onClick={calcular}> Calcular </button>
        
        <div className="media">
          Média: {media}
        </div>
        <div className="maior">
          Maior: {maior}
        </div>
        <div className="menor">
          Menor: {menor}
        </div>
        
        
        </section>
    )

}