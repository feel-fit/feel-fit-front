<template>
  <div class="bg-white" id="sidebar-wrapper">
    <div class="row">
      <div class="col">
        <div class="sidebar-heading"><img class="img-fluid" :src="images.logo" alt=""></div>
      </div>
      <div class="col-auto">
        <a href="#" class="toggle text-body">
          <font-awesome-icon class="m-4 icon" icon="times"></font-awesome-icon>
        </a>
      </div>
    </div>
    <div class="list-group list-group-flush">

    </div>
  </div>
</template>

<script>

    import logo from './../assets/images/logo_menu.svg'

    export default {
        name: 'slider',
        data() {
            return {
                images: {
                    logo: logo
                }
            }
        },
        mounted() {
            $("#menu-toggle-car, .toggle").click(function (e) {
                e.preventDefault();
                $("#app").toggleClass("toggled");
            });
        }
    }
</script>


<style lang="scss">
  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .list-group {
    width: 20rem;
  }

  #page-content-wrapper {
    //min-width: 100vw;
  }

  #app.toggled #sidebar-wrapper {
    margin-left: -20rem;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

   /* #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }*/

    #app.toggled #sidebar-wrapper {
      margin-left: -20rem;
    }
  }


</style>