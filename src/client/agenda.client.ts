import { Agenda } from "@/model/agenda.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

export class AgendaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/agendas",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async cadastrar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.post('/', agenda))
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<Agenda>> {
        try {

            let requestPath = ''
            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined 
                    ? '' : pageRequest.sortField},${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Agenda>>(requestPath,
                {
                    params: { filtros: pageRequest.filter }
                }
            )).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number): Promise<Agenda> {
        try {
            return (await this.axiosClient.get<Agenda>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async aprovar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/status/aprovado/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async rejeitar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/status/rejeitado/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cancelar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/status/cancelado/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async comparecido(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/status/compareceu/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async ncomparecido(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/status/ncompareceu/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(agenda: Agenda): Promise<void> {
        try {
            return (await this.axiosClient.put(`/desativar/${agenda.id}`, agenda)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}