<template>
    <div>
        <b-form>
            
            <b-form-group
                id="input-group-1"
                label="Nombre provincia:"
                label-for="input-1"
                class="my-3"
            >
                <b-form-input
                id="input-1"
                type="text"
                placeholder="Ingrese nombre de provincia"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="País:" label-for="input-2" class="my-3">
                <b-form-select
                id="input-2"
                required
                >
                <!-- Datos estaticos -->
                    <b-form-select-option >Argentina</b-form-select-option>
                    <b-form-select-option >Chile</b-form-select-option>
                    <b-form-select-option >Brasil</b-form-select-option>      
                <!-- Datos estaticos -->
                </b-form-select>
            </b-form-group>

            <div class="d-flex flex-column">
                <b-button block class="mb-2" type="submit" variant="primary">Guardar</b-button>
                <b-button :to="{name:'provinces'}" block class="mb-2" type="reset" variant="danger">Cancelar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'ProvincesForm'
}
</script>