<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
            <b-navbar-brand href="#">ABML VueJS</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item :to="{name:'home'}" exact>Home</b-nav-item>
                <b-nav-item :to="{name:'countries'}">Paises</b-nav-item>
                <b-nav-item :to="{name:'provinces'}">Provincias</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
    name: 'NavBar'
    }
</script>