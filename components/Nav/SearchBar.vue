<template>
  <li class="inline mx-2">
    <div class="relative inline-flex">
      <select
        name="search"
        id="search"
        class="rounded-l-md border-2 border-gray-300 px-2 hover:(bg-gray-100 border-gray-500) focus:(outline-none border-gray-500)"
      >
        <option value="manga">Manga</option>
        <option value="forum">Forum</option>
      </select>
      <input
        type="text"
        placeholder="Quick Search"
        class="px-3 border-y-2 border-gray-300 hover:border-gray-500 focus:(outline-none border-gray-500)"
      />
      <button
        class="inline-flex justify-center w-full px-4 py-3 rounded-r-md border-2 border-gray-400 bg-gradient-to-b from-gray-200 to-gray-300 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:(from-gray-300 to-gray-400)"
        type="button"
      >
        <fa icon="search" />
      </button>
    </div>
  </li>
</template>
