import './index.scss'
import { Link } from 'react-router-dom';
import '../../common/common.scss'

export default function Home() {
    return(
        <section className='container'>
            <div className='info'>
                <div>
                   <label className='info1'>Prova 4 Bimestre</label>
                </div>
                <div>
                   <label className='info2'>Feito Por Eliza Ferreira e Manuella Jesus</label>
                </div>
                <div>
                   <label className='info2'>HOME</label>
                </div>
                

            </div>
            
            <div className='principal'>
                <div className='harry'>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer1'><p className='o'>FUNÇÃO 1</p></Link></button>
                    </div>

                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer2'><p className='o'>FUNÇÃO 2</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer3'><p className='o'>FUNÇÃO 3</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer4'><p className='o'>FUNÇÃO 4</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer5'><p className='o'>FUNÇÃO 5</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer6'><p className='o'>FUNÇÃO 6</p></Link></button>
                    </div>

                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer7'><p className='o'>FUNÇÃO 7</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer8'><p className='o'>FUNÇÃO 8</p></Link></button>
                    </div>


                    

            
            </div>
            </div>
    </section>
    );
}