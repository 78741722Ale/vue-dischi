<template>
    <!-- Genitore -->
    <section class="h_main bg_main flex_cent ">
        <div class="container h-100">
            <div class="row row-cols-6 w-100 flex_cent gy-2 gap-4 h-100">
                <!-- Verificato in caso di V-for va bene -->
                <!-- Single è l'oggetto dichiarato in props e nel componente SingleCardComponent -->
                <SingleCardComponent 
                :single="single" 
                v-for="(single, index) in albums"
                :key="index"
                />
            </div>
        </div>
    </section>
</template>

<script>
// Singola Card
import SingleCardComponent from '@/components/SingleCardComponent.vue'
// Importo chiamate axios
import axios from 'axios'


export default {
    name: 'MainComponent',
    components: {SingleCardComponent},
    // Oggetto data
    data() {
        return {
            // Array di oggetti API
            albums:null,
            // Condizione v-else
            loading:true
        }
    },
    // Mounted per chiamata API
    mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {
        console.log(response);
        this.albums = response.data.response; // richiamo dell'array
        this.loading = false; // richiamo della condizione di caricamento
    })
    .catch(error => {
        console.log(error);
        this.error = `Warning ${error.message}`;
    });
    },
}

</script>

<style lang="scss">
// Altezza in VH del Main
.h_main {
    height: calc(100% - 7vh);
    width: 100%;
}
// Colore di Background
.bg_main {
    background-color: #1E2D3B;
}
// Utilities
.flex_cent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex_col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bg_card {
    background-color: #2E3A46;
    // Titolo 
    h3 {
        color: #FFFFFB;
    }
    // Sottotitoli
    span {
        color: #7C7B77
    }
}

</style>