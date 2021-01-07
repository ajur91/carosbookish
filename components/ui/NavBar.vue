<template>
    <div id="navbar" class="p-2 mt-0 fixed w-full z-20 top-0">
        <div class="container mx-auto mt-2 md:flex md:items-center md:justify-around">
            <nuxt-link to="/" class="brand relative">
                <Logo class="w-10"/>
            </nuxt-link>
            <button class="md:hidden align-middle w-10 cursor-pointer absolute right-0 mr-10 top-0 mt-6 hover:bg-bookish-main rounded p-2"  @click.prevent="toogle">
                <span class="text-bookish-white">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </span>
            </button>
            <nav :class="open ? 'block' : 'hidden'" class="flex flex-col text-left md:block md:text-right mt-3 md:mt-0">
                <ul class="lg:inline-flex lg:flex-row lg:ml-auto">
                    <li v-for="(link, index) in links" :key="index" class="flex items-center">
                        <nuxt-link class="link px-4 py-2 text-bookish-medium text-md font-bold tracking-wide hover:text-bookish-white" :to="link.url">
                            {{ link.name }}
                        </nuxt-link>
                    </li>
                    <!-- <div class="flex justify-center items-center p-4">
                        <div class="text-bookish-white ml-3 px-4 py-2 bg-bookish-light rounded-full">
                            <nuxt-link to="/">
                                <fa :icon="['fab','goodreads-g']"/>
                            </nuxt-link>
                        </div>
                        <div class="text-bookish-white px-4">
                            <nuxt-link to="/">
                                <fa :icon="['fab','twitter']"/>
                            </nuxt-link>
                        </div>
                        <div class="text-bookish-white px-4">
                            <nuxt-link to="/">
                                <fa :icon="['fab','instagram']"/>
                            </nuxt-link>
                        </div>
                        <div class="text-bookish-white px-4">
                            <nuxt-link to="/">
                                <fa :icon="['fab','pinterest-p']"/>
                            </nuxt-link>
                        </div>
                    </div> -->
                </ul>
            </nav>
        </div> 
    </div>
</template>

<script>
import Logo from '~/components/Logo'
import { NAV_LINKS } from '@/assets/js/navLinks'

export default {
    name: 'NavBar',
    components: {
        Logo,
    },

    data() {
        return {
            open: false
        }
    },

    methods: {
        /* Shrink Navigation */
        scrollFunction() {
            window.onscroll = () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 40) {
                    document.getElementById("navbar").style.background = "#64405a";
                    document.getElementById("navbar").style.transition = "all 0.5s";
                } else {
                    document.getElementById("navbar").style.background = "none";
                }
            }
        },

        toogle() {
            this.open = !this.open;
        },
    },

    mounted () {
        /* Shrink Navigation */
        this.scrollFunction();
    },

    computed: {
        links() {
            return NAV_LINKS
        },
    },
}
</script>

<style>

</style>