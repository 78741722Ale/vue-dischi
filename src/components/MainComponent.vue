<template>
    <!-- Genitore -->
    <div class="container-fluid flex_cent h_main bg_main">
        <div class="row w-100 flex_cent gap-4 h-75">
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
            <div class="col-2 h-50 bg-primary">A</div>
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



</style>