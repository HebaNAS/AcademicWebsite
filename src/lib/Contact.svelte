<script type="ts">

</script>

<section class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
    <form
        action="https://formspree.io/f/xayvjrek"
        method="POST"
        name="simple-contact-form"
        accept-charset="utf-8"
        class="flex flex-col h-max items-center mb-10"
        >
        <div class="w-10/12 h-max lg:w-7/12 ml-auto mr-auto pb-20">
            <h2 class="text-3xl font-bold font-display text-theme-text-dark dark:text-theme-bg text-left my-6 self-start">Get in touch.</h2>
            <div class="py-5 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                    <div class="col-span-6 sm:col-span-4 my-4">
                        <input type="text" name="name" id="full-name" placeholder="Your name" required class="mt-1 block w-3/4 uppercase border-theme-action-light dark:border-theme-fg-dark border-b-2 bg-transparent focus-visible:border-black dark:focus-visible:border-white focus-visible:border-b-3 transition-all ease-in-out duration-500">
                    </div>
                    <div class="col-span-6 sm:col-span-4 my-10">
                        <input type="email" name="_replyto" id="email-address" placeholder="your email" required class="mt-1 block w-5/6 uppercase border-theme-action-light dark:border-theme-fg-dark border-b-2 bg-transparent focus-visible:border-black dark:focus-visible:border-white focus-visible:border-b-3 transition-all ease-in-out duration-500">
                    </div>
                    <div class="col-span-6 sm:col-span-4 my-4">
                        <textarea name="message" id="message" placeholder="Type your message here" required class="mt-1 block w-full uppercase border-theme-action-light dark:border-theme-fg-dark border-b-2 bg-transparent focus-visible:border-black dark:focus-visible:border-white focus-visible:border-b-3 transition-all ease-in-out duration-500" rows="6"></textarea>
                    </div>
                    <input type="hidden" name="_subject" id="email-subject" value="Academic Website Contact Form Submission">
                    <div class="px-4 mt-10 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent bg-theme-text dark:bg-theme-fg-light dark:text-theme-text-dark hover:bg-white dark:hover:bg-theme-action dark:hover:text-theme-fg-bg hover:text-theme-text text-white rounded-sm transition-all ease-in-out duration-500">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>

<style lang="postcss">
@media (min-width: 876px) and (max-width: 1023px) {
    .width-adjust {
        width: 100vw;
    }
}

textarea {
    resize: none;
}
</style>