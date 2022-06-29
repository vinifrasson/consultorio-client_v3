import { AbstractEntity } from "./abstract-entity.model";
import { Convenio } from "./convenio.model";
import { TipoAtendimento } from "./tipo-atendimento.model";

export class Paciente extends AbstractEntity{
    tipoatentimento! : TipoAtendimento
    numerocartaoconvenio! : string
    datavenciemento! : string
    convenio! : Convenio
}