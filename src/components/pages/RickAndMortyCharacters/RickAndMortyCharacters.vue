<template>
  <AppHeader />
  <AppBody />

  <div>example text</div>
</template>

<script>
import AppHeader from '@/components/organisms/AppHeader/AppHeader';
import AppBody from '@/components/organisms/AppBody/AppBody';

export default {
  name: 'RickAndMortyCharacters',
  components: {
    AppHeader,
    AppBody,
  },
};
</script>

<style scoped></style>
