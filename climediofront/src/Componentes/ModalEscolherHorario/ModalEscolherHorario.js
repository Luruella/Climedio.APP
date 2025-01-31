import React from "react";
import styles from "./ModalEscolherHorario.module.css";

const ModalEscolherHorario = ({ dia, abrirModalAgendamento, fecharModal }) => {
  const horariosDisponiveis = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ]; // Horários disponíveis para agendamento

  return (
    <div className={styles.modal}>
      <div className={styles.modalConteudo}>
        <h3>Escolha o horário para o dia {dia}</h3>
        <div className={styles.horarios}>
          {horariosDisponiveis.map((horario, index) => (
            <button
              key={index}
              className={styles.horarioBtn}
              onClick={() => abrirModalAgendamento(horario)} // Passa o horário selecionado
            >
              {horario}
            </button>
          ))}
        </div>
        <button onClick={fecharModal} className={styles.fecharBtn}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalEscolherHorario;
