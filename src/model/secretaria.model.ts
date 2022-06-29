import { AbstractEntity } from "./abstract-entity.model";

export class Secretaria extends AbstractEntity{
    salario! : number
    datacontratacao! : Date
    pis! : string
}