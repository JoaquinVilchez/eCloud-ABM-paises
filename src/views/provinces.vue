<template>
    <div class="row d-flex justify-content-center">
        <b-col num="12" lg=6>
            <div id="header" class="d-flex justify-content-between align-items-center">
                <h2>Listado de provincias</h2>
                <b-button :to="{name:'provinces-add'}" variant="primary">Agregar</b-button>
            </div>
            <hr>
            <ProvincesList></ProvincesList>
        </b-col>
    </div>
</template>

<script>
import ProvincesList from '@/components/provinces/list.vue'
export default {
    name: 'Provinces',
    components: {
        ProvincesList
    }
}
</script>