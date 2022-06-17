<template>
  <div class="grid grid-cols-5 p-2 border-t border-gray-300 h-24">
    <a href="#" class="hover:z-10">
      <img
        :src="cover"
        alt="temp"
        class="pr-2 h-20 transition duration-150 ease-in-out transform hover:scale-200"
      />
    </a>
    <div class="col-span-4 flex flex-col gap-2">
      <span class="border-b border-b-gray-300 truncate">
        <fa icon="book" :fixed-width="true" class="mr-1" />
        <a :href="`/manga/${mangaId}`" class="font-bold text-blue-700">
          {{ mangaTitle }}
        </a>
      </span>
      <span>
        <div class="flex justify-between">
          <div class="truncate flex-grow basis-2/3">
            <fa icon="file" :fixed-width="true" class="mr-1" />
            <a :href="`/chapter/${chapterId}`" class="text-blue-700">
              <span v-if="volume">Vol.{{ `${volume} ` }}</span>
              <span v-if="chapter">Ch.{{ `${chapter} ` }}</span>
              <span
                v-if="title && !title.toLocaleLowerCase().includes('chapter')"
              >
                {{ title }}
              </span>
            </a>
          </div>
          <div class="truncate basis-auto flex-shrink">
            <fa icon="eye" :fixed-width="true" class="mr-1" />
            <span>69,420</span>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  cover?: string;
  volume?: string;
  chapter?: string;
  chapterId?: string;
  mangaTitle?: string;
  mangaId?: string;
  scanlationGroup?: string;
  scanlationGroupId?: string;
  uploader?: string;
  uploaderId?: string;
  uploadedAt?: string;
}>();
</script>
