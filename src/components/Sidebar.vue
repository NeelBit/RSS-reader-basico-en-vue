<script setup>

import { useFeedStore } from '../stores/store';

const store = useFeedStore();

function handleClick(source) {
    store.loadSource(source);
}

</script>

<template>

    <aside class="sidebar">

        <div class="sources" v-for="(source, index) in store.sources" :key="index">
            
            <div class="source"> 
                <!-- se hace de esa forma para no enviar el evento en click -->
                <a @click.prevent="() => handleClick(source)" href=# > {{ source.name }} </a>
            </div>
            
        </div>

    </aside>

</template>

<style scoped>

    .sidebar{
        height: 100vh;
        border-right: 1px solid var(--colorBlancoRelax);
    }

    .sources {
        padding: var(--separacion);
    }

    .source {
        padding: .5rem;
        border-radius: var(--redondeo);
    }
    .source:hover {
        background-color: var(--colorBlancoRelax);
        color: var(--colorNegroRelax);
    }

    .source a:hover {
        color: var(--colorNegroRelax);
    }

</style>