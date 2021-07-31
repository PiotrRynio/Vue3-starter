<template>
  <div id="app">
    <RickAndMortyCharacters />
  </div>
</template>

<script>
import RickAndMortyCharacters from '@/components/pages/RickAndMortyCharacters/RickAndMortyCharacters';

export default {
  name: 'App',
  components: {
    RickAndMortyCharacters,
  },
};
</script>

<style lang="scss">
#app {
  background-color: red;
  background: $app-background-color;
}
</style>
