<template>
    <b-row class="my-5 d-flex justify-content-center">
      <b-col cols="12" lg="6">
        <section>
          <h1>Ingresar País</h1>
          <Countries></Countries>
        </section>
        <hr>
        <section class="mt-4">
          <h1>Ingresar Provincia</h1>
          <Provinces></Provinces>
        </section>
      </b-col>
    </b-row>
</template>

<script>

import Countries from '@/components/Countries'
import Provinces from '@/components/Provinces'

export default {
  name: 'Home',
  components: {
    Countries,
    Provinces
  }
}
</script>
