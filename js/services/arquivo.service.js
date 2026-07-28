// ======================================================
// Manos Tech Platform
// Arquivo Service
// ======================================================

import api from "../core/api.js";
import arquivoRepository from "../repositories/arquivo.repository.js";

class ArquivoService {

    async listarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await arquivoRepository.listarPorOperacao(
                operacaoId
            );

        });

    }

    async listarPorTipo(operacaoId, tipo) {

        return api.execute(async () => {

            return await arquivoRepository.listarPorTipo(
                operacaoId,
                tipo
            );

        });

    }

    async upload(path, file) {

        return api.execute(async () => {

            return await arquivoRepository.upload(
                path,
                file
            );

        });

    }

    obterUrl(path) {

        return arquivoRepository.obterUrl(path);

    }

    async salvarRegistro(dados) {

        return api.execute(async () => {

            return await arquivoRepository.salvarRegistro(
                dados
            );

        });

    }

    async removerArquivo(path) {

        return api.execute(async () => {

            return await arquivoRepository.removerArquivo(
                path
            );

        });

    }

}

export default new ArquivoService();
