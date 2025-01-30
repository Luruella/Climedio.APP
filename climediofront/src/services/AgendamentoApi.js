import { HTTPClient } from "./Client";

const agendamentoApi = {
    async obterAsync(agendamentoId) {
        try {
            const response = await HTTPClient.get(`/agendamento/Obter/${agendamentoId}`);
            return response.data;
        }
        catch (error) {
            console.error("Erro ao obter agendamento: ", error);
            throw error;
        }
    },

    async listarAsync(ativos) {
        try {
            const response = await HTTPClient.get(`/agendamento/Listar?ativos=${ativos}`);
            return response.data;

        } catch (error) {
            console.error("Erro ao listar agendamentos:", error);
            throw error;
        }
    },

    async criarAsync(nome, descricao) {
        try {
            const agendamentoCriar = {
                nome: nome,
                descricao: descricao,
            };

            const response = await HTTPClient.post('/agendamento/Criar', agendamentoCriar);
            
            return response.data;
        } catch (error) {
            console.error("Erro ao criar agendamento:", error);
            throw error;
        }
    },

    async atualizarAsync(id, nome, descricao) {
        try {
            const agendamentoAtualizar = {
                Id: id,
                Nome: nome,
                Descricao: descricao,
            };

            const response = await HTTPClient.put(`/agendamento/Atualizar`, agendamentoAtualizar);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar agendamento:", error);
            throw error;
        }
    },

    async deletarAsync(agendamentoId) {
        try {
            const response = await HTTPClient.delete(`/agendamento/Deletar/${agendamentoId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar agendamento:", error);
            throw error;
        }
    },

    async restaurarAsync(agendamentoId) {
        try {
            const response = await HTTPClient.put(`/agendamento/Restaurar/${agendamentoId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao restaurar agendamento:", error);
            throw error;
        }
    },
}

export default agendamentoApi;