// ======================================================
// Manos Tech Platform
// Portal Controller
// ======================================================

import portalService from "../services/portal.service.js";
import campanhaService from "../services/campanha.service.js";
import visitanteService from "../services/visitante.service.js";
import loading from "../core/loading.js";
import notifications from "../core/notifications.js";

class PortalController {

    constructor() {

        this.operacao = null;

        this.portal = null;

        this.campanhas = [];

        this.visitante = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    async init(operacaoId) {

        try {

            loading.show(
                "Carregando Portal",
                "Preparando experiência..."
            );

            await this.carregarPortal(operacaoId);

            await this.carregarCampanhas(operacaoId);

            this.aplicarTema();

            this.renderizarCampanhas();

            this.bindEventos();

        }

        finally {

            loading.hide();

        }

    }

    // ==================================================
    // Portal
    // ==================================================

    async carregarPortal(operacaoId) {

        const response = await portalService.buscarPorOperacao(

            operacaoId

        );

        if (!response.success) {

            throw new Error("Portal não encontrado.");

        }

        this.portal = response.data;

        this.operacao = response.data.unidades;

    }

    // ==================================================
    // Campanhas
    // ==================================================

    async carregarCampanhas(operacaoId) {

        const response = await campanhaService.listarAtivas(

            operacaoId

        );

        this.campanhas = response.success

            ? response.data

            : [];

    }

    // ==================================================
    // Tema
    // ==================================================

    aplicarTema() {

        if (!this.portal) return;

        document.documentElement.style.setProperty(

            "--primary",

            this.portal.cor_primaria || "#2563eb"

        );

        document.documentElement.style.setProperty(

            "--secondary",

            this.portal.cor_secundaria || "#0f172a"

        );

        const logo = document.getElementById("portalLogo");

        if (logo && this.portal.logo_url) {

            logo.src = this.portal.logo_url;

        }

        const texto = document.getElementById("portalMensagem");

        if (texto) {

            texto.innerHTML =

                this.portal.texto_boas_vindas ||

                "Bem-vindo!";

        }

    }

    // ==================================================
    // Campanhas
    // ==================================================

    renderizarCampanhas() {

        const container = document.getElementById(

            "portalCampanhas"

        );

        if (!container) return;

        container.innerHTML = "";

        this.campanhas.forEach((campanha) => {

            container.innerHTML += `

                <div class="campanha">

                    <img
                        src="${campanha.imagem_url}"
                        alt="${campanha.titulo}"
                    >

                </div>

            `;

        });

    }

    // ==================================================
    // Cadastro
    // ==================================================

    async cadastrarVisitante(dados) {

        const existente = await visitanteService.buscarPorWhatsapp(

            this.operacao.id,

            dados.whatsapp

        );

        if (

            existente.success &&

            existente.data

        ) {

            this.visitante = existente.data;

            return existente.data;

        }

        const novo = await visitanteService.criar({

            unidade_id: this.operacao.id,

            nome: dados.nome,

            whatsapp: dados.whatsapp,

            email: dados.email,

            aceitou_lgpd: dados.aceitou_lgpd,

            primeiro_acesso: new Date().toISOString(),

            ultimo_acesso: new Date().toISOString(),

            total_visitas: 1,

            ativo: true

        });

        this.visitante = novo.data;

        return novo.data;

    }

    // ==================================================
    // Internet
    // ==================================================

    liberarInternet() {

        notifications.success(

            "Internet liberada."

        );

        if (

            this.operacao.link_redirecionamento

        ) {

            setTimeout(() => {

                window.location.href =

                    this.operacao.link_redirecionamento;

            }, 1500);

        }

    }

    // ==================================================
    // Eventos
    // ==================================================

    bindEventos() {

        const form = document.getElementById(

            "portalForm"

        );

        if (!form) return;

        form.addEventListener(

            "submit",

            async (e) => {

                e.preventDefault();

                const dados = {

                    nome: form.nome.value,

                    whatsapp: form.whatsapp.value,

                    email: form.email.value,

                    aceitou_lgpd: form.lgpd.checked

                };

                await this.cadastrarVisitante(

                    dados

                );

                this.liberarInternet();

            }

        );

    }

}

export default new PortalController();
