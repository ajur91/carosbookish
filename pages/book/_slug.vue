<template>
    <div>
        <NavBar/>
        <div class="hero-img bg-center bg-no-repeat bg-cover relative blur" :style="{ backgroundImage: `url(${bookDetails.image})` }">
            <div class="home-main flex flex-col justify-center items-center">
                <h2 class="text-bookish-white text-5xl x:text-center z-10">{{bookDetails.name}}</h2>
                <h3 class="text-bookish-white text-3xl x:text-center font-bold z-10 mt-2">{{bookDetails.authors[0].name}}</h3>
                <h4 class="text-bookish-white text-2xl x:text-center font-bold z-10 mt-2">{{bookDetails.editorials[0]}}</h4>
            </div>
        </div>
        <main class="container md:container-lg sm:container-lg mx-auto py-20">
            <section class="grid grid-cols-12 gap-4 px-10 mt-10">
                <div class="col-span-8 px-4">
                    <article class="shadow-lg rounded-md">
                        <div class="book-details">
                            <p class="text-base text-bookish-gray" v-html="bookDetails.synopsis">
                            </p>
                        </div>
                        <aside class="info-author mt-20">
                            <h3 class="text-4xl font-bold text-bookish-dark">Sobre el autor</h3>
                            <div class="bg-bookish-light rounded-xl mt-5 p-8 mx-auto flex items-center">
                                <img class="w-56 h-56 rounded-full border-bookish-main border-4" :src="bookDetails.authors[0].image" alt="">
                                <div class="text-left ml-5">
                                    <h2 class="text-bookish-main font-bold text-2xl">{{bookDetails.authors[0].name}}</h2>
                                    <p class="mt-3 text-sm tracking-wide leading-6 text-bookish-gray" v-html="bookDetails.authors[0].description"></p>
                                    <div  class="flex items-center mt-5 social-icon">
                                        <a v-for="(iconSocial, item) in bookDetails.authors[0].social_networks" :key="item" :href="iconSocial.url" target="_blank" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                            <fa :icon="iconSocial.icon"  class="icon"/>
                                        </a>   
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </article>
                    <div class="share-book mt-12">
                        <h4 class="text-center text-bookish-main text-2xl font-bold uppercase">Compartir libro</h4>
                        <div class="flex justify-center items-center mt-5 social-icon">
                            <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                <fa :icon="['fab','twitter']"  class="icon"/>
                            </nuxt-link>
                            <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                <fa :icon="['fab','pinterest-p']"  class="icon"/>
                            </nuxt-link>
                            <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full">
                                <fa :icon="['fab','facebook-f']"  class="icon"/>
                            </nuxt-link>  
                        </div>
                    </div>
                    <div class="comments mt-20 px-2 py-3">
                        <h5 class="text-center text-sm font-bold text-bookish-main">¡Anímate a comentar! Los blogs se alimentan de comentarios y estaría encantada de leer tú opinión. Recuerda por favor no hacer spam, así no tendré que eliminar el comentario. ¡Espero leerte pronto!</h5>
                    </div>
                </div>
                <div class="col-span-4 px-4">
                    <div  class="bg-bookish-light rounded-md p-4">
                        <div class="relative w-full">
                            <img :src="bookDetails.image" :alt="bookDetails.name" class="w-full">
                        </div>
                        <div v-if="bookDetails.has_review === true" class="flex justify-around items-center mt-5 px-20">
                            <fa v-for="star in bookDetails.review.star" :key="star" :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                                {{star}}
                        </div>
                        <div class="px-8 mt-10 text-bookish-gray">
                            <div class="flex items-center">
                                <span class="font-bold mr-2">ISBN:</span>
                                <span class="text-sm">{{bookDetails.isbn}}</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Editorial:</span>
                                <span class="text-sm">{{bookDetails.editorials[0]}}</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Serie:</span>
                                <span class="text-sm">{{bookDetails.serie_number}}</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Genero:</span>
                                <span class="text-sm">{{bookDetails.genres[0]}}</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Fecha:</span>
                                <span class="text-sm">{{bookDetails.publication_at.date | formatDate}}
                                </span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">N. page:</span>
                                <span class="text-sm">{{bookDetails.page_number}}</span>
                            </div>
                        </div>
                        <div class="mt-5 p-4">
                            <h4 class="text-2xl font-bold text-center text-bookish-dark">Encontrar este libro en:</h4>
                            <div class="flex flex-wrap justify-center items-center">
                                <nuxt-link to="/" class="flex items-center px-3 py-2 mt-4 mr-2 bg-bookish-main text-bookish-light rounded-md text-sm tracking-wide hover:opacity-75 hover:text-bookish-white uppercase"> 
                                    <span class="mr-2">
                                        <fa :icon="['fab','goodreads-g']" class="fa-lg"/>
                                    </span> Goodreads
                                </nuxt-link>
                                <nuxt-link to="/" class="flex items-center px-3 py-2 mt-4 mr-2 bg-bookish-main text-bookish-light rounded-md text-sm tracking-wide hover:opacity-75 hover:text-bookish-white uppercase"> 
                                    <span class="mr-2">
                                        <fa :icon="['fab','amazon']" class="fa-lg"/>
                                    </span> Amazon
                                </nuxt-link>
                                <nuxt-link to="/" class="flex items-center px-3 py-2 mt-4 bg-bookish-main text-bookish-light rounded-md text-sm tracking-wide hover:opacity-75 hover:text-bookish-white uppercase"> 
                                    <span class="mr-2">
                                        <fa :icon="['fab','apple']" class="fa-lg"/>
                                    </span> iBooks
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-24 px-10">        
                <h3 class="text-2xl text-bookish-main font-bold border-b-2 border-fuchsia-600 w-full pb-2">Libros Relacionados</h3>
                <carousel 
                    :autoplay="true" 
                    :items="5" 
                    :autoplayTimeout="2000"
                    :nav="false"
                    :autoplayHoverPause="true"
                    :loop="true"
                    :dots="false"
                    class="mt-8">
                        <div class="flex justify-center" v-for="(bookCover, item) of bookDetails.relation" v-bind="bookCover" :key="item">
                            <a :href="bookCover.strategy">
                                <img :src="bookCover.image" class="w-full p-2">
                            </a>
                        </div>
                    </carousel>
            </section>
        </main>
        <Footer/>
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Book',
    data() {
        return {
            bookDetails: [],
        }
    },    

    async fetch() {
		this.bookDetails = await fetch(`https://carosbookish.com/web/admin_dev.php/api/book/`+this.$route.params.slug)
        .then(res => res.json())
    },
    
    filters: {
        formatDate(value) {
            let options = {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'};
            return value.toLocaleString(['en-US'], options);
        }
    },

    head () {
        return {
            title: `${this.bookDetails.name} by ${this.bookDetails.authors[0].name}| Caros Bookish`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.bookDetails.summary}`, 
                }
            ]
        }
    }
}
</script>

<style scoped>
.blur:after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
}

.social-icon a {
    text-align: center;
    line-height: 40px;
    font-size: 20px;
}

.home-main h2, .info-author h3 {
    font-family: 'Cinzel Decorative', cursive;
}

.home-main h3, h4 {
    font-family: 'Abel', sans-serif;
}
</style>