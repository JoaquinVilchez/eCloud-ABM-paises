<template>
    <div class="row d-flex justify-content-center">
        <b-col num="12" lg=6>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Agregar provincia</h2>
                <b-button :to="{name:'provinces'}" variant="primary">Volver al listado</b-button>
            </div>
            <hr>
            <ProvincesForm @saveForm="addProvince"></ProvincesForm>
        </b-col>
    </div>
</template>

<script>
import ProvincesForm from '@/components/provinces/form.vue'
export default {
    name: 'provinces-add',
    components: {
        ProvincesForm
    },
    methods:{
        addProvince(province){
            this.$store.commit("province/addProvince", province)
            this.$router.push('/provincias');
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