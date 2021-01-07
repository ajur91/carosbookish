<template>
    <section>        
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
                <div class="flex justify-center" v-for="(bookCover, item ) of BookCovers" :key="item">
                    <img :src="bookCover.cover" class="w-full p-2">
                </div>
			</carousel>
    </section>
</template>

<script>
export default {
    name: 'Related Books',
    data() {
        return {
            BookCovers: [
                { cover: require('~/assets/books/cover-1.jpg') },
                { cover: require('~/assets/books/cover-2.jpg') },
                { cover: require('~/assets/books/cover-3.jpg') },
                { cover: require('~/assets/books/cover-4.jpg') },
                { cover: require('~/assets/books/cover-5.jpg') },
                { cover: require('~/assets/books/cover-6.jpg') },
                { cover: require('~/assets/books/cover-7.jpg') },
                { cover: require('~/assets/books/cover-8.jpg') },
                { cover: require('~/assets/books/cover-9.jpg') },
                { cover: require('~/assets/books/cover-10.jpg') },
            ]   
        }
    }
}
</script>

<style scoped>

</style>