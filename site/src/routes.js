import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signos from './pages/exer2';
import Sorvete from './pages/exer1';
import Kilo from './pages/exer3';
import Home from './pages/home';
import CalcularSa from './pages/exer4';
import Temperatura from './pages/exer6';
import Gasolina from './pages/exer5';

export default function Rotas (){
  return(
  <BrowserRouter>
  <Routes>
      
      <Route path='/exer1' element={<Sorvete/>}/>
      <Route path='/exer2' element={<Signos/>}/>
      <Route path='/exer3' element={<Kilo/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/exer5' element={<Gasolina/>}/>
      <Route path='/exer4' element={<CalcularSa/>}/>
      <Route path='/exer6' element={<Temperatura/>}/>
  </Routes>
  </BrowserRouter>
  );
}
