<template>
    <!-- Genitore -->
    <div class="container-fluid flex_cent h_main bg_main">
        <div class="row w-100 flex_cent gap-4 h-100">
            <!-- Verificato in caso di V-for va bene -->
            <!-- Questa è una singola card -->
            <div class="col-2 p-0 h_card bg-primary flex_col">
                <!-- Immagine -->
                <div class="col-12 h_xl bg-warning w-100">
                    <img src="https://picsum.photos/300/300" alt="Andrà Titolo Dinamico">
                </div>
                <!-- Titolo -->
                <div class="col-12 h_sm bg-danger w-100">B</div>
                <!-- Descrizione Brano -->
                <div class="col-12 h_sm bg-danger w-100">B</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainComponent'
}
</script>

<style lang="scss" scoped>
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

// Altezze della card

.h_card { 
    height: 425px;
}
.h_xl {
    height: 60%;
}
.h_sm {
    height: 20%;
}


</style>