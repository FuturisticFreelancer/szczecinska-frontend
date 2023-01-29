<script>
    import Navigation from './Navigation.vue'
    export default{
        components: {
            Navigation
        }
    }
</script>

<template>
    <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navigation" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <Navigation />
</template>