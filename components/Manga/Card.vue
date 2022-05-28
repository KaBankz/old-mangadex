<template>
  <div class="grid grid-cols-3 my-2">
    <a href="#">
      <img
        src="https://mangadex.org/covers/6b958848-c885-4735-9201-12ee77abcb3c/101ada2e-2bc1-4247-be2f-72230d0a0346.jpg"
        alt="temp"
        class="px-2 transition duration-150 ease-in-out transform hover:scale-125"
      />
    </a>
    <div class="col-span-2 flex flex-col gap-2">
      <span class="border border-b-gray-300">
        <fa icon="book" :fixed-width="true" class="mr-1" />
        <a href="#" class="text-blue-700">Hello World</a>
      </span>
      <span>
        <fa icon="file" :fixed-width="true" class="mr-1" />
        <a href="#" class="text-blue-700">Vol.2 Chapter 8.2 🇺🇸</a>
      </span>
      <span>
        <fa icon="users" :fixed-width="true" class="mr-1" />
        <a href="#" class="text-blue-700">KaBanks</a>
      </span>
      <span>
        <fa icon="clock" :fixed-width="true" class="mr-1" />
        <span>69 secs</span>
      </span>
    </div>
  </div>
</template>
