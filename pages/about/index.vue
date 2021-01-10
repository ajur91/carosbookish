<template>
<div>
    <NavBar/>
    <Hero/>
    <main class="py-20">
        <section>
            <div class="container mx-auto">
                <div class="flex justify-center">
                    <h3 class="text-center text-4xl font-semibold text-bookish-main uppercase">{{ titleSection }}</h3>
                </div>
                <div class="about-me lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
                    <div class="description sm:p-10">
                        <p class="text-bookish-gray">
                            ¡Hi!, I am Yolit , a girl Venezuelan living in Argentina, and lover of books, I’ve been passionate about reading for years, the books have been my warm refuge, that place where I can enjoy a thousand emotions. I always read romantic novels, in all their subgenres, erotic, suspense, etc. I am also very fond of Thriller and Noir Novel. Little by little I have been testing with other genres, such as Young Adult, New Adult and Fantasy.
                        </p>

                        <p class="mt-5 text-bookish-gray"> 
                            For a long time I have liked to share my reviews of the books I have read, but I have always written them in Spanish, now as I am studying English, I encouraged not only to share my reviews in this language but to read those books I have always wanted and review them.
                        </p>

                        <p class="mt-5 text-bookish-gray">
                            I hope everyone feels comfortable in my new little blog and please forgive me if I have any mistakes in my grammar, I am still learning and looking forward to improving.
                        </p>
                    </div>
                    <div class="flex justify-center lg:order-1 md:grid md:order-first md:mb-5 sm:grid sm:order-first sm:mb-5">
                        <img src="~/assets/me.jpg" alt="Yolit" class="rounded-full border-4 border-bookish-main">
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
</div>   
</template>

<script>
export default {
    name: 'About me',
    data() {
        return {
            titleSection: 'About Me'
        }
    },

    head: {
    title: 'About me',
    meta: [
      {
        hid: 'About me',
        name: 'About me',
        content: 'About me'
      }
    ],
  }
}
</script>

<style scoped>

</style>