import Sidebar from '../../Componentes/Sidebar/Sidebar';
import Topbar from '../../Componentes/Sidebar/Sidebar';
import style from './EditarAgendamento.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AgendamentoApi from '../../services/AgendamentoApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { MdSave } from "react-icons/md";

export function EditarAgendamento() {

    const location = useLocation();
    const navigate = useNavigate();

    const [id] = useState(location.state);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipoAgendamento] = useState('');
    const [tiposAgendamentos, setTiposAgendamentos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log("Dados enviados:", { id, nome, email, tipo });
            await AgendamentoApi.atualizarAsync(id, nome, email, tipo);
            navigate('/Agendamentos');
        } else {
            alert('Por favor,  preencha todos  os campos.');
        }
    };

    useEffect(() => {
        const buscarTiposAgendamentos = async () => {
            try {
                const tipos = await AgendamentoApi.listarTiposAgendamentos();
                setTiposAgendamentos(tipos);
            } catch (error) {
                console.error('Erro ao buscar tipos de usuário:', error);
            }
        };

        const buscarDadosAgendamento = async () => {
            try {
                const Agendamento = await AgendamentoApi.obterAsync(id);
                setNome(Agendamento.nome);
                setEmail(Agendamento.email);
                setTipoAgendamento(Agendamento.tipo);
            } catch (error) {
                console.error('Erro ao buscar dados do Agendamento:', error);
            }
        }

        buscarTiposAgendamentos();
        buscarDadosAgendamento();

    }, [id]);

    const isFormValid = () => {
        return nome && email && tipo;
    };

    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                    <h3>Editar usuário</h3>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTipoAgendamento" className="mb-3">
                            <Form.Label>Tipo de Usuário</Form.Label>
                            <Form.Control
                                as="select"
                                name="tipoAgendamento"
                                value={tipo}
                                onChange={(e) => setTipoAgendamento(e.target.value)}
                                required
                            >

                                {tiposAgendamentos.map((tipo) => (
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