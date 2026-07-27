// ======================================================
// Manos Tech Platform
// Visitante Service
// ======================================================

import api from "../core/api.js";
import visitanteRepository from "../repositories/visitante.repository.js";

class VisitanteService {

    async buscar(id) {

        return api.execute(async () => {

            return await visitanteRepository.buscar(id);

        });

    }

    async listar() {

        return api.execute(async () => {

            return await visitanteRepository.listar();

        });

    }

    async listarPorUnidade(unidadeId) {

        return api.execute(async () => {

            return await visitanteRepository.listarPorUnidade(unidadeId);

        });

    }

    async buscarPorDocumento(documento) {

        return api.execute(async () => {

            return await visitanteRepository.buscarPorDocumento(documento);

        });

    }

    async buscarPorTelefone(telefone) {

        return api.execute(async () => {

            return await visitanteRepository.buscarPorTelefone(telefone);

        });

    }

    async buscarPorEmail(email) {

        return api.execute(async () => {

            return await visitanteRepository.buscarPorEmail(email);

        });

    }

    async buscarPorNome(unidadeId, nome) {

        return api.execute(async () => {

            return await visitanteRepository.buscarPorNome(
                unidadeId,
                nome
            );

        });

    }

    async total(unidadeId) {

        return api.execute(async () => {

            return await visitanteRepository.total(unidadeId);

        });

    }

    async novosHoje(unidadeId) {

        return api.execute(async () => {

            return await visitanteRepository.novosHoje(unidadeId);

        });

    }

    async clientesFrequentes(unidadeId) {

        return api.execute(async () => {

            return await visitanteRepository.clientesFrequentes(
                unidadeId
            );

        });

    }

    async criar(dados) {

        return api.execute(async () => {

            return await visitanteRepository.criar(dados);

        });

    }

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await visitanteRepository.atualizar(id, dados);

        });

    }

    async excluir(id) {

        return api.execute(async () => {

            return await visitanteRepository.excluir(id);

        });

    }

}

export default new VisitanteService();
