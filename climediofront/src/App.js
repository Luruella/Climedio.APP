import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './paginas/Home/Home';
import Usuarios from './paginas/Usuarios/Usuarios';
import Equipe from './paginas/Equipe/Equipe';
import { NovoUsuario } from './paginas/NovoUsuario/NovoUsuario';
import { EditarUsuario } from './paginas/EditarUsuario/EditarUsuario';
import { Login } from './paginas/Login/Login';
import { PageAgendamentos } from './paginas/Agendamentos/Agendamentos';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/Equipe' element={<Equipe />} />
        <Route path='/NovoUsuario' element={<NovoUsuario />} />
        <Route path='/EditarUsuario' element={<EditarUsuario />} />
        <Route path ='/Login' element = {<Login/>}/>
        <Route path ='/Agendamentos' element = {<PageAgendamentos/>}/>

       
      </Routes>
    </BrowserRouter>
  );
}
export default App;
