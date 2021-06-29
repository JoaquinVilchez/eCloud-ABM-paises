<template>
    <div class="row d-flex justify-content-center">
        <b-col num='12' lg='6'>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Editar país</h2>
                <b-button :to="{name:'countries'}" variant="primary">Volver al listado</b-button>
            </div>
            <hr>
            <CountriesForm :country="country" @saveForm="updateCountry"></CountriesForm>
        </b-col>
    </div>
</template>

<script>
import CountriesForm from '@/components/countries/form.vue'
import { mapMutations } from 'vuex'

export default {
    name: 'countries-add',
    data(){
        return{
            countryId: parseInt(this.$route.params.id)
        }
    },
    computed:{
        country(){
            return this.$store.getters['country/getCountryById'](this.countryId)
        }
    },
    components: {
        CountriesForm
    },
    methods:{
        updateCountry(country){
            this.$store.commit("country/updateCountry", country);
            this.$router.push('/paises');
            this.makeToast('success')
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