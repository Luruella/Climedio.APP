import React, { useEffect, useState } from "react";
import styles from "./ModalAgendamento.module.css";
import UsuarioApi from "../../services/UsuarioApi";
import agendamentoApi from "../../services/AgendamentoApi";

const ModalAgendamento = ({ dia, horario, fecharModal }) => {
  const [pacientes, setPacientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);

  const hoje = new Date();
  const mesAtual = (hoje.getMonth() + 1).toString().padStart(2, "0");
  const anoAtual = hoje.getFullYear();
  const dataCompleta = `${dia}/${mesAtual}/${anoAtual}`;


  const [nomePaciente, setNomePaciente] = useState("");
  const [nomeProfissional, setNomeProfissional] = useState("");
  const [idPaciente, setIdPaciente] = useState(null); // Novo estado para armazenar o ID do paciente
  const [idProfissional, setIdProfissional] = useState(null); // Novo estado para armazenar o ID do profissional
  const [detalhes, setDetalhes] = useState("");
  const [valor, setValor] = useState(null);
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
  const [profissionaisFiltrados, setProfissionaisFiltrados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  debugger

  const handlePacienteChange = (e) => {
    const valor = e.target.value;
    setNomePaciente(valor);

    if (valor.trim() !== "") {
      const resultados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().startsWith(valor.toLowerCase())
      );
      setPacientesFiltrados(resultados);
    } else {
      setPacientesFiltrados([]);
    }
  };

  const handleProfissionalChange = (e) => {
    const valor = e.target.value;
    setNomeProfissional(valor);

    if (valor.trim() !== "") {
      const resultados = profissionais.filter((profissional) =>
        profissional.nome.toLowerCase().startsWith(valor.toLowerCase())
      );
      setProfissionaisFiltrados(resultados);
    } else {
      setProfissionaisFiltrados([]);
    }
  };

  const handlePacienteSelect = (paciente) => {
    setNomePaciente(paciente.nome);
    setIdPaciente(paciente.usuarioId); // Armazena o ID do paciente selecionado
    setPacientesFiltrados([]); // Limpar sugestões após seleção
  };

  const handleProfissionalSelect = (profissional) => {
    setNomeProfissional(profissional.nome);
    setIdProfissional(profissional.usuarioId); // Armazena o ID do profissional selecionado
    setProfissionaisFiltrados([]); // Limpar sugestões após seleção
  };

  function formatarDataHora(dia, horario) {
    const data = new Date();
    const [hora, minuto] = horario.split(":");

    // Ajuste a data para incluir o mês correto e os outros componentes.
    data.setUTCDate(dia);
    data.setUTCMonth(data.getMonth()); // Mantenha o mês atual.
    data.setUTCHours(hora, minuto, 0, 0);

    return data.toISOString(); // Isso agora irá salvar com ano, mês, dia e hora.
  }

  const salvarAgendamento = async () => {
    setLoading(true);
    setErro("");
    const dataHora = formatarDataHora(dia, horario);

    try {
      await agendamentoApi.criarAsync(
        idProfissional,
        idPaciente,
        valor,
        dataHora,
        detalhes
      );

      alert("Agendamento realizado com sucesso!");
      fecharModal(); // Fechar a modal após sucesso
    } catch (error) {
      setErro("Erro ao salvar o agendamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const combinarDataHora = () => {
    const [ano, mes, diaFormatado] = dia.split("-");
    const [hora, minutos] = horario.split(":");

    const dateTime = new Date(
      Date.UTC(ano, mes - 1, diaFormatado, hora, minutos)  // Usar mes - 1 porque meses começam de 0
    );

    return dateTime.toISOString();
  };

  async function carregarPacientes() {
    try {
      const listaUsuarios = await UsuarioApi.listarPacientes();
      setPacientes(listaUsuarios);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }

  async function carregarProfissionais() {
    try {
      const listaUsuarios = await UsuarioApi.listarProfissionais();
      setProfissionais(listaUsuarios);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }

  useEffect(() => {
    carregarPacientes();
    carregarProfissionais();
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modalConteudo}>
        <h3>
          Agendar para o dia {dia} às {horario}
        </h3>

        {erro && <div className={styles.erro}>{erro}</div>}

        <div className={styles.formulario}>
          <input
            type="text"
            placeholder="Nome do paciente"
            value={nomePaciente}
            onChange={handlePacienteChange}
          />
          {nomePaciente && pacientesFiltrados.length > 0 && (
            <div className={styles.sugestoes}>
              {pacientesFiltrados.map((paciente) => (
                <div
                  key={paciente.id}
                  className={styles.sugestao}
                  onClick={() => handlePacienteSelect(paciente)}
                >
                  {paciente.nome} ({paciente.tipoUsuario})
                </div>
              ))}
            </div>
          )}

          <input
            type="text"
            placeholder="Nome do profissional"
            value={nomeProfissional}
            onChange={handleProfissionalChange}
          />
          {nomeProfissional && profissionaisFiltrados.length > 0 && (
            <div className={styles.sugestoes}>
              {profissionaisFiltrados.map((profissional) => (
                <div
                  key={profissional.id}
                  className={styles.sugestao}
                  onClick={() => handleProfissionalSelect(profissional)}
                >
                  {profissional.nome} ({profissional.tipoUsuario})
                </div>
              ))}
            </div>
          )}

          <input
            type="number"
            placeholder="Valor da Consulta"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          <textarea
            placeholder="Observaçoes"
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
          />
          <button onClick={salvarAgendamento} disabled={loading}>
            {loading ? "Salvando..." : "Agendar"}
          </button>
        </div>

        <button onClick={fecharModal} className={styles.fecharBtn}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalAgendamento;
