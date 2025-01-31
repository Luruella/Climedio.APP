import style from './Sidebar.module.css';
import Logo from '../../assets/LogoClimedio.png';
import SidebarItem  from '../SidebarItem/SidebarItem';
import { MdGroup, MdSort } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { MdHome } from "react-icons/md";

function Sidebar({ children }) {
    return (
        <div>
            <div className={style.sidebar_conteudo}>
                <div className={style.sidebar_header}>
                    <img src={Logo} alt="fundo" className={style.logo} />

                    <hr className={style.linha} />
                </div>

                <div className={style.sidebar_corpo}>
                    <SidebarItem texto="Home" link="/" logo={<MdHome />} />
                    <SidebarItem texto="Usuarios" link="/usuarios" logo={<MdGroup />} />
                    <SidebarItem texto="Agendamentos" link="/agendamentos" logo={<MdInbox />} />
                    <SidebarItem texto="Equipe" link="/equipe" logo={<MdSort />} />
                </div>
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}

export default Sidebar;