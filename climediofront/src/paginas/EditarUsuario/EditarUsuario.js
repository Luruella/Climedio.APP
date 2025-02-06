import Sidebar from "../../Componentes/Sidebar/Sidebar";
import Topbar from "../../Componentes/Topbar/Topbar";
import style from "./EditarUsuario.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UsuarioApi from "../../services/UsuarioApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { MdSave } from "react-icons/md";

export function EditarUsuario() {
  const location = useLocation();
  const navigate = useNavigate();

  const [id] = useState(location.state);

  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [tiposUsuarios, setTiposUsuarios] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const usuarioAtualizar = {
        Id: id,
        Nome: nome,
        NomeSocial: nomeSocial,
        Email: email,
        Cpf: cpf,
        Telefone: telefone,
        Endereco: endereco,
        TipoUsuarioId: parseInt(tipoUsuario),
      };

      console.log(usuarioAtualizar);

      await UsuarioApi.atualizarInformacoesAsync(usuarioAtualizar);
      navigate("/usuarios");
    } catch (error) {
      console.error("Erro ao atualizar informações do usuário:", error);
    }
  };

  function Perfil(usuario) {
    setNome(usuario.nome);
    setNomeSocial(usuario.nomeSocial);
    setEmail(usuario.email);
    setCpf(usuario.cpf);
    setTelefone(usuario.telefone);
    setEndereco(usuario.endereco);
    setTipoUsuario(usuario.tipoUsuarioId);
  };

  useEffect(() => {
    const fetchTipoUsuarios = async () => {
      try {
        const usuario = await UsuarioApi.obterAsync(id);
        Perfil(usuario);
        const tipos = await UsuarioApi.listarTiposUsuarios();
        setTiposUsuarios(tipos);
      } catch (error) {
        console.error("Erro ao buscar tipos de usuários:", error);
      }
    };
    fetchTipoUsuarios();
  }, []);

  return (
    <Sidebar>
      <Topbar>
        <div className={style.pagina_conteudo}>
          <h3>Editar Usuário</h3>

          <br></br>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu Nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>NomeSocial</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu Nome Social"
                name="Nome Social"
                value={nomeSocial}
                onChange={(e) => setNomeSocial(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu CPF"
                name="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu Telefone"
                name="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTipoUsuario" className="mb-3">
              <Form.Label>Tipo de Usuário</Form.Label>
              <Form.Control
                as="select"
                name="tipoUsuario"
                value={tipoUsuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
                required
              >
                <option value="">Selecione o tipo de usuário</option>
                {tiposUsuarios.map((tipo) => (
                  <option value={tipo.key}>{tipo.value}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEndereco" className="mb-3">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço"
                name="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              <MdSave /> Salvar
            </Button>
          </Form>
        </div>
      </Topbar>
    </Sidebar>
  );
}
