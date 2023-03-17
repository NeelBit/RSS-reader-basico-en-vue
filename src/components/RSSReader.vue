<script setup>
import Header from './Header.vue';
import Posts from './Posts.vue';
import Sidebar from './Sidebar.vue';




</script>

<template>

<div class="main-container">

    <Header />
    <Sidebar />
    <Posts />

</div>

</template>

<style scoped>

    .main-container {
        display: grid;

        grid-template-areas:
                    "header header header header"
                    "sidebar posts posts posts" ;
    }

    .header {
        grid-area: header;
    }

    .sidebar {
        grid-area: sidebar;
    }

    .posts {
        grid-area: posts;
    }

</style>