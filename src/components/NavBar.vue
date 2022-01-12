<template>
    <div class="sidebar primary-color text-color">
        <router-link :to="navLink.path" v-for="(navLink, index) in navLinks" :key="index">
            <div class="sidebarItem">
                <i :class="navLink.icon"></i> {{ navLink.name }}
            </div>
        </router-link>
        <hr>
        <div class="sidebarItem" v-on:click="logoutEmployee()">
            <i class="fas fa-sign-out-alt fontIcon icon"></i> Logout
        </div>
    </div>
</template>

<script>
export default {
    name:  'NavBar',
    data() {
        return {
            navLinks: [
                {
                    path: '/orders',
                    name: 'Orders',
                    icon: 'fas fa-receipt fontIcon icon'
                },
                {
                    path: '/products',
                    name: 'Products',
                    icon: 'fas fa-info-circle fontIcon icon'
                },
                {
                    path: '/robots',
                    name: 'Robots',
                    icon: 'fas fa-robot fontIcon icon'
                },
                {
                    path: '/map',
                    name: 'Map',
                    icon: 'fas fa-map-marker-alt fontIcon icon'
                },
                {
                    path: '/notifications',
                    name: 'Notifications',
                    icon: 'fas fa-bell fontIcon icon'
                },
                {
                    path: '/employeeSelection',
                    name: 'Login',
                    icon: 'fas fa-user fontIcon icon'
                },
            ]
        }
    },
    methods: {
      logoutEmployee() {
        window.localStorage.removeItem('authToken');
        location.reload();
      },
    },
}
</script>

<style>
.sidebar {
    width: 100%;
    max-width: 40vw;
    height: 100vh;
    padding: 2em;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 0 1rem 0.2rem #999 !important;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

.sidebarItem {
    padding: 0.5em;
}

.sidebarItem a.router-link-exact-active {
    text-decoration: none;
    color: rgb(20, 19, 19);
}

.sidebarItem:hover {
    opacity: 0.5;
    border-radius: 10px;
    background-color: #999;
    transition: 0.3s ease-in-out;
}
</style>
