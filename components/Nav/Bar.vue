<template>
  <nav class="bg-gray-100 max-h-20 flex justify-between">
    <ul>
      <slot>
        <li class="inline mr-4">
          <div
            class="relative inline-block text-left text-white font-bold group"
          >
            <a href="/" title="MangaDex OLD">
              <img
                src="~/assets/mangadex-logo.svg"
                alt="logo"
                class="inline-block filter grayscale-[100] group-hover:(animate-spin grayscale-0)"
              />
              <div
                class="inline-block bg-gray-400 ml-1 px-1 rounded-lg group-hover:(bg-orange-400)"
              >
                OLD
              </div>
            </a>
          </div>
        </li>

        <NavDropdown>
          <template #title>
            <fa icon="book" />
            Manga
          </template>
          <template #items>
            <div>
              <NavDropdownItem>Hello World</NavDropdownItem>
              <NavDropdownItem>Hello World</NavDropdownItem>
            </div>
          </template>
        </NavDropdown>

        <NavItem>
          <fa icon="bookmark" />
          Follows
        </NavItem>

        <NavDropdown>
          <template #title>
            <fa icon="users" />
            Community
          </template>
          <template #items>
            <div>
              <NavDropdownItem>Hello World</NavDropdownItem>
              <NavDropdownItem>Hello World</NavDropdownItem>
            </div>
          </template>
        </NavDropdown>

        <NavDropdown>
          <template #title>
            <fa icon="circle-info" />
            Info
          </template>
          <template #items>
            <div>
              <NavDropdownItem href="#">Hello World</NavDropdownItem>
              <NavDropdownItem href="#">Hello World</NavDropdownItem>
            </div>
          </template>
        </NavDropdown>
      </slot>
    </ul>
    <ul>
      <slot name="right">
        <NavSearchBar />
        <NavItem>
          <fa icon="gear" />
        </NavItem>
        <NavDropdown dropdown-position="right">
          <template #title>
            <fa icon="user-xmark" />
          </template>
          <template #items>
            <div>
              <NavDropdownItem href="#">Hello World</NavDropdownItem>
              <NavDropdownItem href="#">Hello World</NavDropdownItem>
            </div>
          </template>
        </NavDropdown>
      </slot>
    </ul>
  </nav>
</template>
