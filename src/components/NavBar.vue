<template>
    <div class="sidebar">
        <div class="sidebarItem">
            <router-link to="/">Home</router-link>
        </div>
        <div class="sidebarItem">
            <router-link to="/about">About</router-link>
        </div>
        <div class="sidebarItem">
            <router-link to="/orders">Orders</router-link>
        </div>
        <div class="sidebarItem">
            <router-link to="/robot">Robot</router-link>
        </div>
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
</style>
