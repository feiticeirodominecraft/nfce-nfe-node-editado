import { type GeneratePdf } from "../../../../domain/contracts/repos";
export declare function getDadosEmitente({ y, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo, larguraDoFormulario, emit, protNFe, pathLogo, ide, folha, }: GeneratePdf.InputDadosEmitente): Promise<void>;
