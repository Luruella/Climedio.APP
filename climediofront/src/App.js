import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './paginas/Home/Home';
import Usuarios from './paginas/Usuarios/Usuarios';
import Servicos from './paginas/Servicos/Servico';
import { NovoUsuario } from './paginas/NovoUsuario/NovoUsuario';
import { EditarUsuario } from './paginas/EditarUsuario';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/NovoUsuario' element={<NovoUsuario />} />
        <Route path='/EditarUsuario' element={<EditarUsuario />} />
        


      </Routes>
    </BrowserRouter>
  );
}
export default App;
