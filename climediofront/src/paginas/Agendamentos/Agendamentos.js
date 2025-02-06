import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./Agendamentos.module.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";

import agendamentoApi from "../../services/AgendamentoApi";

export function PageAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  async function carregarAgendamentos() {
    try {
      const listaAgendamentos =
        await agendamentoApi.listarTodosAgendamentosAsync(true);
      console.log(listaAgendamentos);
      setAgendamentos(listaAgendamentos);
    } catch (error) {
      console.error("Erro ao carregar agendamentos:", error);
    }
  }

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  return (
    <Sidebar>
      <Topbar>
        <div className={style.pagina_conteudo}>
          <div className={style.pagina_cabecalho}>
            <h3>Agendamentos</h3>
            <Link to="/NovoAgendamento" className={style.botao_novo}>
              + Novo
            </Link>
          </div>

          <div className={style.tabela}>
            <Table responsive id={style.larguratabela}>
              <thead className={style.tabela_cabecalho}>
                <tr>
                  <th>Profissional</th>
                  <th>Paciente</th>
                  <th>Valor</th>
                  <th>Data e Hora</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className={style.tabela_corpo}>
                {agendamentos.map((agendamento) => (
                  <tr key={agendamento.id}>
                    <td>{agendamento.usuarioProfissionalNome}</td>
                    <td>{agendamento.usuarioPacienteNome}</td>
                    <td>R$ {agendamento.valor}</td>
                    <td>
                      {new Date(agendamento.dataHora).toLocaleString("pt-BR")}
                    </td>

                    <td>
                      <Link
                        to="/usuario/editar"
                        // state={usuario.usuarioId}
                        className={style.botao_editar}
                      >
                        <MdEdit />
                      </Link>
                      <button
                        // onClick={() => handleClickDeletar(usuario.usuarioId)}
                        className={style.botao_deletar}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* <Modal show={mostrarModal} onHide={handleFecharModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Tem certeza que deseja deletar o usuário{" "}
              {usuarioSelecionado?.nome}?
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleFecharModal}>
                Cancelar
              </Button>

              <Button variant="danger" onClick={handleDeletar}>
                Deletar
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </Topbar>
    </Sidebar>
  );
}
