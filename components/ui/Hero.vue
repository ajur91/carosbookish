<template>
    <div id="hero" class="hero-img">
        <div class="home-main flex flex-col justify-center items-center">
            <h1 class="text-white text-6xl">{{title}}</h1>
            <h3 class="text-xl italic text-white">{{subTitle}}</h3>              
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data () {
        return {
            title: 'Caros Bookish',
            subTitle: 'Compulsive R eader, Book Blogger and Reviewer',
        }
    },
}
</script>

<style scoped>
.home-main {
    height: 70vh;
}

.hero-img {
  background-image: linear-gradient(180deg, #451C60 0%, #352F4496 80%), url("~assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

</style>