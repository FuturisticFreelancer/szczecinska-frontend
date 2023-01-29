<script>
    export default{
        props:["text", "target"]
    }
</script>

<template>
    <li class="menu-color">
        <router-link class="dropdown-item" :to=target>{{ text }}</router-link>
    </li>
</template>