<template>
    <div class="country_list">
        <b-list-group class="my-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="my-0">No hay países registrados</p>
                    <router-link :to="{name:'countries-add'}">Agregar uno</router-link>
            </b-list-group-item>
        </b-list-group>

        <!-- ¿Esto podria ser otro componente ya que tiene las mismas caracteristicas tanto para pais como para provincia, exceptuando los datos a editar? -->
        <!--b-card class="my-2">
            <p>Editar país: </p>
            <b-input-group class="my-2">

                <b-form-input type="text" value="Argentina" autofocus></b-form-input>

                <b-input-group-append>
                <b-button variant="success"><b-icon icon="check-circle"></b-icon></b-button>
                <b-button variant="danger"><b-icon icon="x-circle"></b-icon></b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card-->

        <b-list-group v-if="countries">
            <b-list-group-item
                v-for="country in countries"
                :key="country.id"
                class="py-3 d-flex justify-content-between align-items-center"
            >
                    <h4 class="my-0">{{ country.name }}</h4>
                    <div>
                        <router-link :to="`paises/editar/${country.id}`" class="mx-1"><b-icon icon="pencil-square"></b-icon></router-link>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CountriesList',
    computed: {
        ...mapState('country', ['countries'])
        // countries() {
        //     return this.$store.state.country.countries
        // }
    }
}
</script>