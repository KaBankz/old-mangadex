<template>
  <div class="grid grid-cols-3 gap-5">
    <!-- right column -->
    <div class="w-full col-span-2 flex flex-col gap-5">
      <div class="shadow-sm rounded-md">
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
    </div>

    <!-- left column -->
    <div class="w-full flex flex-col gap-5">
      <!-- top chapters -->
      <div class="shadow-sm rounded-md">
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
        <div
          class="flex flex-col border-x border-b border-gray-300 rounded-b-md"
        >
          <MangaBasicCard
            v-for="chapter in latestChapters.slice(0, 10)"
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

      <!-- links -->
      <div class="shadow-sm rounded-md">
        <div
          class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
        >
          Links
        </div>
        <div
          class="flex justify-between p-4 border-x border-b border-gray-300 rounded-b-md text-6xl"
        >
          <a href="#" title="@Mangadex on Twitter" class="text-blue-400">
            <fa :icon="['fab', 'twitter-square']" />
          </a>
          <a href="#" title="/r/mangadex on Reddit" class="text-red-600">
            <fa :icon="['fab', 'reddit-square']" />
          </a>
          <a href="#" title="Mangadex on Discord" class="text-blue-600">
            <fa :icon="['fab', 'discord']" />
          </a>
          <a
            href="#"
            title="Mangadex Scanlation Bloghosting"
            class="text-orange-400"
          >
            <fa :icon="['fab', 'blogger']" />
          </a>
          <a href="#" title="Mangadex on Tumblr" class="text-blue-900">
            <fa :icon="['fab', 'tumblr-square']" />
          </a>
        </div>
      </div>

      <!-- news -->
      <div class="shadow-sm rounded-md">
        <div
          class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
        >
          News
        </div>
        <div
          class="flex flex-col p-2 border-x border-b border-gray-300 rounded-b-md font-bold"
        >
          <a href="#">No posts to display</a>
        </div>
      </div>

      <!-- reading history -->
      <div class="shadow-sm rounded-md">
        <div
          class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
        >
          <a href="#" class="text-blue-700">
            <fa icon="arrow-up-right-from-square" />
            Reading History
          </a>
        </div>
        <div
          class="flex flex-col p-2 border-x border-b border-gray-300 rounded-b-md text-xs"
        >
          <div
            class="border border-blue-300 bg-gradient-to-b from-blue-100 to-blue-200 p-4 transition duration-150 ease-in-out transform truncate hover:(from-blue-200) rounded-md"
          >
            <span class="font-bold">Notice:</span>
            Please
            <a href="#" class="text-blue-500">
              <fa icon="right-to-bracket" />
              log in
            </a>
            to view your reading history.
          </div>
        </div>
      </div>

      <!-- top manga -->
      <div class="shadow-sm rounded-md">
        <div
          class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
        >
          <a href="#" class="text-blue-700">
            <fa icon="arrow-up-right-from-square" />
            Top Manga
          </a>
        </div>
        <div class="flex justify-between text-center bg-gray-200">
          <button
            class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
          >
            Follows
          </button>
          <button
            class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
          >
            Rating
          </button>
        </div>
        <div
          class="flex flex-col border-x border-b border-gray-300 rounded-b-md"
        >
          <!-- TODO: Replace chapter name with follow count,
                     and replace views with user rating and user count -->
          <MangaBasicCard
            v-for="chapter in latestChapters.slice(0, 10)"
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

      <!-- latest posts -->
      <div class="shadow-sm rounded-md">
        <div
          class="bg-gray-200 rounded-t-md border border-gray-300 p-2 text-center"
        >
          <a href="#" class="text-blue-700">
            <fa icon="arrow-up-right-from-square" />
            Latest Posts
          </a>
        </div>
        <div class="flex justify-between text-center bg-gray-200">
          <button
            class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
          >
            Forums
          </button>
          <button
            class="w-full p-2 text-blue border border-gray-300 focus:(text-white bg-blue-500)"
          >
            Manga
          </button>
        </div>
        <div
          class="flex flex-col border-x border-b border-gray-300 rounded-b-md divide-y"
        >
          <div class="flex flex-col p-2 divide-y">
            <span>title</span>
            <span>content</span>
          </div>

          <div class="flex flex-col p-2 divide-y">
            <span>title</span>
            <span>content</span>
          </div>
        </div>
      </div>
    </div>

    <!-- carousels -->
    <div class="w-full col-span-3 flex flex-col gap-5">
      <div>
        <div class="flex justify-between">
          <h2 class="text-3xl font-semibold">Featured Titles</h2>
          <div>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="chevron-left" />
            </button>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="pause" />
            </button>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="chevron-right" />
            </button>
          </div>
        </div>
        <div class="flex">
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <h2 class="text-3xl font-semibold">New Titles</h2>
          <div>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="chevron-left" />
            </button>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="pause" />
            </button>
            <button class="p-2 bg-gray-200 rounded-md border border-gray-400">
              <fa icon="chevron-right" />
            </button>
          </div>
        </div>
        <div class="flex">
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
          <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="" />
        </div>
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
