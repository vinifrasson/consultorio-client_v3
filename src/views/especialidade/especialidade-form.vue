<template>

    <div class="especialidade-form column is-12">

        <form>

            <div class="columns is-12">
                <article class="titulo panel is-primary">
                    <p class="panel-heading">
                        Cadastrar Especialidade
                    </p>
                </article>
            </div>

            <div class="columns" v-if="notification.ativo">
                <div class="column is-12">
                    <div :class="notification.classe">
                        <button @click="onClickFecharNotificacao()" class="delete"></button>
                        {{ notification.mensagem }}
                    </div>
                </div>
            </div>

            <div class="column is-12 is-size-3">
                <label class="label">
                    Ativar Especialidade
                    <input v-model="especialidade.ativo" checked type="checkbox" :disabled="model === 'detalhar'">
                </label>
            </div>

            <div class="control column is-5">
                <label for="nome">Nome da Especialidade</label>
                <input class="input" v-model="especialidade.nome" type="text" placeholder="Nome da especialidade"
                    :disabled="model === 'detalhar'">
            </div>

            <div class="botoes field is-grouped">
                <p class="control">
                    <a href="/especialidade/listar" class="button is-danger is-info">Voltar</a>
                </p>
                <p class="control">
                    <button class="button is-fullwidth is-primary" @click="onClickCadastrar()">Confirmar</button>

                </p>
            </div>

        </form>

    </div>

</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Especialidade } from '@/model/especialidade.model'
    import { Notification } from '@/model/notification'
    import { EspecialidadeClient } from '@/client/especialidade.client'
    import { Prop } from 'vue-property-decorator'

    export default class EspecialidadeForm extends Vue {
        public especialidadeClient!: EspecialidadeClient
        public especialidade : Especialidade = new Especialidade()
        public notification : Notification = new Notification()
    
         @Prop({ type: Number, required: false })
        private readonly id!: number

        @Prop({ type: String, default: false })
        readonly model!: string

        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
            this.carregarEspecialidade()

            console.log(this.id)
            console.log(this.model)
        }
        
        public onClickCadastrar(): void {
            
            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'especialidade cadastrado com sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    
                })
        }

        public onClickDeletar(): void {
            this.especialidadeClient.desativar(this.especialidade).then(sucess => {
            this.notification = this.notification.new(true, 'notification is-success', 'especialidade foi Desativado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }

        public onClickPaginaEditar(idEspecialidade: number){
            this.$router.push({ name: 'especialidade-editar', params: { id: idEspecialidade, model: 'editar' } })
            console.log("ta chamando")
        }

        public onClickSalvarAlteracao(): void {
            this.especialidadeClient.editar(this.especialidade).then(success => {
            this.notification = this.notification.new(true, 'notification is-success', 'especialidade foi Editado com sucesso!')
            }, error => {
            this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
            })
        }


        public carregarEspecialidade(): void{

                this.especialidadeClient.findById(this.id).then(value => {
                this.especialidade = value
                console.log("especialidade" + value)
                }).catch(error => {
                    console.log(error)
                })
            
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }

    }
</script>

<style>
.control {
    padding-left: 0px;
}

.titulo {
    margin-left: 1%;
}

.label {
    font-size: 15px;
}

.label input {
    color: red;
}


form input {
    margin-top: 5px;
}

::-webkit-input-placeholder {
    color: rgb(202, 202, 202);
    padding: 0px;
}
</style>