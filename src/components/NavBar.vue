<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" class="ps-5">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                        <b-nav-item>
                            <router-link to="/">Home</router-link>
                        </b-nav-item>
                        <b-nav-item>
                            <router-link to="/about">About</router-link>
                        </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:  'NavBar'
}
</script>

<style>

</style>
