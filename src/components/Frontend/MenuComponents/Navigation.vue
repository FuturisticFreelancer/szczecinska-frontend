<script>
    import DropdownItem from './MenuItems/DropdownItem.vue';
    import LinkItem from './MenuItems/LinkItem.vue';
    import LoginLogout from './MenuItems/UserItems/LoginLogout.vue';
    import Profile from './MenuItems/UserItems/Profile.vue';
    import Registration from './MenuItems/UserItems/Registration.vue';

    export default{
        components: {
            DropdownItem,
            LinkItem,
            LoginLogout,
            Profile,
            Registration
        }
    }
</script>

<template>
    <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <DropdownItem text="Informacje"> 
                <LinkItem text="Aktualności" target="/news" />
                <LinkItem text="Trasa" target="/path" />
                <LinkItem text="Baza wiedzy" target="/info" />
            </DropdownItem>
            <DropdownItem text="Medialne wspomnienia">
                <LinkItem v-for="n in 33" :text="n+1990" :target="/galleries/+String(1990+n)" />
                <!-- TODO: Do zmienienia jak dodam najpierw stan przez Pinia a potem wczytywanie przez Api listy galerii -->
            </DropdownItem>
            <DropdownItem text="Strefa pielgrzyma">
                <LoginLogout />
                <li>
                    <hr class="dropdown-divider m-0">
                </li>
                <Profile />
                <Registration />
            </DropdownItem>
        </ul>
    </div>
</template>

