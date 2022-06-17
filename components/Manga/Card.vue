<template>
  <div class="grid grid-cols-3 py-2 px-2 border-t border-gray-300">
    <a href="#" class="hover:z-10">
      <img
        :src="cover"
        alt="temp"
        class="pr-2 transition duration-150 ease-in-out transform hover:scale-125"
      />
    </a>
    <div class="col-span-2 flex flex-col gap-2">
      <span class="border-b border-gray-300 truncate">
        <fa icon="book" :fixed-width="true" class="mr-1" />
        <a :href="`/manga/${mangaId}`" class="font-bold text-blue-700">
          {{ mangaTitle }}
        </a>
      </span>
      <span class="truncate">
        <fa icon="file" :fixed-width="true" class="mr-1" />
        <a :href="`/chapter/${chapterId}`" class="text-blue-700">
          <span v-if="volume">Vol.{{ `${volume} ` }}</span>
          <span v-if="chapter">Ch.{{ `${chapter} ` }}</span>
          <span v-if="title && !title.toLocaleLowerCase().includes('chapter')">
            {{ title }}
          </span>
        </a>
      </span>
      <span class="truncate">
        <fa icon="users" :fixed-width="true" class="mr-1" />
        <a
          :href="
            scanlationGroup
              ? `/group/${scanlationGroupId}`
              : `/user/${uploaderId}`
          "
          class="text-blue-700"
        >
          {{ scanlationGroup || uploader }}
        </a>
      </span>
      <span class="truncate">
        <fa icon="clock" :fixed-width="true" class="mr-1" />
        <span>{{ uploadedAt }}</span>
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
