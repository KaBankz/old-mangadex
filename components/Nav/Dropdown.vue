<template>
  <NavItem>
    <slot name="title" />
    <fa icon="chevron-down" class="transform scale-75 ml-1" />
    <template #dropdown>
      <div
        class="opacity-0 invisible transition-all origin-top duration-100 transform -translate-y-2 scale-90 group-hover:(opacity-100 visible translate-0 scale-100)"
      >
        <div
          :class="[
            dropdownPosition === 'left' || dropdownPosition === undefined
              ? 'left-0'
              : 'right-0',
            'absolute w-40 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-b-md shadow-lg outline-none',
          ]"
        >
          <slot name="items" />
        </div>
      </div>
    </template>
  </NavItem>
</template>

<script setup lang="ts">
defineProps<{
  dropdownPosition?: string;
}>();
</script>
