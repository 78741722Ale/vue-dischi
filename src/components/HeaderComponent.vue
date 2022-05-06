<template>
    <div class="container-fluid bg_header h_header">
        <div class="row justify-content-between h-100">
            <!-- Logo Spotify -->
            <div class="col-3 d-flex justify-content-start align-items-center">
                <img src="@/assets/logo.png" alt="Logo Spotify">
            </div>
            <!-- Menù a tendina per il select -->
            <SelectBox />
        </div>
    </div>
</template>

<script>
import SelectBox from "@/components/SelectBox.vue"

export default {
    name: 'HeaderComponent',
    components: {
        SelectBox
    }

}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/partials/header.scss';

</style>

