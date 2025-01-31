import React, { useState } from 'react';
import styles from './Calendario.module.css';
import ModalEscolherHorario from '../ModalEscolherHorario/ModalEscolherHorario'; // Novo modal para escolher horário
import ModalAgendamento from '../ModalAgendamento/ModalAgendamento'; // Modal para agendar após escolher o horário

const Calendario = () => {
  const [data, setData] = useState(new Date());
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [modalEscolherHorarioAberto, setModalEscolherHorarioAberto] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  const gerarMesAno = () => {
    const mes = data.toLocaleString('default', { month: 'long' });
    const ano = data.getFullYear();
    return `${mes} ${ano}`;
  };

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const diasDoMes = () => {
    const primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
    const diasNoMes = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
    let dias = [];

    for (let i = 1; i <= diasNoMes; i++) {
      dias.push(i);
    }

    return dias;
  };

  const abrirModalEscolherHorario = (dia) => {
    setDiaSelecionado(dia);
    setModalEscolherHorarioAberto(true);
  };

  const abrirModalAgendamento = (horario) => {
    setHorarioSelecionado(horario);
    setModalEscolherHorarioAberto(false); // Fecha o modal de escolher horário
    setModalAgendamentoAberto(true); // Abre o modal de agendamento
  };

  const fecharModal = () => {
    setModalAgendamentoAberto(false);
    setDiaSelecionado(null);
    setHorarioSelecionado('');
  };

  return (
    <div className={styles.calendario}>
      <header className={styles.header}>
        <button onClick={() => setData(new Date(data.getFullYear(), data.getMonth() - 1))}>&lt;</button>
        <h2>{gerarMesAno()}</h2>
        <button onClick={() => setData(new Date(data.getFullYear(), data.getMonth() + 1))}>&gt;</button>
      </header>
      <div className={styles.diasSemana}>
        {diasDaSemana.map((dia, index) => (
          <div key={index} className={styles.diaSemana}>
            {dia}
          </div>
        ))}
      </div>
      <div className={styles.dias}>
        {diasDoMes().map((dia, index) => (
          <div
            key={index}
            className={styles.dia}
            onClick={() => abrirModalEscolherHorario(dia)} // Abre o modal para escolher o horário
          >
            {dia}
          </div>
        ))}
      </div>

      {/* Modal para escolher o horário */}
      {modalEscolherHorarioAberto && (
        <ModalEscolherHorario
          dia={diaSelecionado}
          abrirModalAgendamento={abrirModalAgendamento}
          fecharModal={() => setModalEscolherHorarioAberto(false)}
        />
      )}

      {/* Modal para agendar após escolher o horário */}
      {modalAgendamentoAberto && (
        <ModalAgendamento
          dia={diaSelecionado}
          horario={horarioSelecionado}
          fecharModal={fecharModal}
        />
      )}
    </div>
  );
};

export default Calendario;
