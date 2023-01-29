<script>
    import Menu from './MenuComponents/Menu.vue'
    export default{
        components: {
            Menu
        }
    }
</script>

<template>
    <div class="app container-fluid">
        <Menu />
    </div>
</template>

<style>
    .app{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        padding: 0px !important;
    }
</style>