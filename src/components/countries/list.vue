<template>
    <div class="country_list">
        <b-list-group class="my-2" v-show="countries.length==0">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="my-0">No hay países registrados</p>
                    <router-link :to="{name:'countries-add'}">Agregar uno</router-link>
            </b-list-group-item>
        </b-list-group>

        <b-list-group v-if="countries">
            <b-list-group-item
                v-for="country in countries"
                :key="country.id"
                class="py-3 d-flex justify-content-between align-items-center"
            >
                    <h4 class="my-0">{{ country.name }}</h4>
                    <div>
                        <router-link :to="`paises/editar/${country.id}`" class="mx-1"><b-icon icon="pencil-square"></b-icon></router-link>
                        <a href="#" @click="deleteCountry(country.id)" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
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
    },
    methods:{
        deleteCountry(idCountry){
            this.$store.commit("country/deleteCountry", idCountry)
        }
    }
}
</script>