<template>
    <div class="row d-flex justify-content-center">
        <b-col num="12" lg=6>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Agregar provincia</h2>
                <b-button :to="{name:'provinces'}" variant="primary">Volver al listado</b-button>
            </div>
            <hr>
            <ProvincesForm></ProvincesForm>
        </b-col>
    </div>
</template>

<script>
import ProvincesForm from '@/components/provinces/form.vue'
export default {
    name: 'provinces-add',
    components: {
        ProvincesForm
    }
}
</script>