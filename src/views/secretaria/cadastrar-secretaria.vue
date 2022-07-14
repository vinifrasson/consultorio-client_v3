<template>

    <div class="columns is-12">
        <article class="titulo panel is-primary">
            <p class="panel-heading">
                Cadastrar Secretária
            </p>
        </article>
    </div>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{ notification.mensagem }}
        </div>
    </div>
    <div class="column is-10">
        <div class="field has-text-left">
            <label class="checkbox">
                <input v-model="secretaria.ativo" class="checkbox" checked type="checkbox"
                    :disabled="model == 'detalhar' ? true : false">
                Ativo
            </label>
        </div>
    </div>
    <div class="columns p-5">
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="secretaria.nome" placeholder="Insira um nome"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" v-model="secretaria.login" placeholder="Insira um nome de usuario"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="secretaria.rg" placeholder="Insira um rg"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Celular</label>
                <div class="control">
                    <input class="input" type="text" v-model="secretaria.celular" placeholder="Insira um celular"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
                <div class="field">
                    <label class="label has-text-left">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" v-model="secretaria.telefone" placeholder="Insira um telefone"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Sexo</label>
                    <div class="control is-flex">
                        <div class="select">
                            <select v-model="secretaria.sexo" :disabled="model == 'detalhar' ? true : false">
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Pis</label>
                    <div class="control">
                        <input class="input" type="text" v-model="secretaria.pis" placeholder="Insira um pis"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="secretaria.email" placeholder="Insira um email"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Senha</label>
                    <div class="control">
                        <input class="input" type="password" v-model="secretaria.senha" placeholder="Insira uma senha"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CPF</label>
                    <div class="control">
                        <input class="input" type="text" v-model="secretaria.cpf" placeholder="Insira um cpf"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nacionalidade</label>
                    <div class="control">
                        <input class="input" type="text" v-model="secretaria.nacionalidade"
                            placeholder="Insira um nacionalidade nacionalidade"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Data De Contratação</label>
                    <div class="control">
                        <input class="input" type="datetime-local" v-model="secretaria.dataContratacao"
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Salario</label>
                    <div class="control">
                        <input class="input" type="number" step=0.01 v-model="secretaria.salario"
                            placeholder="Insira o salario" :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="botoes field is-grouped">
                <p class="control">
                    <a href="/secretaria-list" class="button is-danger is-info">Voltar</a>
                </p>
                <p class="control">
                    <button class="button is-fullwidth is-primary" @click="onClickCadastrar()">Confirmar</button>
                </p>
            </div>
            <div class="field" v-if="model === 'detalhar'">
                <div class="control">
                    <input class="button has-background-primary has-text-white is-uppercase btn" type="button"
                        value="Editar" @click="onClickPaginaEditar(id)">
                </div>
            </div>
            <div class="field" v-if="model === 'detalhar'">
                <div class="control">
                    <button class="button is-danger" @click="onClickDesativar()">Desativar</button>
                </div>
            </div>
            <div class="field" v-if="model === 'editar'">
                <div class="control">
                    <button class="button is-warning" @click="onClickEditar()">Editar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { Prop } from 'vue-property-decorator'

import { PageRequest } from '@/model/page/page-request';
import { PageResponse } from '@/model/page/page-response';
import { Notification } from '@/model/notification';
import { Secretaria } from '@/model/secretaria.model';
import { SecretariaClient } from '@/client/secretaria.client';


export default class SecretariaForm extends Vue {

    public secretariaClient!: SecretariaClient;
    public secretaria: Secretaria = new Secretaria()
    public notification: Notification = new Notification()

    @Prop({ type: Number, required: false })
    public readonly id!: number

    @Prop({ type: String, required: false })
    public readonly model!: string

    public mounted(): void {
        this.secretariaClient = new SecretariaClient();
        if (this.id) {
            this.getById(this.id)
        }
    }

    public onClickCadastrar(): void {
        this.secretariaClient.cadastrar(this.secretaria)
            .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Secretaria Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }

    public onClickEditar(): void {
        this.secretariaClient.editar(this.secretaria)
            .then(
                success => {
                    this.$router.push('/secretarias')
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }

    public onClickDesativar(): void {
        this.secretariaClient.desativar(this.secretaria)
            .then(
                success => {
                    this.$router.push('/secretarias')
                }
            )
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }

    public onClickLimpar(): void {
        this.secretaria = new Secretaria()
    }

    public getById(id: number): void {
        this.secretariaClient.findById(id)
            .then(
                success => {
                    this.secretaria = success
                }
            )
    }

    public onClickPaginaEditar(id: number): void {
        this.$router.push({ name: 'SecretariasForm', params: { id: id, model: 'editar' } })
    }

}
</script>

<style>
.select,
.select select {
    width: 100%;
}

.btn {
    width: 15rem;
}
</style>