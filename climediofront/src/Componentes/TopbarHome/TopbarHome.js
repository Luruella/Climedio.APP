import style from './TopbarHome.module.css';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

function TopbarHome({ children }) {
    return (
        <div>
            <div className={style.topbar_conteudo}>
                <Link to='/Login' className={style.botao_login}>Entrar</Link>
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}
export default TopbarHome;