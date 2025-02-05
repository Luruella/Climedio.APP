import style from './SidebarHome.module.css';
import Logo from '../../assets/LogoClimedio.png';
import SidebarItem  from '../SidebarItem/SidebarItem';
import { MdGroup, MdSort } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { MdHome } from "react-icons/md";
// import fundo from '../../assets/Fundo2.png';

function SidebarHome({ children }) {
    return (
        <div>
            <div className={style.sidebar_conteudo}>
                <div className={style.sidebar_header}>
                    <img src={Logo} alt="fundo" className={style.logo} />
                    {/* <img src = {fundo} alt="Fundo" className={style.fundo} /> */}
               
                </div>

                <div className={style.sidebar_corpo}>
                    <SidebarItem texto="História" link="/" logo={<MdHome />} />
                    <SidebarItem texto="Equipe" link="/equipe" logo={<MdSort />} />
                    <SidebarItem texto="Contato" link="/contato" logo={<MdSort />} />
                </div>
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    )
}

export default SidebarHome;