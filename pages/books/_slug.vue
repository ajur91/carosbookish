<template>
    <div>
        <NavBar/>
        <HeroBook/>
        <h1>{{$route.params.slug}}</h1>
    </div>    
</template>

<script>
export default {
    name: 'Book',
    mounted() {
        console.log(this.$route.params.slug)
    },
}
</script>

<style scoped>

</style>