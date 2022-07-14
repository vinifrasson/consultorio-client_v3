<template>
    <div class="columns is-12">
        <article class="titulo panel is-primary">
            <p class="panel-heading">
                Cadastrar Paciente
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
                <input v-model="paciente.ativo" class="checkbox" checked type="checkbox"
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
                    <input class="input" type="text" v-model="paciente.nome" placeholder="Insira um nome"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.telefone" placeholder="Insira um nome de usuario"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Celular</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.celular" placeholder="Insira um rg"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.nacionalidade" placeholder="Insira um telefone"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control is-flex">
                    <div class="select">
                        <select v-model="paciente.sexo" :disabled="model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.cpf" placeholder="Insira um telefone"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.rg" placeholder="Insira o numero do cartão"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="paciente.email" placeholder="Insira um email"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="password" v-model="paciente.login" placeholder="Insira uma senha"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.senha" placeholder="Insira um cpf"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Tipo De Atendimento</label>
                <div class="control is-flex">
                    <div class="select">
                        <select v-model="paciente.tipoAtentimento" :disabled="model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="particular">Particular</option>
                            <option value="convenio">Convenio</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field" v-if="paciente.tipoAtentimento == 'convenio'">
                <label class="label has-text-left">Convênio</label>
                <div class="control is-flex">
                    <div class="select">
                        <select v-model="paciente.convenio" :disabled="model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option v-for="convenio in conveniosList" :key="convenio.id" :value="convenio">
                                {{ convenio.nome }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label has-text-left">Número do Cartão do Convênio</label>
                <div class="control">
                    <input class="input" type="text" v-model="paciente.numeroCartaoConvenio" placeholder="Insira um cpf"
                        :disabled="model == 'detalhar' ? true : false">
                </div>
            </div>

            <div class="field">
                <label class="label has-text-left">Data de vencimento</label>
                <div class="control">
                    <input class="input" type="date" v-model="paciente.dataVenciemento" placeholder="Insira um cpf"
                        :disabled="model == 'detalhar' ? true : false">
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
import { Notification } from '@/model/notification';
import { Paciente } from '@/model/paciente.model';
import { PacienteClient } from '@/client/paciente.client';
import { PageRequest } from '@/model/page/page-request';
import { PageResponse } from '@/model/page/page-response';
import { Convenio } from '@/model/convenio.model';
import { ConvenioClient } from '@/client/convenio.client';
import { TipoAtendimento } from '@/model/tipo-atendimento.model';
export default class PacienteForm extends Vue {
    public pacienteClient!: PacienteClient;
    public paciente: Paciente = new Paciente()
    public notification: Notification = new Notification()
    public pageRequest: PageRequest = new PageRequest()
    public pageResponse: PageResponse<Convenio> = new PageResponse()
    public conveniosList: Convenio[] = []
    public convenioClient!: ConvenioClient
    @Prop({ type: Number, required: false })
    public readonly id!: number
    @Prop({ type: String, required: false })
    public readonly model!: string
    public mounted(): void {
        this.pacienteClient = new PacienteClient();
        this.convenioClient = new ConvenioClient()
        this.listarConvenios()
        if (this.id) {
            this.getById(this.id)
        }
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
    public onClickCadastrar(): void {
        this.pacienteClient.cadastrar(this.paciente)
            .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Paciente Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }
    public onClickEditar(): void {
        this.pacienteClient.editar(this.paciente)
            .then(
                success => {
                    this.$router.push('/pacientes')
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                }
            )
    }
    public onClickDesativar(): void {
        this.pacienteClient.desativar(this.paciente)
            .then(
                success => {
                    this.$router.push('/pacientes')
                }
            )
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.paciente = new Paciente()
    }
    public getById(id: number): void {
        this.pacienteClient.findById(id)
            .then(
                success => {
                    this.paciente = success
                }
            )
    }
    public onClickPaginaEditar(id: number): void {
        this.$router.push({ name: 'PacientesForm', params: { id: id, model: 'editar' } })
    }
}
</script>

<style>
.titulo {
    margin-left: 4%;
}

.select,
.select select {
    width: 100%;
}

.btn {
    width: 100%;
}
</style>