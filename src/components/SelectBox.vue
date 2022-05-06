<template>
  <!-- Menù a tendina per il select -->
  <div class="col-6 gap-5 d-flex justify-content-center align-items-center">
    <!-- Questo emit deriva da Header -->
    <!-- Al change richiamo, tramite emit @AlbumSelect="selected_album" presente nell'header -->
    <select 
    @change="$emit('AlbumSelect')" 
    @input="$emit('input', $event.target.value)"
    class="form-select w-25" 
    aria-label="Default select example">
        <option selected disabled>Genere</option>
        <option value="Pop">Pop</option>
        <option value="Metal">Metal</option>
        <option value="Jazz">Jazz</option>
        <option value="Rock">Rock</option>
    </select>
    <!-- Select del Bonus x artista -->
    <select class="form-select w-25" aria-label="Default select example">>
      <option selected disabled>Artista</option>
      <option value="Bon Jovi">Bon Jovi</option>
      <option value="Queen">Queen</option>
      <option value="Sting">Sting</option>
      <option value="Steve Gadd Band">Steve Gadd Band</option>
      <option value="Iron Maiden">Iron Maiden</option>
      <option value="Eric Clapton">Eric Clapton</option>
      <option value="Deep Purple">Deep Purple</option>
      <option value="Metallica">Metallica</option>
      <option value="Dave Weckl">Dave Weckl</option>
      <option value="Michael Jacjson">Michael Jacjson</option>
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