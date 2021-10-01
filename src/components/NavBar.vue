<template>
    <div class="sidebar">
        <router-link to="/">
            <div class="sidebarItem">
                <img class="icon" src="@/assets/home.svg"/> &nbsp;
                Home
            </div>
        </router-link>
        <router-link to="/about">
            <div class="sidebarItem">
                <img class="icon" src="@/assets/about.svg"/> &nbsp;
                About
            </div>
        </router-link>
        <router-link to="/orders">
            <div class="sidebarItem">
                <img class="icon" src="@/assets/order.svg"/> &nbsp;
                Orders
            </div>
        </router-link>
        <router-link to="/robot">
            <div class="sidebarItem">
                <img class="iconRobot" src="@/assets/robot2.svg"/> &nbsp;
                Robot
            </div>
        </router-link>
        <router-link to="/orders/edit/products">
            <div class="sidebarItem">
                <img class="icon" src="@/assets/about.svg"/> &nbsp;
                Products
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:  'NavBar'
}
</script>

<style>
.sidebar {
    width: 100%;
    max-width: 40vw;
    height: 100vh;
    padding: 2em;
    text-align: center;
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

.icon {
    min-width: 2em;
    max-width: 2em;
}

.iconRobot {
    min-width: 2em;
    max-width: 2em;
    margin-left: -4px;
}
</style>
