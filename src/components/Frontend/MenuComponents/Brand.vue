<script>
    import logo from "../../../assets/images/Logo.png"

    export default{
        data: function(){
            return {
                logo: logo
            }
        }
    }
</script>

<template>
    <routerLink to="/" class="navbar-brand">
        <div class="brand">
            <img 
                class="brand-image d-inline-block align-text-center"
                :src="logo"
                alt="szczecinska_logo"
            />
            Szczecińska
            <span class="d-none d-md-inline-block">Piesza Pielgrzymka na Jasną Górę</span>
        </div>
    </routerLink>
</template>

<style>
    .brand-image
    {
        height: 50px;
    }
</style>