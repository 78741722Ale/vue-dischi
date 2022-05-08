<template>
    <div class="container-fluid bg_header h_header">
        <div class="row justify-content-between h-100">
            <!-- Logo Spotify -->
            <div class="col-3 d-flex justify-content-start align-items-center">
                <img src="@/assets/logo.png" alt="Logo Spotify">
            </div>
            <div class="col-5 bg-danger d-flex justify-content-evenly align-items-center">
                <!-- Menù a tendina per il select -->
                <!-- selectAlbum => state.selectAlbum = this.selectAlbum -->
                <!-- Importando lo state io riesco a dire che selectAlbum è this. -->
                <SelectBox v-model="selectAlbum" @AlbumSelect="selected_album" />
                <!-- Menù a tendina per il select Author -->
                <SelectAuthor v-model="selectAuthor" @AlbumSelect="selected_album" />
            </div>
        </div>
    </div>
</template>

<script>
/* Import dello Componente SelectBox */
import SelectBox from "@/components/SelectBox.vue"
/* Import dello Componente SelectAuthor */
import SelectAuthor from "@/components/SelectAuthor.vue"
/* Import dello state della selectbox */
import state from "@/state.js";


export default {
    name: 'HeaderComponent',
    components: {
        SelectBox,
        SelectAuthor
    },
    data() {
        // Ascolto il valore di ritorno (in questo caso vuoto) di SelectAlbum 
        return {
            selectAlbum: '',
            selectAuthor: '',
        }
    },
    methods: {
        selected_album() {
        state.selectAlbum = this.selectAlbum;
        console.log(`Questo è il console log di ${state.selectAlbum}`);
        },
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/partials/header.scss';

</style>

