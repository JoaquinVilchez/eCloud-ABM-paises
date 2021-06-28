<template>
    <div>
        <b-list-group class="my-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="my-0">No hay provincias registradas</p>
                    <router-link :to="{name:'provinces-add'}">Agregar una</router-link>
            </b-list-group-item>
        </b-list-group>

        <b-list-group>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center" v-for="province in provinces" :key="province.id">
                    <h4 class="my-0">{{province.name}}</h4>
                    <div>
                        <router-link :to="`provincias/editar/${province.id}`" class="mx-1"><b-icon icon="pencil-square"></b-icon></router-link>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ProvincesList',
    computed:{
        ...mapState('province', ['provinces'])
    }
}
</script>