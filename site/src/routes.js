import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signos from './pages/exer2';
import Sorvete from './pages/exer1';
import Kilo from './pages/exer3';
import Home from './pages/home';
import CalcularSa from './pages/exer4';
import Temperatura from './pages/exer6';
import Gasolina from './pages/exer5';
import Orcamento from './pages/exer7';
import Ingressos from './pages/exer8';
import Naturais from './pages/exer9';
import Linha from './pages/exer10';
import Retangulo from './pages/exer11';

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
      <Route path='/exer7' element={<Orcamento/>}/> 
      <Route path='/exer8' element={<Ingressos/>}/> 
      <Route path='/exer9' element={<Naturais/>}/> 
      <Route path='/exer10' element={<Linha/>}/> 
      <Route path='/exer11' element={<Retangulo/>}/>
  </Routes>
  </BrowserRouter>
  );
}
