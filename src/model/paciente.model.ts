import { Convenio } from "./convenio.model";
import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento.model";

export class Paciente extends Pessoa{
    tipoAtentimento! : TipoAtendimento
    numeroCartaoConvenio! : string
    dataVenciemento! : string
    convenio! : Convenio

    constructor() {
        super();
        this.ativo = true
        this.convenio = new Convenio();
    }
}