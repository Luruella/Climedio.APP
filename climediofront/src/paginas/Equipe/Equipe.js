import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./Equipe.module.css";
import Sanches from "../../assets/Sanches.png";
import Bruna from "../../assets/Bruna.png";
import Cristiano from "../../assets/Cristiano.png";
import Fabiana from "../../assets/Fabiana.png";
import Leny from "../../assets/Leny.png";
import Simone from "../../assets/Simone.png";
import Theo from "../../assets/Theo.png";
import Paula from "../../assets/Paula.png";
import Marcela from "../../assets/Marcela.png";
import TopbarHome from "../../Componentes/TopbarHome/TopbarHome";
import SidebarHome from "../../Componentes/SidebarHome/SidebarHome";


function Equipe() {
  return (
   
      
        <TopbarHome>
          <SidebarHome>
            <div>


          <div className={style.conteudo}>
          <div className={style.pagina_conteudo}>
            <h2>Conheça a nossa equipe</h2>
            <br></br>
            <br></br>
            <h3>CLIMEDIO</h3>
            <h3>Clínica Médica e Odontológica</h3>
            <br></br>

            <h5>Dr. Fedor Sanchez Pedemonte, Especialista em Clínica Geral,Pneumologia,
            <br></br> Hematologia Infectologia Broncoscopista e Intensivista.{" "}</h5>
            <div className={style.Sanches}>{" "}<img src={Sanches} alt="Sanches" className={style.logo} /></div>
            <br></br>

            <h5>Sócia: Leny Sanchez</h5>
            <div className={style.Leny}>{" "}<img src={Leny} alt="Leny" className={style.logo} /></div>
            <br></br>

            <h5>
              Coordenadora: Paula Morais, com formação em
              <br></br>Gestão de Pessoas              em Recursos Humanos.{" "}</h5>
              <div className={style.Paula}>{" "}<img src={Paula} alt="Paula" className={style.logo} /></div>
            <br></br>

            <h5>Dra. Marcela Clínica Geral e Dermatologia, atuando atualmente
            <br></br> na Santa Casa como Diretora de Ética e Internista.
            </h5>
            <div className={style.Marcela}>{" "}<img src={Marcela} alt="Marcela" className={style.logo} /></div>
            <br></br>

            <h5>Esteticista: Fabiana Oliveira Viana</h5>
            <div className={style.Fabiana}>{" "}<img src={Fabiana} alt="Fabiana" className={style.logo} /></div>
            <br></br>

            <h5>Enfermeiro: Estômato Terapeuta Theo Leandro Lourenço. </h5>
            <div className={style.Theo}>{" "}<img src={Theo} alt="Theo" className={style.logo} /></div>
            <br></br>

            <h5>Dr.Cristiano Assunção, Dentista,formado pela PUC em BH, Especialista em Cirurgia
            <br></br> Buço Máximo facial, Periodontista, Protesista, Implantodontista.</h5>
            <div className={style.Cristiano}>{" "}<img src={Cristiano} alt="Cristiano" className={style.logo} /></div>
            <br></br>

            <h5>Assistente e Auxiliar de Saúde Bucal: Bruna Carolina Pereira.</h5>
            <div className={style.Bruna}>{" "}<img src={Bruna} alt="Bruna" className={style.logo} /></div>
            <br></br>

            <h5>
              Equipe as dentistas : Dra. Renata Silveira e Dra Mariana Amorelli.
            </h5>
            <br></br>

            <h5>Serviços Gerais: Simone Cheder.</h5>
            <div className={style.Simone}>{" "}<img src={Simone} alt="Simone" className={style.logo} /></div>
            <br></br>

            </div>
            </div>


            </div>
    
            </SidebarHome>
        </TopbarHome>
     
   
  );
}

export default Equipe;
