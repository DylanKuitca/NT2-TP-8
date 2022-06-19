<template>

  <section class="src-components-tabla">
    <div class="container-fluid mt-3">
      <div class="jumbotron">

        <div v-if="personas.length" class="table-responsive"> 
          <table class="table table-dark align-middle align-self-center">
              <tr> 
                  <th>Indice</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Mail</th>
              </tr>
              <tr v-for="(personas, index) in personas" :key="index"> 
                  <td>{{index + 1}}</td>
                  <td>{{personas.Nombre}}</td>
                  <td>{{personas.Edad}}</td>
                  <td>{{personas.Mail}}</td>
              </tr>
          </table>
        </div>
        <h4 v-else class="alert alert-danger text-center">No se encontraron personas en MockApi</h4>       

      </div>
    </div>
  </section>

</template>

<script>

import { mapGetters } from 'vuex'

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {
      this.$store.dispatch('GET_PERSONAS')
    },
    data () {
      return {
      }
    },
    methods: {
    
    },
    computed: {
      ...mapGetters([ 
        'personas'
      ])
    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {
  }
  .jumbotron {
    background-color: rgb(64, 210, 255);
  }

</style>
