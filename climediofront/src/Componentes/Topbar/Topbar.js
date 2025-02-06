import style from './Topbar.module.css';
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

function Topbar({ children }) {
    return (
        <div>
            <div className={style.topbar_conteudo}>
                <Link to='/' className={style.botao_login}><IoLogOutOutline /></Link>
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}
export default Topbar;