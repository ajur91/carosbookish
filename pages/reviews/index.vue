<template>
    <div>
        <NavBar/>
        <div class="hero-img bg-center bg-no-repeat bg-cover relative blur" :style="{ backgroundImage: `url(${bookInfo.cover})` }">
            <div class="home-main flex flex-col justify-center items-center">
                <h2 class="text-bookish-white text-5xl x:text-center z-10">{{bookInfo.title}}</h2>
                <h3 class="text-bookish-white text-3xl x:text-center font-bold z-10 mt-2">{{bookInfo.author}}</h3>
                <h4 class="text-bookish-white text-2xl x:text-center font-bold z-10 mt-2">{{bookInfo.editorial}}</h4>
            </div>
        </div>
        <div class="container md:container-lg sm:container-lg mx-auto py-20">
            <div class="grid grid-cols-12 gap-4 px-10 mt-20">
                <div class="col-span-8 px-4">
                    <article class="shadow-lg p-10 rounded-md">
                        <div class="book-details">
                            <p class="text-base text-bookish-gray">
                                <center><strong><em>Segunda entrega de la serie “Calaveras redimidos”, iniciada con “Érase una vez un soldado”.</em></strong>
                                <br>
                                <strong><em>Una maravillosa y emotiva prosa, con una trama llena de detalles históricos y personajes inolvidables.</em></strong>
                                <br>
                                <strong><em>De la autora superventas del New York Times, llega una nueva serie con personajes carismáticos y una historia apasionante.</em></strong></center>
                                <br>
                                <br>
                                Mientras Washington arde en llamas, Callista Brooke se ve atrapada en la batalla entre su Inglaterra natal y su tierra de adopción. En pleno ataque de las tropas británicas, cuando está a punto de perderlo todo –incluida su propia vida-, un apuesto caballero se abre paso entre la multitud y la rescata. Callie cae en brazos de su salvador, y descubre con sorpresa que, lejos de ser un extraño, su cara le resulta agradablemente familiar.
                                <br>
                                <br>
                                Lord George Gordon Audley había sido el mejor amigo de Callie durante su infancia. Y fue a él a quien acudió en un intento desesperado por evitar un cruel matrimonio concertado. Pero las consecuencias de su valiente intento por ayudarla no solo no evitaron el matrimonio, sino que enviaron a Callie a Jamaica y a Gordon a la colonia penal de Australia.
                                <br>
                                <br>
                                Contra todo pronóstico, Gordon logró sobrevivir. Volver a encontrar a Callie es como reparar su alma mancillada y, una vez más, jura hacer lo que sea necesario para protegerla. Pero la inocente amistad que compartieron en la infancia ha dado paso a una peligrosa pasión que puede salvarlos… o destruirlos.
                            </p>
                        </div>
                        <aside class="info-author mt-20">
                            <h3 class="text-4xl font-bold text-bookish-dark">Sobre el autor</h3>
                            <div class="bg-bookish-light rounded-xl mt-5 p-8 mx-auto flex items-center">
                                <img class="w-56 h-56 rounded-full border-bookish-main border-4" src="~/assets/author-1.jpg" alt="">
                                <div class="text-left ml-5">
                                    <h2 class="text-bookish-main font-bold text-2xl">{{bookInfo.author}}</h2>
                                    <p class="mt-3 text-sm tracking-wide leading-6 text-bookish-gray">
                                        Mary Jo Putney ha publicado sus obras desde 1987. Graduada en la Universidad de  Siracusa, es una estudiosa de la literatura del siglo XVIII. Ha obtenido prestigiosos premios en Estados Unidos, incluidos cuatro Golden Leaf Awards sucesivos a la mejor novela romántica del año. Sus novelas suelen formar parte de las listas de best sellers del New York Times, Wall Street Journal y Publishers Weekly.</p>
                                    <div class="flex items-center mt-5 social-icon">
                                        <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                            <fa :icon="['fas','globe']"  class="icon"/>
                                        </nuxt-link> 
                                        <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                            <fa :icon="['fab','goodreads-g']"  class="icon"/>
                                        </nuxt-link> 
                                        <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                            <fa :icon="['fab','twitter']"  class="icon"/>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full mr-3">
                                            <fa :icon="['fab','instagram']"  class="icon"/>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="w-10 h-10 bg-bookish-main text-bookish-white rounded-full">
                                            <fa :icon="['fab','facebook-f']"  class="icon"/>
                                        </nuxt-link>  
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
                    <section class="bg-bookish-light rounded-md p-4">
                        <div class="relative w-full">
                            <img :src="bookInfo.cover" :alt="bookInfo.alt" class="w-full">
                        </div>
                        <div class="flex justify-around items-center mt-5 px-16">
                            <fa :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                            <fa :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                            <fa :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                            <fa :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                            <fa :icon="['fas','star']"  class="fa-2x text-bookish-main"/>
                        </div>
                        <div class="px-8 mt-10 text-bookish-gray">
                            <div class="flex items-center">
                                <span class="font-bold mr-2">ISBN:</span>
                                <span class="text-sm">123456789</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Editorial:</span>
                                <span class="text-sm">Titania</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Serie:</span>
                                <span class="text-sm">Los Calaveras Redimidos</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Genero:</span>
                                <span class="text-sm">Romantica Historica</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">Fecha:</span>
                                <span class="text-sm">12/01/2021</span>
                            </div>
                            <div class="flex items-center mt-1">
                                <span class="font-bold mr-2">N. page:</span>
                                <span class="text-sm">352</span>
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
                    </section>
                </div>
            </div>
            <RelatedBooks class="mt-24 px-10"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
    data() {
		return {
            bookInfo: 
                {
                    title: 'Erase una vez un rebelde',
                    author: 'Mary Jo Putney',
                    summary: 'Lorem',
                    cover: require('~/assets/cover-5.jpg'),
                    alt: 'Erase una vez un rebelde',
                    isbn: '123456789',
                    serie: 'Calaveras Redimidos',
                    genero: 'Romantica Historica',
                    fecha: '12/01/2021',
                    editorial: 'Titania',
                    page: '352'
                }
            ,
		}
    },
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