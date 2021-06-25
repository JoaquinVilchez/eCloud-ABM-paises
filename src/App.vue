<template>
  <div id="app">
    <Navbar></Navbar>
    <b-container class="mt-4">
      <router-view />
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

