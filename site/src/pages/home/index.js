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
                        <button className='salvar-botao'><Link className='texto' to='/exer1'>FUNÇÃO 1</Link></button>
                    </div>

                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer2'>FUNÇÃO 2</Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer3'><p>FUNÇÃO 3</p></Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer4'>FUNÇÃO 4</Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer5'>FUNÇÃO 5</Link></button>
                    </div>
                    <div className='primeira'>
                        <button className='salvar-botao'><Link className='texto' to='/exer6'>FUNÇÃO 6</Link></button>
                    </div>


                    

            
            </div>
            </div>
    </section>
    );
}