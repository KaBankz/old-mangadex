<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="w-full col-span-2">
      <div
        class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
      >
        <a href="#" class="text-blue-700">
          <fa icon="arrow-up-right-from-square" />
          Latest Updates
        </a>
      </div>
      <div class="flex justify-between text-center bg-gray-200">
        <button
          class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          All
        </button>
        <button
          class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          Follows
        </button>
      </div>
      <div
        class="grid grid-cols-2 border-x border-b border-gray-300 rounded-b-md"
      >
        <MangaCard
          v-for="chapter in latestChapters"
          :key="chapter.id"
          :volume="chapter.volume"
          :chapter="chapter.chapter"
          :title="chapter.title"
          :cover="`https://uploads.mangadex.org/covers/${chapter.manga.id}/${chapter.cover}.256.jpg`"
          :manga-title="chapter.manga.attributes.title?.en"
          :manga-id="chapter.manga.id"
          :chapter-id="chapter.id"
          :scanlation-group="chapter.scanlation_group?.attributes.name"
          :scanlation-group-id="chapter.scanlation_group?.id"
          :uploader="chapter.user.attributes.username"
          :uploader-id="chapter.user.id"
          :uploaded-at="chapter.readableAt"
        />
      </div>
    </div>
    <div class="w-full">
      <div
        class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
      >
        <a href="#" class="text-blue-700">
          <fa icon="arrow-up-right-from-square" />
          Top Chapters
        </a>
      </div>
      <div class="flex justify-between text-center bg-gray-200">
        <button
          class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          6h
        </button>
        <button
          class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          24h
        </button>
        <button
          class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
        >
          7d
        </button>
      </div>
      <div class="flex flex-col border-x border-b border-gray-300 rounded-b-md">
        <MangaBasicCard
          v-for="chapter in latestChapters"
          :key="chapter.id"
          :volume="chapter.volume"
          :chapter="chapter.chapter"
          :title="chapter.title"
          :cover="`https://uploads.mangadex.org/covers/${chapter.manga.id}/${chapter.cover}.256.jpg`"
          :manga-title="chapter.manga.attributes.title?.en"
          :manga-id="chapter.manga.id"
          :chapter-id="chapter.id"
          :scanlation-group="chapter.scanlation_group?.attributes.name"
          :scanlation-group-id="chapter.scanlation_group?.id"
          :uploader="chapter.user.attributes.username"
          :uploader-id="chapter.user.id"
          :uploaded-at="chapter.readableAt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});

const latestChaptersRequest = await $fetch(
  'https://api.mangadex.org/chapter?limit=32&offset=0&includes[]=user&includes[]=scanlation_group&includes[]=manga&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[readableAt]=desc'
);

if (latestChaptersRequest !== null && latestChaptersRequest.result === 'ok') {
}
const latestChapters = latestChaptersRequest.data.map((e) => {
  return {
    id: e.id,
    volume: e.attributes.volume,
    chapter: e.attributes.chapter,
    title: e.attributes.title,
    readableAt: e.attributes.readableAt,
    translatedLanguage: e.attributes.translatedLanguage,
    manga: e.relationships.find((i) => i.type === 'manga'),
    scanlation_group: e.relationships.find(
      (i) => i.type === 'scanlation_group'
    ),
    user: e.relationships.find((i) => i.type === 'user'),
  };
});
const allIds = latestChapters.map((e) => `&ids[]=${e.manga.id}`);
const coversRequest = await $fetch(
  `https://api.mangadex.org/manga?includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic${[
    ...new Set(allIds),
  ].join('')}&limit=${allIds.length}`
);
const covers = coversRequest.data.map((e) => {
  return {
    id: e.id,
    fileName: e.relationships.find((i) => i.type === 'cover_art').attributes
      .fileName,
  };
});
latestChapters.map((e) => {
  e.cover = covers.find((i) => i.id === e.manga.id).fileName;
});
</script>
