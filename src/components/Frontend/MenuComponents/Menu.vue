<script>
    import Brand from './Brand.vue'
    import NavbarWithToggler from './NavbarWithToggler.vue'

    export default{
        components:{
            Brand,
            NavbarWithToggler
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light sticky-top menu-color bordered-nav">
        <div class="container-fluid d-flex justify-content-between">
            <Brand />
            <NavbarWithToggler />
        </div>
    </nav>
</template>

<style>
    .bordered-nav
    {
        border-bottom: black 1px solid;
    }
</style>
