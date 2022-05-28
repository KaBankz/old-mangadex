<template>
  <!--
  Columns are being used here for a specific reason.
  Previously there was mx-50 this was replaced in favor
  of the current column layout, because it allows placing
  elements in the sidebars.
  -->
  <div class="grid grid-cols-8">
    <div class="bg-gray-100"></div>
    <div class="col-span-6">
      <NavBar />
    </div>
    <div class="bg-gray-100"></div>
  </div>

  <div class="my-4 grid grid-cols-8">
    <div class="mx-4 rounded-md flex flex-col justify-between">
      <img
        src="https://c.tenor.com/TeuauSWtIuEAAAAi/dakooters-dkooters.gif"
        alt="lol"
      />
    </div>
    <div class="col-span-6">
      <Announcement />
    </div>
    <div class="mx-4 rounded-md flex flex-col justify-between">
      <img src="https://c.tenor.com/vtxDn2zA_esAAAAi/tanaka.gif" alt="lol" />
    </div>
  </div>

  <main class="my-4 grid grid-cols-8">
    <div class="mx-4 rounded-md flex flex-col justify-between">
      <img src="https://c.tenor.com/6UgxBeM0SyMAAAAM/anime.gif" alt="lol" />
      <img
        src="https://c.tenor.com/DeR79TvAbLcAAAAM/liddlebounce-jumping.gif"
        alt="lol"
      />
      <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="lol" />
    </div>
    <div class="col-span-6">
      <slot />
    </div>
    <div class="mx-4 rounded-md flex flex-col justify-between">
      <img src="https://c.tenor.com/6UgxBeM0SyMAAAAM/anime.gif" alt="lol" />
      <img
        src="https://c.tenor.com/DeR79TvAbLcAAAAM/liddlebounce-jumping.gif"
        alt="lol"
      />
      <img src="https://c.tenor.com/h-m9xK9UEhUAAAAC/lvdc.gif" alt="lol" />
    </div>
  </main>
</template>
