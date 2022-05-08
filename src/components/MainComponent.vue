<template>
    <!-- Genitore -->
    <section v-if='!loading' class="h_main bg_main flex_cent ">
        <div class="container h-100">
            <div class="row row-cols-6 w-100 flex_cent gy-2 gap-4 h-100">
                <!-- Verificato in caso di V-for va bene -->
                <!-- Single è l'oggetto dichiarato in props e nel componente SingleCardComponent -->
                <SingleCardComponent 
                :single="single" 
                v-for="(single, index) in selectSingle"
                :key="index"
                />
            </div>
        </div>
    </section>
    
    <!-- altrimenti metto il caricamento della pagina -->
    <section v-else>
        <h4>Stiamo Verificando i brani, attendere prego</h4>
    </section>
</template>

<script>
// Singola Card
import SingleCardComponent from '@/components/SingleCardComponent.vue'
// Importo chiamate axios
import axios from 'axios'
// Ora importo lo states
import state from "@/state.js";


export default {
    name: 'MainComponent',
    components: {SingleCardComponent},
    // Oggetto data
    data() {
        return {
            // link array di oggetti postman
            link: "https://flynn.boolean.careers/exercises/api/array/music",
            // Array di oggetti API
            albums:null,
            // Condizione v-else
            loading:true
        }
    },
    // Mounted per chiamata API
    mounted() {
    axios.get(this.link).then(response => {
        console.log(response); //verifico in console
        this.albums = response.data.response; // richiamo dell'array
        this.loading = false; // richiamo della condizione di caricamento
    })
    .catch(error => {
        //
        console.log(error);
        this.error = `Warning ${error.message}`;
    });
    },
    // Aggiungo il computed per il filtro
    computed : {
        selectSingle() {
            // Se nello state c'è il selected album allora
            if(state.selectAlbum) {
                // Verifico in console
                console.log(`Questo è il console log di ${this.albums}`);
                return this.albums.filter(single => {
                    // Questo è il filter necessario 
                    return single.genre.toLowerCase().includes(state.selectAlbum.toLowerCase())
                })
            } 
            // Se nello state è presente il select di Author
            if(state.selectAuthor) {
            // Verifico in console
            console.log(`Questo è il console log di ${this.albums}`);    
                return this.albums.filter(single => {
                    // Questo è il filter necessario PER IL BONUS, per l'author
                    return single.author.toLowerCase().includes(state.selectAuthor.toLowerCase())
                })
            }
            else {
                // Altrimenti ritorna tutti i titoli dell'album
                return this.albums
            }
        }
    }
}

</script>

<style lang="scss">
// Link al foglio di stile del main
@import '@/assets/scss/partials/main.scss';

</style>