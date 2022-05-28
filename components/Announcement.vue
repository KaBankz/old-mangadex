<template>
  <div class="rounded-md text-center" id="temp">
    <div
      class="border border-blue-300 bg-gradient-to-b from-blue-100 to-blue-200 p-4 transition duration-150 ease-in-out transform truncate hover:(from-blue-200)"
    >
      <a href="#">
        <span class="font-bold">Announcement (May-28):</span>
        Site is a work in progress
        <fa icon="arrow-up-right-from-square" />
      </a>
    </div>
    <div
      class="border border-green-300 bg-gradient-to-b from-green-100 to-green-200 p-4 transition duration-150 ease-in-out transform truncate hover:(from-green-200)"
    >
      <a href="#">
        <span class="font-bold">Success (May-28):</span>
        Site is a work in progress
        <fa icon="arrow-up-right-from-square" />
      </a>
    </div>
    <div
      class="border border-orange-300 bg-gradient-to-b from-orange-100 to-orange-200 p-4 transition duration-150 ease-in-out transform truncate hover:(from-orange-200)"
    >
      <a href="#">
        <span class="font-bold">Warning (May-28):</span>
        Site is a work in progress
        <fa icon="arrow-up-right-from-square" />
      </a>
    </div>
    <div
      class="border border-red-300 bg-gradient-to-b from-red-100 to-red-200 p-4 transition duration-150 ease-in-out transform truncate hover:(from-red-200)"
    >
      <a href="#">
        <span class="font-bold">Danger (May-28):</span>
        Site is a work in progress
        <fa icon="arrow-up-right-from-square" />
      </a>
    </div>
  </div>
</template>

<style scoped>
div > :first-child {
  @apply rounded-t-md;
}
div > :last-child {
  @apply rounded-b-md;
}
</style>
