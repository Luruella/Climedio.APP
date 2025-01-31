

import style from './NovoUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdSave } from "react-icons/md";
import Topbar from '../../Componentes/Topbar/Topbar';
import UsuarioApi from '../../services/Usuario.Api';
import Sidebar from '../../Componentes/Sidebar/Sidebar';


export function NovoUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [TiposUsuarios, setTiposUsuarios] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTipoUsuarios = async () => {
            try {
                const tipos = await UsuarioApi.listarTiposUsuarioAsync();
                setTiposUsuarios(tipos);
            } catch (error) {
                console.error('Erro ao buscar tipos de usuários:', error);
            }
        };
        fetchTipoUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        if (isFormValid()) {
            await UsuarioApi.criarAsync(nome, email, tipoUsuario, senha);
            navigate('/usuarios')
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    const isFormValid = () => {
        return nome && email && senha && tipoUsuario;
    };



    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                    <h3>Novo Usuário</h3>

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
                                value={"NomeSocial"}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu CPF"
                                name="CPF"
                                value={"CPF"}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu Telefone"
                                name="Telefone"
                                value={"Telefone"}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="Data Nascimento" className="mb-3">
                            <Form.Label>Data Nascimento</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite sua Data de Nascimento"
                                name="CPF"
                                value={"Data Nascimento"}
                                onChange={(e) => setNome(e.target.value)}
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
                                {TiposUsuarios.map((tipo) => (
                                    <option value={tipo.id}>{tipo.nome}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Button variant='primary' type='submit' disabled={!isFormValid()}>
                            <MdSave/> Salvar
                        </Button>

                    </Form>
                </div>
           </Topbar>
        </Sidebar>
    ) 
}