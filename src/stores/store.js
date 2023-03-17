import {
    ref
} from 'vue';

import {
    defineStore
} from 'pinia';

export const useFeedStore = defineStore('feedStore', () => {

    // informacion de los rss
    let sources = ref([{
        id: crypto.randomUUID(),
        name: 'Mozilla hacks',
        url: 'https://hacks.mozilla.org/feed'
    }]);

    // el feed actual
    let current = ref({
        source: null,
        items: null
    });

    // actions
    async function loadSource(source) {

        // click en source del sidebar, llama a handleClick, este a su ves llama a loadSource
        // asignar fuente a current

        const response = await fetch(source.url); // un objeto de sources, hay acceso a id name url
        let text = await response.text();

        // tener en cuenta todas la variaciones que puede haber en diferentes xml
        text = text.replace(/content:encoded/g, 'content');

        const domParser = new DOMParser();
        let dom = domParser.parseFromString(text, 'text/xml');

        // habilitar CORS -> extensión navegador Allow CORS: Access-Control-Allow-Origin
        //console.log(dom);

        const posts = [];

        dom.querySelectorAll('item, entry').forEach(item => {
            // objetos que va almacenar en posts y en current items
            const post = {
                // ?? en lugar de || pero no me toma 
                title: item.querySelector('title').textContent || 'Sin titulo', // sin titulo como alternativa si no encuentra esa etiqueta
                content: item.querySelector('content').textContent || '',

            }

            posts.push(post);
        })

        // this para hacer referencia al mismo
        this.current.items = [...posts];
        this.current.source = source; // al source que recibe por parametro

    }

    async function registerNewSource(url) {

        try {
            const response = await fetch(url);
            let text = await response.text();
            const domParser = new DOMParser();
            let doc = domParser.parseFromString(text, 'text/xml');

            const title = doc.querySelector('channel title, feed title');

            const source = {
                id: crypto.randomUUID(),
                name: title.textContent,
                url: url,
            }

            this.sources.push(source);

        } catch (error) {
            console.log(error);
        }



    }

    return {
        sources,
        current,
        loadSource,
        registerNewSource
    }

});