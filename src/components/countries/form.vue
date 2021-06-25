<template>
    <div>
        <!-- ¿PORQUE NO ME RESPETA LOS MARGENES DE CADA INPUT (BOOTSTRAP-VUE)? -->
        <b-form>
            <b-form-group
                id="input-group-1"
                label="Nombre país:"
                label-for="input-1"
                class="my-3"
            >
                <b-form-input
                id="input-1"
                type="text"
                placeholder="Ingrese nombre de país"
                required
                ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-between flex-column">
                <b-button block type="submit" variant="primary" class="mb-2">Guardar</b-button>
                <b-button :to="{name:'countries'}" block type="reset" class="mb-2">Cancelar</b-button>
            </div>
        </b-form>
    </div>  
</template>

<script>
export default {
    name: 'CountriesForm'
}
</script>