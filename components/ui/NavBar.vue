<template>
    <div id="navbar" class="p-4 mt-0 fixed w-full z-10 top-0">
        <div class="container mx-auto flex justify-between mt-2">
            <nuxt-link to="/" class="brand">
                <Logo />
            </nuxt-link>
            <nav>
                <ul class="flex justify-center">
                    <li v-for="(link, index) in links" :key="index" class="px-2 py-4">
                        <nuxt-link class="link text-white text-md" :to="link.url">
                            {{ link.name }}
                        </nuxt-link>
                    </li>
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

    methods: {
        /* Shrink Navigation */
        scrollFunction() {
            window.onscroll = () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
                    document.getElementById("navbar").style.background = "#451C60";
                    document.getElementById("navbar").style.color = "#ffffff";
                    document.getElementById("navbar").style.transition = "all 0.5s";
                } else {
                    document.getElementById("navbar").style.background = "none";
                }
            }
        }
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