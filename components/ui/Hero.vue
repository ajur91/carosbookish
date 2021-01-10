<template>
    <div id="hero" class="hero-img hero-pattern">
        <div class="home-main flex flex-col justify-center items-center">
            <h1 class="text-bookish-white text-6xl text-center uppercase tracking-wider">{{title}}</h1>
            <h3 class="text-2xl italic text-bookish-white text-center tracking-wide">{{subTitle}}</h3> 
            <span>
                <i class="fas fa-bars"></i>
            </span>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data () {
        return {
            title: `Caro's Bookish`,
            subTitle: 'Compulsive Reader, Book Blogger and Reviewer',
        }
    },
}
</script>

<style scoped>
.hero-img {
  background-image: linear-gradient(180deg, #64405a 0%, #352F4496 80%), url("~assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.home-main h1 {
  font: normal normal 80px 'Raleway', sans-serif;
}

.home-main h3 {
    font-family: 'Redressed', cursive;
}

</style>