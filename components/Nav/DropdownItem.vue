<template>
  <a
    :href="href || '#'"
    tabindex="3"
    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100"
    role="menuitem"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>
