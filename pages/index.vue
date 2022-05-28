<template>
  <div class="grid grid-cols-3 gap-10">
    <div class="w-full col-span-2">
      <div
        class="bg-gray-200 rounded-t-md border border-gray-300 p-4 text-center"
      >
        <a href="#" class="text-blue-700">
          <fa icon="arrow-up-right-from-square" />
          Latest Updates
        </a>
      </div>
      <div class="flex justify-between text-center bg-gray-200">
        <button
          class="w-full p-4 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          All
        </button>
        <button
          class="w-full p-4 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          Follows
        </button>
      </div>
      <div class="grid grid-cols-2 bg-gray-200">
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
        <MangaCard />
      </div>
    </div>
    <div class="w-full">
      <div
        class="bg-gray-200 rounded-t-md border border-gray-300 p-4 text-center"
      >
        <a href="#" class="text-blue-700">
          <fa icon="arrow-up-right-from-square" />
          Top Chapters
        </a>
      </div>
      <div class="flex justify-between text-center bg-gray-200">
        <button
          class="w-full p-4 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          6h
        </button>
        <button
          class="w-full p-4 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          24h
        </button>
        <button
          class="w-full p-4 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          7d
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});
</script>
