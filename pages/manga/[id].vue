<template>
  <div class="text-center font-bold text-4xl">
    Welcome to
    <pre class="inline-block">/manga/{{ $route.params.id }}</pre>
    ! 🎉
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
});
</script>
