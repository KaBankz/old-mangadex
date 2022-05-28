<template>
  <nav class="px-50 bg-gray-100 max-h-20 flex justify-between">
    <ul>
      <slot>
        <li class="inline mr-4">
          <div class="relative inline-block text-left group">
            <a href="#">
              <img
                src="~/assets/mangadex-logo.svg"
                alt="logo"
                class="inline-block filter grayscale-[100] group-hover:(animate-spin grayscale-0)"
              />
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
