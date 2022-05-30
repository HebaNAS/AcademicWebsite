<script type="ts">
    import AnimatedLogo from '$lib/AnimatedLogo.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    onMount(() => {
      const btn = document.querySelector('button.mobile-menu-button');
      const menu = document.querySelector('#mobile-menu');
      const menuIcon = document.querySelectorAll('.block-line');
      const checkboxes = document.querySelectorAll('input[id*="toggle"]');

      // Toggle mobile menu
      btn.addEventListener('click', () => {
        menu.classList.toggle('slide');
        menuIcon.forEach(element =>{
          element.classList.toggle('cross-line');
        });
      });

      // Toggle dark mode
      checkboxes.forEach(el => {
        el.addEventListener('change', () => {
        if(el.checked) {
            trans()
            document.documentElement.classList.add('dark');
          } else {
            trans()
            document.documentElement.classList.remove('dark');
          }
        })

        const trans = () => {
          document.documentElement.classList.add('transition');
          window.setTimeout(() => {
              document.documentElement.classList.remove('transition');
          }, 1000);
        }
      });
    });
</script>


<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-white dark:bg-theme-action-dark">
    <div class="mx-auto px-2 sm:px-6 xl:px-8 md:px-6">
      <div class="relative flex items-center justify-between h-20 xl:h-36 md:h-28">
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <div class="inline-block items-center justify-center p-2">
            <label for="toggleB" class="flex items-center cursor-pointer px-3 py-2">
              <!-- toggle -->
              <div class="relative">
                <!-- input -->
                <input type="checkbox" id="toggleB" name="dark-mode" class="sr-only">
                <!-- line -->
                <div class="block line bg-gray-600 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
          <!-- Mobile menu button-->
          <button type="button" class="btn-burger inline-block items-center justify-center p-2 mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <span class="block-line bg-theme-action dark:bg-theme-fg-light"></span>
            <span class="block-line bg-theme-action dark:bg-theme-fg-light"></span>
            <span class="block-line bg-theme-action dark:bg-theme-fg-light"></span>
          </button>
        </div>
        <div class="flex-1 inline-flex items-center justify-start md:items-stretch md:justify-start">
          <a href="/" class="inline-flex items-center w-60 md:w-80 mb-4 mt-2">
            <div class="items-center h-10 pb-2 mb-3">
              <AnimatedLogo/>
            </div>
            <div class="items-center">
              <span class="inline-block my-name text-theme-action dark:text-theme-fg-light text-2xl mt-3 xl:text-4xl pl-3 font-semibold">Heba El-Shimy</span>
            </div>
          </a>
        </div>
        <div class="flex-1 flex items-center justify-end md:items-stretch md:justify-end main-menu">
          <div class="hidden md:block md:ml-6 md:mt-12">
            <div class="flex space-x-4">
              <a sveltekit:prefetch href="/" class="text-theme-action dark:text-white px-3 py-2 text-xl font-normal transition-colors ease-in-out duration-500" aria-current="page" class:active="{$page.url.pathname === "/"}">Home</a>
  
              <a sveltekit:prefetch href="/research" class="text-theme-text dark:text-white dark:hover:text-theme-fg hover:text-theme-fg hover:scale-100 px-3 py-2 text-xl font-normal transition-colors ease-in-out duration-500" class:active="{$page.url.pathname === "/research"}">Research</a>
  
              <a sveltekit:prefetch href="/blog" class="text-theme-text dark:text-white dark:hover:text-theme-fg hover:text-theme-fg px-3 py-2 text-xl font-normal transition-colors ease-in-out duration-500" class:active="{$page.url.pathname === "/blog"}">Blog</a>
  
              <a sveltekit:prefetch href="/contact" class="text-theme-text dark:text-white dark:hover:text-theme-fg hover:text-theme-fg px-3 py-2 text-xl font-normal transition-colors ease-in-out duration-500" class:active="{$page.url.pathname === "/contact"}">Contact</a>

              <div class="flex items-center justify-center w-full mb-12">
                <label for="toggleA" class="flex items-center cursor-pointer px-3 py-2">
                  <!-- toggle -->
                  <div class="relative">
                    <!-- input -->
                    <input type="checkbox" id="toggleA" name="dark-mode" class="sr-only">
                    <!-- line -->
                    <div class="block line bg-gray-600 w-14 h-8 rounded-full"></div>
                    <!-- dot -->
                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden slide" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a sveltekit:prefetch href="/" class="text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal" class:active="{$page.url.pathname === "/"}">Home</a>
  
        <a sveltekit:prefetch href="/research" class="text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal" class:active="{$page.url.pathname === "/research"}">Research</a>
  
        <a sveltekit:prefetch href="/blog" class="text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal" class:active="{$page.url.pathname === "/blog"}">Blog</a>
  
        <a sveltekit:prefetch href="/contact" class="text-theme-text dark:text-theme-fg-light block px-3 py-2 rounded-md text-base font-normal" class:active="{$page.url.pathname === "/contact"}">Contact</a>
      </div>
    </div>
  </nav>

<style global lang="postcss">
    .my-name {
        font-family: 'Sacramento', sans-serif;
    }

    input ~ .dot {
      background-image: url('/light.png');
      background-size: 20px;
      background-repeat:no-repeat;
      background-position: center center;
    }

    input:checked ~ .dot {
      background-image: url('/dark.png');
      background-size: 20px;
      background-repeat:no-repeat;
      background-position: 3px 1px;
      transform: translateX(100%);
      background-color: var(--action);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    input:checked ~ .line {
      background-color: var(--fg);
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.5);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    input ~ .line {
      background-color: var(--fg);
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.5);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    #mobile-menu {
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.5);
      background-color: var(--fg-light);
      overflow: hidden;
      max-height: 400px;
      transition: max-height 1s ease-in;
    }

    #mobile-menu.slide {
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.5);
      background-color: var(--fg-light)/0.5;
      max-height: 0px;
      transition: max-height 1s ease-out;
    }

    .main-menu a.active {
      color: var(--action) !important;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    #mobile-menu a.active {
      background-color: var(--action-light) !important;
      color: var(--bg) !important;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    .dark .main-menu a.active {
      color: var(--fg) !important;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    .dark #mobile-menu a.active {
      background-color: var(--fg-dark) !important;
      color: var(--action) !important;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    html.dark #mobile-menu {
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.5);
      background-color: var(--action-light);
    }

    .btn-burger {
      position: relative;
      width: 43px;
      height: 22px;
      background: transparent;
      border: 0;
      border-radius: 0;
      padding: 0;
      outline: none;
    }

    .block-line {
      position: relative;
      display: block;
      width: 34px;
      height: 4px;
      transition: all 0.3s ease-in-out;
    }

    .block-line:nth-child(2), .block-line:nth-child(4) {
      position: absolute;
    }

    .block-line:nth-child(2) {
      top: 0;
    }
    
    .block-line:nth-child(4) {
      bottom: 0;
    }

    .cross-line:nth-child(2), .cross-line:nth-child(3) {
      transform: rotate(45deg);
    }
      
    .cross-line:nth-child(2) {
      top: 9px;
    }

    .cross-line:nth-child(3) {
      margin: 0;
    }
    
    .cross-line:nth-child(4) {
      transform: rotate(-45deg);
      bottom: 9px;
    }
</style>