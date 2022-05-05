<template>
    <!-- Genitore -->
    <div class="container-fluid h_main bg_main">
        <div class="row">
            <div class="col-5"></div>
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


</style>