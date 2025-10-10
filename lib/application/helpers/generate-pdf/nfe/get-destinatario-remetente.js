"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinatarioRemetente = void 0;
const date_fns_1 = require("date-fns");
const linha_horizontal_1 = require("./linha-horizontal");
const linha_vertical_1 = require("./linha-vertical");
const titulo_1 = require("./titulo");
const campo_1 = require("./campo");
const default_1 = require("./default");
const secao_1 = require("./secao");
function getDestinatarioRemetente({ y, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo, larguraDoFormulario, dest, ide, }) {
    (0, linha_horizontal_1.linhaHorizontal)({
        x1: 0,
        x2: 0,
        y: y + 9,
        doc,
        ajusteX,
        ajusteY,
        margemDireita,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_horizontal_1.linhaHorizontal)({
        x1: 0,
        x2: 0,
        y: y + 29,
        doc,
        ajusteX,
        ajusteY,
        margemDireita,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_horizontal_1.linhaHorizontal)({
        x1: 0,
        x2: 0,
        y: y + 49,
        doc,
        ajusteX,
        ajusteY,
        margemDireita,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_horizontal_1.linhaHorizontal)({
        x1: 0,
        x2: 0,
        y: y + 69,
        doc,
        ajusteX,
        ajusteY,
        margemDireita,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 9.2,
        y2: y + 69,
        x: 0,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 9.2,
        y2: y + 29,
        x: 357.1,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 29.2,
        y2: y + 69,
        x: 274.9,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 49.2,
        y2: y + 69,
        x: 297.6,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 29.2,
        y2: y + 69,
        x: 396.75,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 9.2,
        y2: y + 69,
        x: 493.1,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, linha_vertical_1.linhaVertical)({
        y1: y + 9.2,
        y2: y + 69,
        x: larguraDoFormulario,
        doc,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, secao_1.secao)({
        doc,
        value: "DESTINATÁRIO / REMETENTE",
        x: 1.5,
        y: y + 0.9,
        largura: 0,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "NOME / RAZÃO SOCIAL",
        x: 1.5,
        y: y + 11,
        largura: 353.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.xNome,
        x: 1.5,
        y: y + 18,
        largura: 353.5,
        alinhamento: "left",
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "CNPJ / CPF",
        x: 358,
        y: y + 11,
        largura: 133.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.CPF?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") ?? "",
        x: 358,
        y: y + 18,
        largura: 133.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.CNPJ?.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") ?? "",
        x: 358,
        y: y + 18,
        largura: 133.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "DATA DA EMISSÃO",
        x: 495,
        y: y + 11,
        largura: 90,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: ide.dhEmi.replace(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*$/,'$3/$2/$1 $4:$5:$6'),
        x: 495,
        y: y + 18,
        largura: 90,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "ENDEREÇO",
        x: 1.5,
        y: y + 30,
        largura: 272,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.xLgr ?? "",
        x: 1.5,
        y: y + 38,
        largura: 272,
        alinhamento: "left",
        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDoCampo - 0.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "BAIRRO / DISTRITO",
        x: 276,
        y: y + 30,
        largura: 192,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.xBairro ?? "",
        x: 276,
        y: y + 38,
        largura: 119,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "CEP",
        x: 398,
        y: y + 30,
        largura: 93,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.CEP ?? "",
        x: 398,
        y: y + 38,
        largura: 93,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "DATA DA SAÍDA",
        x: 495,
        y: y + 30,
        largura: 90,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: ide.dhSaiEnt !== undefined
            ? ide.dhSaiEnt.replace(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*$/,'$3/$2/$1 $4:$5:$6')
            : "",
        x: 495,
        y: y + 38,
        largura: 90,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "MUNICÍPIO",
        x: 1.5,
        y: y + 51,
        largura: 272,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.xMun ?? "",
        x: 1.5,
        y: y + 58,
        largura: 272,
        alinhamento: "left",
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "UF",
        x: 276,
        y: y + 51,
        largura: 20,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.UF ?? "",
        x: 276,
        y: y + 58,
        largura: 20,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "FONE / FAX",
        x: 299,
        y: y + 51,
        largura: 96,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.enderDest?.fone ?? "",
        x: 299,
        y: y + 58,
        largura: 96,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "INSCRIÇÃO ESTADUAL",
        x: 398,
        y: y + 51,
        largura: 93,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, campo_1.campo)({
        value: dest.IE?.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4") ?? "",
        x: 398,
        y: y + 58,
        largura: 93,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    (0, titulo_1.titulo)({
        value: "HORA DA SAÍDA",
        x: 495,
        y: y + 51,
        largura: 90,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
    });
    return doc.y;
}
exports.getDestinatarioRemetente = getDestinatarioRemetente;
//# sourceMappingURL=get-destinatario-remetente.js.map