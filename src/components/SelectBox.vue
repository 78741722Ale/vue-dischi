<template>
  <!-- Menù a tendina per il select -->
  <div class="col-3 d-flex justify-content-center align-items-center">
    <li class="nav-item dropdown flex_cent">
      <!-- Toggle del dropdown -->
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
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
</template>

<script>
export default {
    name: "SelectBox"
}
</script>

<style lang="scss" scoped>
// Link al foglio di stile
@import '@/assets/scss/partials/header.scss';

</style>