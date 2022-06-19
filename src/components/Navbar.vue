<template>

  <section class="src-components-navbar">
   <div class="container-fluid mt-3">
     <div class="jumbotron">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <router-link to="/">
          <a class="navbar-brand" href="#">Inicio</a>
        </router-link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tabla">
              <a class="nav-link" href="#">Tabla</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

     </div>
   </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
 
</style>
