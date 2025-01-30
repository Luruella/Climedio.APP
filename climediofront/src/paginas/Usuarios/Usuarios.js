import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./Usuarios.module.css";
import { Form, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import UsuarioApi from "../../services/UsuarioApi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Verifique se a exportação está correta (export default Usuarios)
function Usuarios() {
  const [search, setSearch] = useState(""); // guarda o valor digitado na pesquisa
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [tiposUsuarios, setTiposUsuarios] = useState([]);
  const [tipoUsuarioSelecionado, setTipoUsuarioSelecionado] = useState("");

  const handleClickDeletar = (usuario) => {
    setUsuarioSelecionado(usuario);
    setMostrarModal(true);
  };

  const handleDeletar = async () => {
    try {
      await UsuarioApi.deletarAsync(usuarioSelecionado.id);
      setUsuarios(usuarios.filter((u) => u.id !== usuarioSelecionado.id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    } finally {
      handleFecharModal();
    }
  };

  const handleFecharModal = () => {
    setMostrarModal(false);
    setUsuarioSelecionado(null);
  };



  async function carregarUsuarios() {
    try {
      const listaUsuarios = await UsuarioApi.listarUsuarios();
      console.log("AQUIIIIII", listaUsuarios);
      setUsuarios(listaUsuarios);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Sidebar>
      <Topbar>
        <div className={style.pagina_conteudo}>
          <div className={style.pagina_cabecalho}>
            <h3>Usuarios</h3>
            <Link to="/usuario/novo" className={style.botao_novo}>
              + Novo
            </Link>
          </div>

          

          <div className={style.tabela}>
            <Table responsive>
              <thead className={style.tabela_cabecalho}>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Tipo de Usuário</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className={style.tabela_corpo}>
                {usuarios.map((usuario) => (
                  <tr key={usuario.usuarioId}>
                    <td>{usuario.nome}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.tipoUsuario}</td>
                    <td>
                      <Link
                        to="/usuario/editar"
                        state={usuario.id}
                        className={style.botao_editar}
                      >
                        <MdEdit />
                      </Link>
                      <button
                        onClick={() => handleClickDeletar(usuario)}
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

          <Modal show={mostrarModal} onHide={handleFecharModal}>
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
          </Modal>
        </div>
      </Topbar>
    </Sidebar>
  );
}

export default Usuarios;
