

import style from './NovoUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdSave } from "react-icons/md";
import Topbar from '../../Componentes/Topbar/Topbar';
import UsuarioApi from '../../services/UsuarioApi';
import Sidebar from '../../Componentes/Sidebar/Sidebar';


export function NovoUsuario() {

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [TiposUsuarios, setTiposUsuarios] = useState([]);
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTipoUsuarios = async () => {
            try {
                const tipos = await UsuarioApi.listarTiposUsuarios();
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
            await UsuarioApi.criarAsync(nome, nomeSocial, cpf, telefone, dataNascimento, email, tipoUsuario, senha, endereco);
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

                        <Form.Group controlId="Data Nascimento" className="mb-3">
                            <Form.Label>Data Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Digite sua Data de Nascimento"
                                name="CPF"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
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
                                    <option value={tipo.key}>{tipo.value}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formSenha" className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formEndereco" className="mb-3">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Endereço"
                                name="endereco"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                required/>
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