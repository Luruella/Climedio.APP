import { Link, useLocation } from 'react-router-dom';
import style from './Sidebaritem.module.css';

function SidebarItem({ texto, link, logo }) {
    const location = useLocation(); // Obtém a URL atual

    
    const ativo = location.pathname === link;

    return (
        <Link 
            to={link} 
            className={`${style.sidebar_item} ${ativo === true ? style.active : ''}`}
        >
            {logo}            
            <h3 className={style.texto_link}> {texto} </h3>
        </Link>
    )
}

export default SidebarItem;
