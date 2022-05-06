<template>
    <!-- Genitore -->
    <div class="container-fluid flex_cent h_main bg_main">
        <div class="row row-cols-6 w-100 flex_cent gap-4 h-100">
            <!-- Verificato in caso di V-for va bene -->
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
            <SingleCardComponent />
        </div>
    </div>
</template>

<script>
// Singola Card
import SingleCardComponent from '@/components/SingleCardComponent.vue'

export default {
    name: 'MainComponent',
    components: {
    SingleCardComponent
    }
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