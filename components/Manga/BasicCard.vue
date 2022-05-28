<template>
  <div class="grid grid-cols-5 p-2 border-t border-gray-300 h-24">
    <a href="#" class="hover:z-10">
      <img
        src="https://mangadex.org/covers/6b958848-c885-4735-9201-12ee77abcb3c/101ada2e-2bc1-4247-be2f-72230d0a0346.jpg"
        alt="temp"
        class="px-2 h-20 transition duration-150 ease-in-out transform hover:scale-200"
      />
    </a>
    <div class="col-span-4 flex flex-col gap-2">
      <span class="border-b border-b-gray-300 truncate">
        <fa icon="book" :fixed-width="true" class="mr-1" />
        <a href="#" class="font-bold text-blue-700">Hello World</a>
      </span>
      <span>
        <div class="flex justify-between">
          <div class="truncate">
            <fa icon="file" :fixed-width="true" class="mr-1" />
            <a href="#" class="text-blue-700">Vol.2 Chapter 8.2</a>
          </div>
          <div class="truncate">
            <fa icon="eye" :fixed-width="true" class="mr-1" />
            <span>69,420</span>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
