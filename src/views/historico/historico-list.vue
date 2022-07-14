<template>
    <div>
        <div class="columns is-12">
            <article class="titulo panel is-primary">
                <p class="panel-heading">
                    Lista de Históricos
                </p>
            </article>
        </div>
        <div class="columns">
            <div class="column is-8">
                <input class="input" type="text" placeholder="Pesquisar">
            </div>
            <div class="column is-3">
                <button class="button">Cadastrar</button>
            </div>
        </div>
        <div class="column is-11">
            <table class="table is-bordered is-fullwidth sombra centro">
                <thead>
                    <tr>
                        <th style="text-align: center;">Paciente</th>
                        <th style="text-align: center;">Medico</th>
                        <th style="text-align: center;">Secretaria</th>
                        <th style="text-align: center;">Data</th>
                        <th style="text-align: center;">Status</th>
                        <th style="text-align: center;">Observação</th>
                        <th style="text-align: center;">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button class="button is-size-6">Detalhar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HistoricoView extends Vue { }
</script>

<style>
.titulo{
    margin-left: 1%;
}
</style>