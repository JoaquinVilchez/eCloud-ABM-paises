<template>
    <div class="row d-flex justify-content-center">
        <b-col num='12' lg='6'>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Agregar nuevo país</h2>
                <b-button :to="{name:'countries'}" variant="primary">Volver al listado</b-button>
            </div>
            <hr>
            <!-- Obtener parametro del formulario enviado por el evento para pasarlo por parametro en addCountry(nameCountryInput)
            Para poder crear el objeto country y agregarlo. -->
            <CountriesForm @saveForm="addCountry"></CountriesForm>
        </b-col>
    </div>
</template>

<script>
import CountriesForm from '@/components/countries/form.vue'

export default {
    name: 'countries-add',
    components: {
        CountriesForm
    },
    methods:{
        addCountry(country){
            this.$store.commit("country/addCountry", country);
            this.$router.push('/paises');
            this.makeToast('success', 'País agregado')
        },
        makeToast(variant = null) {
            this.$bvToast.toast('Toast body content', {
            title: `Variant ${variant || 'default'}`,
            variant: variant,
            solid: true,
            autoHideDelay: 5000
            })
        }
    }
}
</script>