<template>
  <div>
    <div class="columns is-12">
      <article class="titulo panel is-primary">
        <p class="panel-heading">
          Lista de Convênio
        </p>
      </article>
    </div>


 <div class="search-bar">
      <input type="search" name="search-bar" placeholder="Nome da especialidade">
      <button>Buscar</button>
      <router-link to="/cadastroconvenio"><button>Cadastrar</button></router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th style="text-align: center;">ID</th>
          <th style="text-align: center;">Status</th>
          <th style="text-align: center;">Nome</th>
          <th style="text-align: center;">Valor</th>
          <th style="text-align: center;">Opções</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="convenio in conveniosList" :key="convenio.id">
            <th style="text-align: center;">{{convenio.id}}</th>

            <th style="text-align: center;">
              <span v-if="convenio.ativo" class="tag is-success"> Ativo </span>
              <span v-if="!convenio.ativo" class="tag is-danger"> Inativo</span>  
            </th>

            <th style="text-align: center;">{{ convenio.nome }}</th>
            <th style="text-align: center; ">{{ convenio.valor }}</th>
          <th><button @click="onClickPaginaDetalhar(convenio.id)" class="button is-primary">
              <p>Detalhes</p>
            </button></th>
          </tr>
        </tbody>
      </table>
    </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request';
import { PageResponse } from '@/model/page/page-response';

import { Convenio } from '@/model/convenio.model';
import { ConvenioClient } from '@/client/convenio.client';

export default class ConvenioView extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Convenio> = new PageResponse()

  public textSearch = ""
  public conveniosList: Convenio[] = []
  public convenioClient!: ConvenioClient

  public mounted(): void {
    this.convenioClient = new ConvenioClient()
    this.listarConvenios()
  }

  public listarConvenios(): void {
    this.convenioClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.conveniosList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }

  public onClickPesquisar(): void {
    this.convenioClient.findByName(this.pageRequest, this.textSearch)
      .then(
        success => {
          this.pageResponse = success
          this.conveniosList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }

  public onClickPaginaCadastrar(): void {
    this.$router.push({ name: 'ConveniosForm', params: { model: 'cadastrar' } })
  }

  public onClickPaginaDetalhar(id: number): void {
    this.$router.push({ name: 'ConveniosForm', params: { id: id, model: 'detalhar' } })
  }

}
</script>

<style>

</style>