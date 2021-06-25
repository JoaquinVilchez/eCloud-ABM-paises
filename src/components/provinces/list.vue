<template>
    <div>
        <b-list-group class="my-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="my-0">No hay provincias registradas</p>
                    <router-link :to="{name:'provinces-add'}">Agregar una</router-link>
            </b-list-group-item>
        </b-list-group>

        <!-- ¿Esto podria ser otro componente ya que tiene las mismas caracteristicas tanto para pais como para provincia, exceptuando los datos a editar? -->
        <b-card class="my-2">
            <p>Editar provincia: </p>
            <b-input-group class="my-2">

                <b-form-input type="text" value="Santa Fe, Argentina" autofocus></b-form-input>

                <b-input-group-append>
                <b-button variant="success"><b-icon icon="check-circle"></b-icon></b-button>
                <b-button variant="danger"><b-icon icon="x-circle"></b-icon></b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card>

        <b-list-group>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Santa Fe, Argentina</h4>
                    <div>
                        <a href="#" class="mx-1"><b-icon icon="pencil-square"></b-icon></a>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Santiago, Chile</h4>
                    <div>
                        <a href="#" class="mx-1"><b-icon icon="pencil-square"></b-icon></a>
                        <a href="#" class="mx-1"><b-icon icon="trash-fill"></b-icon></a>
                    </div>
            </b-list-group-item>
            <b-list-group-item class="py-3 d-flex justify-content-between align-items-center">
                    <h4 class="my-0">Buenos Aires, Argentina</h4>
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
    name: 'ProvincesList'
}
</script>