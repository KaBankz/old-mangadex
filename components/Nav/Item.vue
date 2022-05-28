<template>
  <li class="inline">
    <div class="relative inline-block text-left z-10 group">
      <button
        class="inline-flex justify-center w-full px-4 py-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-900"
        type="button"
      >
        <span>
          <slot />
        </span>
      </button>
      <slot name="dropdown" />
    </div>
  </li>
</template>
