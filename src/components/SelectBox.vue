<template>
  <!-- Menù a tendina per il select -->
  <div class="col-3 d-flex justify-content-center align-items-center">
    <select class="form-select w-25" aria-label="Default select example">
        <option selected>Genere</option>
        <option value="1">Pop</option>
        <option value="2">Jazz</option>
        <option value="3">Metal</option>
        <option value="3">Rock</option>
        <option value="3">HipHop</option>
    </select>
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