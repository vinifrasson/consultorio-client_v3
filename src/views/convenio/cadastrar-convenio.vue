<template>
    <div class="columns is-12">
        <article class="titulo panel is-primary">
            <p class="panel-heading">
                Cadastrar Convênios
            </p>
        </article>
    </div>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{ notification.mensagem }}
        </div>
    </div>
    <div class="columns p-5">
        <div class="column is-5">

            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="convenio.nome" placeholder="Insira um nome"
                        :disabled="model == 'detalhar' ? true : false">
                </div>

                <div class="field has-text-left">
                    <label class="checkbox">
                        <input v-model="convenio.ativo" class="checkbox" checked type="checkbox"
                            :disabled="model == 'detalhar' ? true : false">
                        Ativo
                    </label>
                </div>

            </div>
            <div class="field">
                <label class="label has-text-left">Valor</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="convenio.valor" placeholder="Insira um valor"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="botoes field is-grouped">
            <p class="control">
                <a href="/convenio-list" class="button is-danger is-info">Voltar</a>
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
                <input class="button has-background-danger has-text-white is-uppercase btn" type="button"
                    value="Desativar" @click="onClickDesativar()">
            </div>
        </div>
        <div class="field" v-if="model === 'editar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button"
                    value="Editar" @click="onClickEditar()">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { Prop } from 'vue-property-decorator'
import { Notification } from '@/model/notification';
import { Convenio } from '@/model/convenio.model';
import { ConvenioClient } from '@/client/convenio.client';

export default class ConvenioForm extends Vue {

    public convenioClient!: ConvenioClient;
    public convenio: Convenio = new Convenio()
    public notification: Notification = new Notification()

    @Prop({ type: Number, required: false })
    public readonly id!: number

    @Prop({ type: String, required: false })
    public readonly model!: string

    public mounted(): void {
        this.convenioClient = new ConvenioClient();
        if (this.id) {
            this.getById(this.id)
        }
    }

    public onClickCadastrar(): void {
        this.convenioClient.cadastrar(this.convenio)
            .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Convênio Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }

    public onClickEditar(): void {
        this.convenioClient.editar(this.convenio)
            .then(
                success => {
                    this.$router.push('/convenios')
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }

    public onClickDesativar(): void {
        this.convenioClient.desativar(this.convenio)
            .then(
                success => {
                    this.$router.push('/convenios')
                }
            )
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }

    public onClickLimpar(): void {
        this.convenio = new Convenio()
    }

    public getById(id: number): void {
        this.convenioClient.findById(id)
            .then(
                success => {
                    this.convenio = success
                }
            )
    }

    public onClickPaginaEditar(id: number): void {
        this.$router.push({ name: 'ConveniosForm', params: { id: id, model: 'editar' } })
    }

}
</script>

<style>
.titulo {
    margin-left: 3%;
}

.btn {
    width: 15rem;
}
</style>