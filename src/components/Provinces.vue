<template>
    <div>
        <b-form>
            <b-form-group
                id="input-group-1"
                label="Nombre provincia:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                type="text"
                placeholder="Ingrese nombre de provincia"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="País:" label-for="input-2">
                <b-form-select
                id="input-2"
                required
                ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Guardar</b-button>
            <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
        <hr>
        <div class="province_list">
            <b-list-group>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                        <h4>Santa Fe, Argentina</h4>
                        <a href=""><b-icon icon="trash-fill"></b-icon></a>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Provinces'
}
</script>