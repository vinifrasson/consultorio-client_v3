<template>
    <div>
        <div class="columns is-12">
            <article class="titulo panel is-primary">
                <p class="panel-heading">
                   Lista de Agendamentos
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
                        <th>Paciente</th>
                        <th>Medico</th>
                        <th>Data inicio</th>
                        <th>Data fim da Consulta</th>
                        <th>Status</th>
                        <th>Encaixe</th>
                        <th>Opções</th>
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

export default class AgendaView extends Vue { }
</script>

<style>
.titulo{
    margin-left: 1%;
}
</style>