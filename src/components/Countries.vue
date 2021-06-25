<template>
    <div>
        <b-form inline>
            <label class="sr-only" for="inline-form-input-name">País</label>
            <div class="d-flex justify-content-around align-items-center">
                <b-form-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Ingrese nombre de país"
                v-model="countryName"
                ></b-form-input>
                <b-button variant="primary">Guardar</b-button>
            </div>
            <p class="mt-2">País: {{countryName}}</p>
            <hr>
        </b-form>

        <div class="country_list">
            <b-list-group>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                        <h4>Argentina</h4>
                        <a href=""><b-icon icon="trash-fill"></b-icon></a>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Countries'
}
</script>