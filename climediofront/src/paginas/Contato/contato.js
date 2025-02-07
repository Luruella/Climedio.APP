import TopbarHome from "../../Componentes/TopbarHome/TopbarHome";
import style from "./Contato.module.css";  
import SidebarHome from "../../Componentes/SidebarHome/SidebarHome";
import Instagram from "../../assets/Instagram.png";
import Whatss from "../../assets/Whatss.png";
import LogoClimedio from "../../assets/LogoClimedio.png";

function Contato() {
  return (
    <div className={style.conteudo}>
      <SidebarHome>
        <TopbarHome>
          <div className={style.pagina_conteudo}>
            <h3>Entre em contato conosco pelos nosos veículos de comunicação</h3>
            <br />
            <img src={LogoClimedio}></img>
            <br />

            <p className={style.textoContato}>
              .
            </p>
            <div className={style.Comunicacao}>
            <a href="https://www.instagram.com/climedio?igsh=azRzZg0cG9leDFx" target="blank"><img src={Instagram}/></a>
            <a href="https://api.whatsapp.com/send?phone=5535988729091" target="blank"><img src={Whatss}/></a>
           
            </div>
          </div>
        </TopbarHome>
      </SidebarHome>
    </div>
  );
}

export default Contato;
