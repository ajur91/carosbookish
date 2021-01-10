<template>
	<div>
		<NavBar/>
  		<Hero/>
		  <main class="py-20">
				<!-- Lasted Post -->
			<section class="container-xl mx-auto">
				<div class="flex flex-col justify-center items-center">
					<h3 class="text-bookish-main text-3xl font-bold text-centet uppercase">Lasted Post</h3>
					<div class="line"></div>
					<div class="min-h-full flex flex-wrap justify-center items-center mt-10 border-b-4 border-bookish-main">
						<article
						v-for="(book, item) in limitBooks(0, 3)" :key="item"
						class="bg-bookish-white w-full max-w-sm rounded-xl border-bookish-dark flex flex-col mx-auto mb-10 mt-2 shadow-lg md:ml-4 md:mr-4">
							<img :src="book.image" class="object-cover h-64 hover:opacity-75 transition duration-500 ease-in-out">
							<div class="mt-2 h-56 p-4">
								<nuxt-link to="#">
									<h2 class="font-bold text-black text-2xl text-center text-bookish-main hover:opacity-75">{{book.title}}</h2>
								</nuxt-link>	
								<nuxt-link to="#">
									<h3 class="font-semibold text-bookish-main text-xl text-center mt-2 hover:opacity-75">{{book.authors[0]}}</h3>
								</nuxt-link>
								<p class="text-bookish-gray text-base mt-5">{{book.summary}}</p>
							</div>
							<div class="mt-4 flex justify-between items-center p-4">
								<div class="ml-2">
									<h3 class=" text-bookish-primary text-base font-semibold">{{book.editorials[0]}}</h3>
								</div>
								<div class="mr-2">
									<nuxt-link :to="/books/+book.isbn" class="uppercase text-bookish-main text-sm font-bold hover:opacity-75 transition duration-500 ease-in-out">
										Read more
									</nuxt-link>	
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
				<!-- Lasted Reviews -->
			<section class="container mx-auto mt-20">
				<div class="section-title">
					<h3 class="text-center text-4xl font-semibold text-bookish-main">Latest Reviews</h3>
					<div class="line"></div>
				</div>
				<div class="min-h-full w-full flex items-center mt-10">
					<div class="grid grid-cols-4 gap-4 justify-items-center border-b-4 border-bookish-main">
						<article
						v-for="(book, item) in limitBooks(0,8)" :key="item" 
						class="bg-bookish-white w-full max-w-sm rounded-xl border-bookish-dark flex flex-col mx-auto mb-10 mt-2 shadow-lg md:ml-4 md:mr-4">
							<img :src="book.image" class="object-cover h-64 hover:opacity-75 transition duration-500 ease-in-out rounded-t-xl">
							<div class="mt-2 h-56 p-4">
								<nuxt-link to="#">
									<h2 class="font-bold text-black text-2xl text-center text-bookish-main">{{book.title}}</h2>
								</nuxt-link>	
								<nuxt-link to="#">
									<h3 class="font-semibold text-bookish-second text-lg text-center mt-2">{{book.authors[0]}}</h3>
								</nuxt-link>
								<p class=" text-bookish-gray text-sm mt-5">{{book.summary}}</p>
							</div>
							<div class="mt-4 flex justify-between items-center p-4">
								<div class="ml-2">
									<h3 class=" text-bookish-primary text-base font-semibold">{{book.editorials[0]}}</h3>
								</div>
								<div class="mr-2">
									<nuxt-link :to="/books/+book.isbn" class="uppercase text-bookish-main text-xs font-bold hover:opacity-75 transition duration-500 ease-in-out">
										Read more
									</nuxt-link>	
								</div>
							</div>
						</article>
					</div>
				</div>
				<!-- Pagination -->
				<div class="pagination container mx-auto p-4">
					<ul class="flex justify-center">
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-bookish-gray hover:bg-bookish-main hover:text-bookish-white">«</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-bookish-gray hover:bg-bookish-main hover:text-bookish-white active:bg-green-700">
								1
							</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-bookish-gray hover:bg-bookish-main hover:text-bookish-white">»</a>
						</li>
					</ul>
				</div>
			</section>
				<!-- Release Spanish -->
			<section class="mt-20">
				<div class="section-title">
					<h3 class="text-center text-4xl font-semibold text-bookish-main">Novedades en Español 2021</h3>
					<div class="line"></div>
				</div>
				<div class="card-reading grid grid-cols-6 gap-4 p-10">
					<div class="content" v-for="(bookInfo, item) in limitBooks(0, 6)" :key="item">
						<div class="content-overlay"></div>
							<nuxt-link to="/">
								<img :src="bookInfo.image" class="w-full h-full">
							</nuxt-link>
						<div class="content-details fadeIn-top">
							<h1 class="text-2xl leading-2 font-bold uppercase text-bookish-white">
								<nuxt-link to="/">
									{{bookInfo.title}}
								</nuxt-link>
							</h1>
							<div class="border-0 text-bookish-dark text-center inline-block cursor-pointer px-3 py-1 rounded bg-bookish-medium mt-4">
									<a class="text-sm tracking-wide uppercase" href="">Read More</a> 
							</div>
						</div>
					</div>
				</div>
			</section>
				<!-- Release English -->
			<section class="mt-20 top-reviews-right">
				<div class="section-title">
					<h3 class="text-center text-4xl font-semibold text-bookish-main">Novedades en Inglés 2021</h3>
					<div class="line"></div>
				</div>
				<div class="flex flex-col justify-center items-center">
					<div class="min-h-full flex flex-wrap justify-center items-center mt-5 border-b-4 border-bookish-main">
						<article
						v-for="(book, item) in limitBooks(0, 3)" :key="item"
						class="bg-bookish-white w-full max-w-sm rounded-xl border-bookish-dark flex flex-col mx-auto mb-10 mt-2 shadow-lg md:ml-4 md:mr-4">
							<img :src="book.image" class="object-cover h-64 hover:opacity-75 transition duration-500 ease-in-out">
							<div class="mt-2 h-56 p-4">
								<nuxt-link to="#">
									<h2 class="font-bold text-black text-2xl text-center text-bookish-main hover:opacity-75">{{book.title}}</h2>
								</nuxt-link>	
								<nuxt-link to="#">
									<h3 class="font-semibold text-bookish-main text-xl text-center mt-2 hover:opacity-75">{{book.authors[0]}}</h3>
								</nuxt-link>
								<p class="text-bookish-gray text-base mt-5">{{book.summary}}</p>
							</div>
							<div class="mt-4 flex justify-between items-center p-4">
								<div class="ml-2">
									<h3 class=" text-bookish-primary text-base font-semibold">{{book.editorials[0]}}</h3>
								</div>
								<div class="mr-2">
									<nuxt-link :to="/books/+book.isbn" class="uppercase text-bookish-main text-sm font-bold hover:opacity-75 transition duration-500 ease-in-out">
										Read more
									</nuxt-link>	
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		  </main>
		<Footer/>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			title: `Caro's Bookish`,
            subTitle: 'Compulsive Reader, Book Blogger and Reviewer',
			books: [],
		}
	},

	methods: {
		limitBooks: function(min, max) {
			return this.books.slice(min, max)
	 	}
	},

	// computed: {
	// 	limitBooks: function(min, max) {
	// 		this.books.slice(min, max)
	// 	}
	// },

	async fetch() {
		this.books = await fetch('http://carosbookish.com/web/admin_dev.php/api/book/list?limit=12`')
		.then(res => res.json())
	}, 

	head() {
		return {
			title: this.title
		}
	}
}
</script>

<style scoped>
.top-reviews:before {
	content: '';
	position: absolute;
	background: #C6CEBE;
	width: 35%;
	height: 35%;
	left: 0;
	z-index: -1;
	margin-top: -40px;
}


.top-reviews-img img {
	width: 40vw;
	height: 400px;
}

.content {
  position: relative;
}

.content .content-overlay {
  background: #312e3099;
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h1{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 1em;
}
.fadeIn-top{
  top: 20%;
}
</style>
