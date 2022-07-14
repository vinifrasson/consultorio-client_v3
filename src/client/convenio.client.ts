import { Convenio } from "@/model/convenio.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

export class ConvenioClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/convenios",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async cadastrar(convenio: Convenio): Promise<void> {
        try {
            return (await this.axiosClient.post('/', convenio))
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<Convenio>> {
        try {

            let requestPath = ''
            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined 
                    ? '' : pageRequest.sortField},${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Convenio>>(requestPath,
                {
                    params: { filtros: pageRequest.filter }
                }
            )).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number): Promise<Convenio> {
        try {
            return (await this.axiosClient.get<Convenio>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByName(pageRequest: PageRequest,name: string): Promise<PageResponse<Convenio>> {
		try {
				
			let requestPath = ''
			
			requestPath += `?page=${pageRequest.currentPage}`
			requestPath += `&size=${pageRequest.pageSize}`
			requestPath += `&sort=${pageRequest.sortField === undefined 
				? '' : pageRequest.sortField},${pageRequest.direction}`
			
			return (await this.axiosClient.get<PageResponse<Convenio>>(`/busca/${name}`+requestPath,
				{ 
					params: { filtros: pageRequest.filter } 
				}
			)).data
		} catch (error: any) { 
			return Promise.reject(error.response) 
		}
	}

    public async editar(convenio: Convenio): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${convenio.id}`, convenio)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(convenio: Convenio): Promise<void> {
        try {
            return (await this.axiosClient.put(`/desativar/${convenio.id}`, convenio)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}