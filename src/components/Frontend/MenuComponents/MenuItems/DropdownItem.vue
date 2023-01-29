<script>
    export default{
        props: ['text'],
        computed: {
            id(){
                let txt = this.text.replace(/\s/g, "")
                return "dropDown"+txt
            }
        }
    }
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
            aria-current="page"
            role="button"
            :id=id
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            {{ text }}
        </a>
        <ul class="dropdown-menu pt-0 pb-0" :aria-labelledby=id>
            <slot></slot>
        </ul>
    </li>
</template>