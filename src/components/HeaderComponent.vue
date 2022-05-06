<template>
    <div class="container-fluid bg_header h_header">
        <div class="row justify-content-between h-100">
            <!-- Logo Spotify -->
            <div class="col-3 d-flex justify-content-start align-items-center">
                <img src="@/assets/logo.png" alt="Logo Spotify">
            </div>
            <!-- Input type search -->
            <div class="col-3 d-flex justify-content-center align-items-center">
                <li class="nav-item dropdown flex_cent">
                    <!-- Toggle del dropdown -->
                    <a class="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                        Genere
                    </a>
                    <!-- Menu dropdown -->
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Rock</a></li>
                        <li><a class="dropdown-item" href="#">Pop</a></li>
                        <li><a class="dropdown-item" href="#">Jazz</a></li>
                        <li><a class="dropdown-item" href="#">Metal</a></li>
                    </ul>
                </li>
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
@import '@/assets/scss/partials/header.scss';

</style>

