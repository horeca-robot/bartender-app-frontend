<template>
    <div class="sidebar">
        <router-link :to="navLink.path" v-for="(navLink, index) in navLinks" :key="index">
            <div class="sidebarItem">
                <img class="icon" :src="navLink.icon"/> &nbsp;
                {{ navLink.name }}
            </div>
        </router-link>
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
                    icon: '/assets/img/order.svg'
                },
                {
                    path: '/products',
                    name: 'Products',
                    icon: '/assets/img/about.svg'
                },
                {
                    path: '/robots',
                    name: 'Robots',
                    icon: '/assets/img/robot2.svg'
                },
                {
                    path: '/map',
                    name: 'Map',
                    icon: '/assets/img/pin.svg'
                },
                {
                    path: '/employeeSelection',
                    name: 'Login',
                    icon: '/assets/img/user.svg'
                },
                {
                    path: '/notifications',
                    name: 'Notifications',
                    icon: '/assets/img/help.svg'
                },
            ]
        }
    }
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
