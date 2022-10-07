import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signos from './pages/exer2';
import Sorvete from './pages/exer1';
import Kilo from './pages/exer3';

export default function Rotas (){
  return(
  <BrowserRouter>
  <Routes>
      
      <Route path='/exer1' element={<Sorvete/>}/>
      <Route path='/exer2' element={<Signos/>}/>
      <Route path='/exer3' element={<Kilo/>}/>
  </Routes>
  </BrowserRouter>
  );
}
