<script>
    import { base } from '$app/paths';
</script>

<section class="w-screen md:w-full lg:w-screen h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-center justify-center py-20">
    <div class="w-11/12 md:w-8/12 bg-white dark:bg-theme-action p-10 rounded-lg shadow-xl text-center">
        <h1 class="text-4xl font-bold text-theme-action dark:text-theme-fg-light mb-4">Page Not Found</h1>
        
        <p class="text-xl text-theme-text-dark dark:text-theme-fg-light mb-6">
            The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div class="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <a href="{base}/" class="px-6 py-3 bg-theme-action text-white dark:bg-theme-fg-light dark:text-theme-text-dark rounded-md hover:bg-theme-action-dark dark:hover:bg-theme-fg-dark transition-colors duration-300">
                Back to home
            </a>
            <button 
                onclick="history.back()" 
                class="px-6 py-3 border border-theme-action text-theme-action dark:border-theme-fg-light dark:text-theme-fg-light rounded-md hover:bg-theme-action hover:text-white dark:hover:bg-theme-fg-dark dark:hover:text-theme-action-dark transition-colors duration-300">
                Go back
            </button>
        </div>
    </div>
</section>

<style>
    .grad-1 {
        background: linear-gradient(146deg, rgba(255,255,255,0.2) 0%, rgba(2,0,36,0.1) 100%);
        min-height: calc(100vh - 18rem);
    }

    .dark .grad-1 {
        background: linear-gradient(146deg, rgba(2,0,36,0.15) 0%, rgba(2,0,36,0.35) 100%) !important;
    }
</style>
