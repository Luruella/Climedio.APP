import { useState, useEffect } from "react";
import agendamentoApi from "../../services/AgendamentoApi";
import UsuarioApi from "../../services/UsuarioApi";
import { Button, Form } from "react-bootstrap";
import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./NovoAgendamento.module.css";

function NovoAgendamento() {
  // Estado para armazenar os valores do formulário
  const [profissionalId, setProfissionalId] = useState("");
  const [pacienteId, setPacienteId] = useState("");
  const [preco, setPreco] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [descricao, setDescricao] = useState("");

  // Estado para armazenar os profissionais e pacientes
  const [profissionais, setProfissionais] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  // Função para carregar os profissionais e pacientes
  const carregarUsuarios = async () => {
    try {
      const responsePaciente = await UsuarioApi.listarPacientes();
      const responseProfissional = await UsuarioApi.listarProfissionais();
      console.log(responsePaciente)
      console.log(responseProfissional)

      setPacientes(responsePaciente); // Armazena os pacientes
      setProfissionais(responseProfissional); // Armazena os profissionais
    } catch (error) {
      console.error("Erro ao carregar usuários", error);
    }
  };

  // Função para criar o agendamento
  const criarAsync = async () => {
    try {
      const response = await agendamentoApi.criarAsync(
        profissionalId,
        pacienteId,
        preco,
        dataHora,
        descricao
      );
      console.log("Agendamento criado com sucesso", response.data);
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Sidebar>
      <Topbar>
        <div className={style.pagina_conteudo}>
          <div className={style.pagina_cabecalho}>
            <h3>Criar Agendamento</h3>
          </div>

          <Form
            className={style.formulario}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Selecionar Profissional */}
            <Form.Group controlId="formProfissional">
              <Form.Label>Profissional</Form.Label>
              <Form.Control
                as="select"
                value={profissionalId}
                onChange={(e) => setProfissionalId(e.target.value)}
              >
                <option value="">Selecione um profissional</option>
                {profissionais?.map((profissional) => (
                  <option
                    key={profissional.usuarioId}
                    value={profissional.usuarioId}
                  >
                    {profissional.nome} ({profissional.tipoUsuario}) 
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Selecionar Paciente */}
            <Form.Group controlId="formPaciente">
              <Form.Label>Paciente</Form.Label>
              <Form.Control
                as="select"
                value={pacienteId}
                onChange={(e) => setPacienteId(e.target.value)}
              >
                <option value="">Selecione um paciente</option>
                {pacientes?.map((paciente) => (
                  <option key={paciente.usuarioId} value={paciente.usuarioId}>
                    {paciente.nome}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Preço */}
            <Form.Group controlId="formPreco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
              />
            </Form.Group>

            {/* Data e Hora */}
            <Form.Group controlId="formDataHora">
              <Form.Label>Data e Hora</Form.Label>
              <Form.Control
                type="datetime-local"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
              />
            </Form.Group>

            {/* Descrição */}
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Observações sobre o agendamento"
              />
            </Form.Group>

            {/* Botão para criar o agendamento */}
            <Button variant="primary" onClick={criarAsync}>
              Criar Agendamento
            </Button>
          </Form>
        </div>
      </Topbar>
    </Sidebar>
  );
}

export default NovoAgendamento;
