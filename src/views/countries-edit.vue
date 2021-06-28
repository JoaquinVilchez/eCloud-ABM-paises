<template>
    <div class="row d-flex justify-content-center">
        <b-col num='12' lg='6'>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Editar país</h2>
                <b-button :to="{name:'countries'}" variant="primary">Volver al listado</b-button>
            </div>
            <hr>
            <CountriesForm></CountriesForm>
        </b-col>
    </div>
</template>

<script>
import CountriesForm from '@/components/countries/form.vue'

export default {
    name: 'countries-add',
    components: {
        CountriesForm
    }
}
</script>