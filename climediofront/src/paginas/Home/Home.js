import  Sidebar  from '../../Componentes/Sidebar/Sidebar';
import Topbar  from '../../Componentes/Topbar/Topbar';
import style from './Home.module.css';
import fotoEquipe from '../../assets/5.png'

function Home() {
    return (
        <div className={style.conteudo}>
            <Sidebar>
                <Topbar>
                    <div className={style.pagina_conteudo}>
                        <h3>Home</h3>
                        <br></br>
                        <h5>CLIMEDIO - Clínica Médica e Odontológica</h5>
                        <br></br>
                        
<p className={style.textoHome}>A história da CLIMÉDIO inicia-se com Dr Fedor Sanchez Pedemonte, mais conhecido como Dr Sanchez, formado pela UFMG em BH no ano de 1969. 
Em 1990 instalou seu consultório médico em Alfenas MG.
Atendendo como especialista em Clínica Geral, Pneumologia, Hematologia Infectologia Broncoscopista e Intensivista. 
Em 2012, trouxe para trabalhar com ele, sua filha Dra Marcela Assunção, tb formada em Medicina pela  UNINCOR  de BH em 2011. Nesse ano inauguraram a CLIMÉDIO, sendo sócios: 
Dr Sanchez, Dra. Marcela e Leny Sanchez que além de sócia,  atuou tb como coordenadora por 11 anos.
Na Climédio, Dra. Marcela atende Clínica Geral  e Dermatologia, atuando tb na Santa casa como Diretora de Ética e internista . 
Em 2016 devido ao crescimento e necessidade, convidou para fazer parte de sua equipe a Esteticista Fabiana Oliveira Viana ,e  o enfermeiro Estômato Terapeuta Theo Leandro Lourenço . 
Em 2021, se encorporando à Climédio, chegou Dr. Cristiano Assunção, Dentista ,formado pela PUC em BH, especialista em cirurgia Buço Máximo facial, Periodontista,Protesista, Implantodontista.
Tem como sua assistente a Auxiliar de Saúde Bucal : Bruna Carolina Pereira. 
 Fazendo parte de sua equipe á sua equipe as dentistas : Dra. Renata Silveira e Dra Mariana Amorelli.
Em 2022 Leny Sanchez transferiu seu Cargo de Coordenadora para Paula Morais com formação em Gestão de Pessoas em Recursos Humanos. 
E temos tb uma colaboradora em Serviços Gerais , Simone Cheder.</p>
                       <div className={style.fotoEquipe}> <img src={fotoEquipe} alt="fotoEquipe" className={style.logo} /></div>
                    </div>
                </Topbar>
            </Sidebar>
        </div>
    )
}

export default Home