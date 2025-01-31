import { HTTPClient } from "./Client";

const UsuarioApi = {
    async obterAsync(usuarioId) {
        try {
            const response = await HTTPClient.get(`/Usuario/Obter/${usuarioId}`);
            return response.data;
        }
        catch (error) {
            console.error("Erro ao obter usuário: ", error);
            throw error;
        }
    },

    async listarAsync(ativos) {
        try {
            const response = await HTTPClient.get(`/Usuario/Listar?ativos=${ativos}`);
            return response.data;

        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            throw error;
        }
    },

    async criarAsync(nome, nomeSocial, cpf, telefone, dataNascimento, email, tipoUsuario, senha, endereco) {
        try {
            const usuarioCriar = {
                Nome: nome,
                Email: email,
                Senha: senha,
                TipoUsuario: Number(tipoUsuario),
                Cpf: cpf,
                NomeSocial: nomeSocial,
                Telefone: telefone,
                DataNascimento: dataNascimento,
                Endereco: endereco
            };

            console.log(usuarioCriar)
            const response = await HTTPClient.post('/Usuario/Adicionar', usuarioCriar);
            
            return response.data;
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    },

    async atualizarAsync(id, nome, email, tipoUsuarioId) {
        try {
            const usuarioAtualizar = {
                Id: id,
                Nome: nome,
                Email: email,
                Tipo: parseInt(tipoUsuarioId)
            };
            console.log('aquiiiii', usuarioAtualizar);
            const response = await HTTPClient.put(`/Usuario/Atualizar`, usuarioAtualizar);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    },

    async deletarAsync(id) {
        try {
            const response = await HTTPClient.delete(`/Usuario/Remover/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            throw error;
        }
    },

    async listarTiposUsuarioAsync() {
        try {
            const response = await HTTPClient.get(`/Usuario/ListarTipoUsuario`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar tipos de usuário:", error);
            throw error;
        }
    },

    async alterarSenhaAsync(id, senha, senhaAntiga) {
        try {
            const usuarioAlterarSenha = {
                Id: id,
                Senha: senha,
                SenhaAntiga: senhaAntiga
            };
            const response = await HTTPClient.put(`/Usuario/AlterarSenha`, usuarioAlterarSenha);
            return response.data;
        } catch (error) {
            console.error("Erro ao alterar senha do usuário:", error);
            throw error;
        }
    },

    async restaurarAsync(usuarioId) {
        try {
            const response = await HTTPClient.put(`/Usuario/Restaurar/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao restaurar usuário:", error);
            throw error;
        }
    },

    async verificarLogin(email, senha) {
        const usuario = {
            Email: email,
            Senha: senha
        }

        const response = await HTTPClient.post(`Usuario/VerificarLogin`, usuario);
        return response.data;
    },

    async listarUsuarios() {
        const response = await HTTPClient.get(`Usuario/ListarUsuarios`);
        return response.data;
    },

    async listarTiposUsuarios() {
        const response = await HTTPClient.get(`Usuario/ListarTiposUsuario`);
        return response.data;
    },

    async listarPacientes() {
        const response = await HTTPClient.get(`Usuario/ListarUsuariosPacientes`);
        return response.data;
    },

    async listarProfissionais() {
        const response = await HTTPClient.get(`Usuario/ListarUsuariosProfissional`);
        return response.data;
    }
}

export default UsuarioApi;