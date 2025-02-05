import TopbarHome from "../../Componentes/TopbarHome/TopbarHome";
import style from "./Contato.module.css";  
import SidebarHome from "../../Componentes/SidebarHome/SidebarHome";
import instagram from "../../assets/LogoClimedio.png";

function Contato() {
  return (
    <div className={style.conteudo}>
      <SidebarHome>
        <TopbarHome>
          <div className={style.pagina_conteudo}>
            <h3>Contato</h3>
            <br />
            <h5>CLIMEDIO - Clínica Médica e Odontológica</h5>
            <br />
            <p className={style.textoContato}>
              Serviços Gerais, Simone Cheder.
            </p>
            <div className={style.fotoEquipe}>
            <a href="https://www.instagram.com/" target="blank"><img src={instagram}/></a>
           
            </div>
          </div>
        </TopbarHome>
      </SidebarHome>
    </div>
  );
}

export default Contato;
