import  Sidebar  from '../../Componentes/Sidebar/Sidebar';
import  Topbar  from '../../Componentes/Topbar/Topbar';
import style from './Agendamentos.module.css';
import Calendario from '../../Componentes/Calendario/Calendario';

export function PageAgendamentos() {

    

    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                <Calendario/>
                    
                </div>
            </Topbar>
        </Sidebar>
    );
}