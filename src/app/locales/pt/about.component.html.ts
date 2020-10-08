import { ITranslate } from "../itranslate";

export class AboutComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    ["about"]: "About",
    ["about-pt"]: "Sobre",
    ["one-mundo-conecto-idealization"]: "One Mundo Conecto Idealization",
    ["one-mundo-conecto-idealization-pt"]: "Uma idealização Mundo Conecto",
    ["version"]: "Version",
    ["version-pt"]: "Versão",
    ["first-description"]: "This software was developed as part of the process of the study from the Angular Framework and the author don't is answer by the problems caused the use of the system and the recovered data.",
    ["first-description-pt"]: "Este software foi desenvolvido como parte do processo de estudo do Angular Framework e o autor não é responsável pelos problemas causados, pelo uso do sistema e ou pelos dados recuperados.",
    ["second-description"]: "<b>About the functionality of the system:</b> The MC - HostInfo has by base, basic record and recovery of the information about the servers of your network. On this system you can find the host using the search tools.",
    ["second-desctiption"]: "<b>Sobre a funcionalidade do sistema: </b> O MC - HostInfo possui por base, registro básico e recuperação das informações sobre os servidores de sua rede. Neste sistema, você pode encontrar o host usando as ferramentas de pesquisa."
  };
}
