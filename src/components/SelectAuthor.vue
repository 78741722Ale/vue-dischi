<template >
    <div class="col-5 gap-5 d-flex justify-content-center align-items-center"> 
        <!-- Select del Bonus x artista -->
        <select 
        @change="$emit('AuthorSelect')" 
        @input="$emit('input', $event.target.value)"
        class="form-select w-75" 
        aria-label="Default select example">>
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
/* File Javascript */
export default {
    name:"SelectAuthor",
    // Props necessaria per la SelectAuthor
    props: {
        selectAuthor: String,
    }
}
</script>

<style lang="scss" scoped>
// Link al foglio di stile
@import '@/assets/scss/partials/header.scss';

</style>