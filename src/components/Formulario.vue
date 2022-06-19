<template>

  <section class="src-components-formulario">

      <div class="jumbotron">
        
        <vue-form :state="formState" @submit.prevent="PostMockaApi2()">
    
          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input
            id="nombre"
            type="text" 
            v-model.trim="formData.Nombre" 
            required 
            class="form-control"
            name="nombre" 
            cant-caracteres
            no-espacios
            />
      
            <field-messages name="nombre" show="$dirty">
              <div class="alert alert-success mt-1">Nombre OK!</div>
              <div slot="required" class="alert alert-danger mt-1">Nombre es un campo requerido</div>
               <div class="alert alert-warning mt-1" slot="cant-caracteres">El nombre debe estar entre 3 y 15 caractes</div>
            </field-messages>
          </validate>

          
          <validate tag="div">
            <label for="edad">Edad</label>
            <input
            id="edad"
            type="number" 
            v-model.trim="formData.Edad" 
            required 
            class="form-control"
            name="edad" 
            edad-valida
            no-espacios
            />
      
            <field-messages name="edad" show="$dirty">
              <div class="alert alert-success mt-1">Edad OK!</div>
              <div slot="required" class="alert alert-danger mt-1">Edad es un campo requerido</div>
               <div class="alert alert-warning mt-1" slot="edad-valida">La Edad debe estar entre 8 y 120</div>
            </field-messages>
          </validate>

          

          <validate tag="div">
            <label for="Mail">Mail</label>
            <input
            id="mail"
            type="email" 
            v-model.trim="formData.Mail" 
            required 
            class="form-control"
            name="mail" 
            />
           
            <field-messages name="mail" show="$dirty">
              <div class="alert alert-success mt-1">mail OK!</div>
              <div slot="required" class="alert alert-danger mt-1">Email es un campo requerido</div>
            </field-messages>
          </validate>
         
     
          <button class="btn btn-success mt-3 mb-3 mr-3" :disabled="formState.$invalid" type="submit">POST en Mock-Api .then .catch</button>
          <button class="btn btn-primary mt-3 mb-3" :disabled="formState.$invalid" type="submit">POST en Mock-Api async await</button>

        </vue-form>


      </div>
  
  </section>

</template>

<script>


  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://6286d6fae9494df61b2e1214.mockapi.io/api/TP7',
        formState: {},
        formData: this.getInitialData(),
        personas: [],
      }
    },
    methods: {
      getInitialData() {
        return {
          Nombre:'',
          Edad:'',
          Mail:'',
        }
      },
      PostMockaApi() {

        this.$store.dispatch('postFormDataAsync',this.formData) //Vuex action       
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      PostMockaApi2() {

        this.$store.dispatch('postFormData',this.formData) //Vuex action   
        this.formData = this.getInitialData()
        this.formState._reset()
      },



    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
   .jumbotron {
    background-color: lightsalmon;
  }
</style>
