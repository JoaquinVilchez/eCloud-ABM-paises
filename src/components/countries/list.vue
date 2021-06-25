<template>
    <div class="country_list">
        <b-list-group class="my-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="my-0">No hay países registrados</p>
                    <router-link :to="{name:'countries-add'}">Agregar uno</router-link>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Argentina</h4>
                    <div>
                        <a href="#" class="mx-1"><b-icon icon="pencil-square"></b-icon></a>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Chile</h4>
                    <div>
                        <a href="#" class="mx-1"><b-icon icon="pencil-square"></b-icon></a>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Brasil</h4>
                    <div>
                        <a href="#" class="mx-1"><b-icon icon="pencil-square"></b-icon></a>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'CountriesList'
}
</script>