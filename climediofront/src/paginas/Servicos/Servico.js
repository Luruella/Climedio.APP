import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./Home.module.css";
import fotoEquipe from "../../assets/5.png";

function Servicos() {
  return (
    <div className={style.conteudo}>
      <Sidebar>
        <Topbar>
          <div className={style.pagina_conteudo}>
            <h3>Serviços</h3>
            <br></br>
            <h5>CLIMEDIO - Clínica Médica e Odontológica</h5>
            <br></br>

            <h3>
              Dr Fedor Sanchez Pedemonte, especialista em Clínica Geral,
              Pneumologia, Hematologia Infectologia Broncoscopista e
              Intensivista.{" "}
            </h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>Leny Sanchez que além de sócia</h3>
            <div className={style.Leny}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>
              Dra. Marcela atende Clínica Geral e Dermatologia, atuando tb na
              Santa Casa como Diretora de Ética e internista.
            </h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>Esteticista: Fabiana Oliveira Viana</h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>Enfermeiro Estômato Terapeuta Theo Leandro Lourenço. </h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>
              Dr.Cristiano Assunção, Dentista ,formado pela PUC em BH,
              Especialista em cirurgia Buço Máximo facial,
              Periodontista,Protesista, Implantodontista.
            </h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            <h3>
              Assistente a Auxiliar de Saúde Bucal: Bruna Carolina Pereira.
            </h3>
            <br></br>

            <h3>
              Equipe as dentistas : Dra. Renata Silveira e Dra Mariana Amorelli.
            </h3>
            <br></br>

            <h3>
              Coordenadora para Paula Morais com formação em Gestão de Pessoas
              em Recursos Humanos.{" "}
            </h3>
            <br></br>

            <h3>Serviços Gerais: Simone Cheder.</h3>
            <div className={style.fotoEquipe}>
              {" "}
              <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} />
            </div>
            <br></br>

            </div>
        </Topbar>
      </Sidebar>
    </div>
  );
}

export default Servico;
