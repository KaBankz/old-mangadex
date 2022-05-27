<template>
  <NavItem>
    <slot name="title" />
    <fa icon="chevron-down" class="transform scale-75 ml-1" />
    <template #dropdown>
      <div
        :class="[
          dropdownPosition === 'left' || dropdownPosition === undefined
            ? 'origin-top-left'
            : 'origin-top-right',
          'opacity-0 invisible transition-all duration-300 transform -translate-y-2 scale-95 group-hover:(opacity-100 visible translate-0 scale-100)',
        ]"
      >
        <div
          :class="[
            dropdownPosition === 'left' || dropdownPosition === undefined
              ? 'left-0 origin-top-left'
              : 'right-0 origin-top-right',
            'absolute w-40 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none',
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
