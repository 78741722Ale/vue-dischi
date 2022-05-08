<template>
    <!-- Questa è una singola card -->
    <div class="col- p-0 h_card bg_card flex_col">
        <!-- Immagine del CD -->
        <div class="col-12 h_xl w-100">
            <!-- Immagine con foto dinamica e titolo dinamico, preso tramite props -->
            <img :src="single.poster" :alt="single.title">
        </div>
        <!-- Titolo del CD -->
        <div class="col-12 h_sm w-100">
            <h3>{{ single.title }}</h3>
        </div>
        <!-- Descrizione Brano CD -->
        <div class="col-12 h_sm w-100 flex_col">
            <!-- Nome Band -->
            <div class="col-12 h-50 w-100">
                <span>{{ single.author }}</span>
            </div>
            <!-- Anno Uscita -->
            <div class="col-12 h-50 w-100">
                <span>{{ single.year }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCardComponent',
    props: {
        // Il singolo è di tipo oggetto, contiene una serie di info tra cui titolo ecc
        // Verificato la chiamata API tramite postman
        single: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>
.bg_card {
    background-color: #2E3A46;
    // Titolo 
    h4 h3 {
        color: #FFFFFB;
    }
    // Sottotitoli
    span {
        color: #7C7B77
    }
}

.col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 90%;
        height: 90%;
        background-position: center center;
        padding: 0;
    }
}

.flex_col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

// Altezze della card
.h_card { 
    height: 375px;
}
.h_xl {
    height: 60%;
}
.h_sm {
    height: 20%;
}

</style>