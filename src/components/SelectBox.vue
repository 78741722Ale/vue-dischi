<template>
  <!-- Menù a tendina per il select -->
  <div class="col-5 gap-5 d-flex justify-content-center align-items-center">
    <!-- Questo emit deriva da Header -->
    <!-- Al change richiamo, tramite emit @AlbumSelect="selected_album" presente nell'header -->
    <select 
    @change="$emit('AlbumSelect')" 
    @input="$emit('input', $event.target.value)"
    class="form-select w-75" 
    aria-label="Default select example">
        <option selected disabled>Genere</option>
        <option value="Pop">Pop</option>
        <option value="Metal">Metal</option>
        <option value="Jazz">Jazz</option>
        <option value="Rock">Rock</option>
    </select>
  </div>
</template>

<script>
export default {
    name: "SelectBox",
    // Props necessaria per la SelectBox
    props: {
        selectAlbum: String,
    }
}
</script>

<style lang="scss" scoped>
// Link al foglio di stile
@import '@/assets/scss/partials/header.scss';

</style>