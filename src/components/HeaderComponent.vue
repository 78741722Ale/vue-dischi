<template>
    <div class="container-fluid bg_header h_header">
        <div class="row h-100">
            <div class="col-3 d-flex justify-content-start align-items-center">
                <img src="@/assets/logo.png" alt="Logo Spotify">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
// Altezza in VH per l'header
.h_header {
    height: 7vh;
    width: 100%;
}
// Color Background
.bg_header {
    background-color: #2E3A46;
}

.col-3 {
    img {
        width: 60px;
        height: 60px;
        aspect-ratio: 1 / 1;
    }
}

</style>

