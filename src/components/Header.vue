<script setup>

import { ref } from 'vue';
import { useFeedStore } from "../stores/store";

const store = useFeedStore();

let url = ref('');

function handleSubmit(params) {

    // si existe un valor para url.value registrar
    if (!!url.value) {
        store.registerNewSource(url.value);
    }
}

</script>

<template>

    <header class="header">
        <form action="" @submit.prevent="handleSubmit">
            <input type="url" name="source" id="source" required v-model="url">
            <button type="submit">Agregar fuente</button>
        </form>
    </header>


</template>

<style scoped>

    .header {
        width: 100%;
    }

    form {
        width: min(50rem, 100%) ;
        margin: 0 auto;
        display: flex;
        margin-top: 1rem;
        
    }

    input[type="url"] {
        width: min(30rem, 100%);
        margin: 0 auto;
        border: none;
        outline: none;
        color: var(--colorNegroRelax);
    }

    button {
        background-color: var(--colorNegroRelax);
        color: var(--colorBlancoRelax);
        font-weight: 700;
        width: min(20rem, 100%);
        margin: 0 auto;
        display: block;
        border: none;
        outline: none;
        padding: .5rem;
    }

</style>