<template>
    <div class="row d-flex justify-content-center">
        <b-col num='12' lg='6'>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Listado de paises</h2>
                <b-button :to="{name:'countries-add'}" variant="primary">Agregar</b-button>
            </div>
            <hr>
            <CountriesList></CountriesList>
        </b-col>
    </div>
</template>

<script>
import CountriesList from '@/components/countries/list.vue'

export default {
    name: 'Countries',
    components:{
        CountriesList
    }
}
</script>