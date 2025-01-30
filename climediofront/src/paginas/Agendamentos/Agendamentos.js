import { Sidebar } from '../../componentes/Sidebar/Sidebar';
import { Topbar } from '../../componentes/Topbar/Topbar';
import style from './Agendamentos.module.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react';
import agendamentoApi from '../../services/AgendamentoAplicacao';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function setAgendamentosSelecionado() {

    const [Agendamentos, set] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [Agendamentoselecionado, setAgendamentosSelecionado] = useState(null);

    const handleClickDeletar = (agendamento) => {
        setAgendamentoselecionado(agendamento)
        setMostrarModal(true);
    };

    const handleDeletar = async () => {
        try {
            await agendamentoApi.deletarAsync(Agendamentoselecionado.id);
            setAgendamentos(Agendamentos.filter(p => p.id !== Agendamentoselecionado.id));
        } catch (error) {
            console.error("Erro ao deletar agendamento:", error);
        } finally {
            handleFecharModal()
        }
    };

    const handleFecharModal = () => {
        setMostrarModal(false);
        setAgendamentoselecionado(null);
    };

    async function carregarAgendamentos() {
        try {
            const listaAgendamentos = await agendamentoApi.listarAsync(true);
            setAgendamentos(listaAgendamentos);
        } catch (error) {
            console.error("Erro ao carregar Agendamentos:", error);
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
                        <Link to='/agendamento/novo' className={style.botao_novo}>+ Novo</Link>
                    </div>

                    <div className={style.tabela}>
                        <Table responsive>
                            <thead className={style.tabela_cabecalho}>
                                <tr>
                                    <th>Nome</th>
                                    <th className={style.tabela_acoes}>Ações</th>
                                </tr>
                            </thead>
                            <tbody className={style.tabela_corpo}>
                                {Agendamentos.map((agendamento) => (
                                    <tr key={agendamento.id}>
                                        <td>{agendamento.nome}</td>
                                        <td className={style.tabela_editar}>
                                            <Link to='/agendamento/editar' state={agendamento.id} className={style.botao_editar}>
                                                <MdEdit />
                                            </Link>
                                            <button onClick={() => handleClickDeletar(agendamento)} className={style.botao_deletar}>
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
                            Tem certeza que  deseja deletar o agendamento {Agendamentoselecionado?.nome}?
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