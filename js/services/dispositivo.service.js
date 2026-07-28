// ======================================================
// Manos Tech Platform
// Dispositivo Service
// ======================================================

import api from "../core/api.js";
import dispositivoRepository from "../repositories/dispositivo.repository.js";

class DispositivoService {

    async buscar(id) {

        return api.execute(async () => {

            return await dispositivoRepository.buscar(id);

        });

    }

    async listar() {

        return api.execute(async () => {

            return await dispositivoRepository.listar();

        });

    }

    async listarPorVisitante(visitanteId) {

        return api.execute(async () => {

            return await dispositivoRepository.listarPorVisitante(
                visitanteId
            );

        });

    }

    async listarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await dispositivoRepository.listarPorOperacao(
                operacaoId
            );

        });

    }

    async listarPorTipo(operacaoId, tipo) {

        return api.execute(async () => {

            return await dispositivoRepository.listarPorTipo(
                operacaoId,
                tipo
            );

        });

    }

    async buscarDispositivo(visitanteId, tipo, modelo) {

        return api.execute(async () => {

            return await dispositivoRepository.buscarDispositivo(
                visitanteId,
                tipo,
                modelo
            );

        });

    }

    async criar(dados) {

        return api.execute(async () => {

            return await dispositivoRepository.criar(dados);

        });

    }

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await dispositivoRepository.atualizar(
                id,
                dados
            );

        });

    }

    async registrarAcesso(id) {

        return api.execute(async () => {

            const dispositivo = await dispositivoRepository.buscar(id);

            return await dispositivoRepository.incrementarAcessos(
                id,
                dispositivo.total_acessos || 0
            );

        });

    }

    async excluir(id) {

        return api.execute(async () => {

            return await dispositivoRepository.excluir(id);

        });

    }

}

export default new DispositivoService();
