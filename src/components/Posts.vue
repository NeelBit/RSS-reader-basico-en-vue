<script setup>

import { useFeedStore } from '../stores/store';

const store = useFeedStore();

</script>

<template>

    <section class="posts">
        <article >
            <h2 v-if="store.current.source">{{ store.current.source.name }}</h2>

            <details v-for="post in store.current.items" :key="post.title">
                <summary>{{ post.title }}</summary>
                
                <!-- renderizar a html -->
                <div v-html="post.content">

                </div>

            </details>

        </article>
    </section>

</template>

<style scoped>

    .posts {
        padding: var(--separacion);
    }

    details {
        margin: var(--separacion) 0;
    }

    summary {
        cursor: pointer;
        padding: .5rem;
    }

    summary:hover {
        background-color: var(--colorBlancoRelax);
        color: var(--colorNegroRelax);
    }

</style>

<style>

    figure, img {
        width: min(100%, 50rem);
        display: block;
        margin: 0 auto;
    }

</style>