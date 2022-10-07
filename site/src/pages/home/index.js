import './index.scss'
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <section>
            <h1>HOME</h1>
            <div className='principal'>
            <Link to='/exer1'>FUNÇÃO 1</Link>
            <Link to='/exer2'>FUNÇÃO 2</Link>
            <Link to='/exer3'>FUNÇÃO 3</Link>
            </div>
        </section>
    );
}