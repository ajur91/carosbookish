<template>
	<div>
		<NavBar/>
  		<Hero/>
		<section class="container mx-auto mt-32 top-reviews">
			<carousel 
			:autoplay="true" 
			:items="1" 
			:autoplayTimeout="3500"
			:nav="false"
			:autoplayHoverPause="true"
			class="mt-20">
				<div class="grid grid-cols-2 gap-8" v-for="(book, item ) of books" :key="item">
					<div class="flex justify-center top-reviews-img">
						<img :src="book.image" :alt="book.title" class="object-cover">
					</div>
					<div class="flex flex-col justify-center top-review-summary">
						<div class="-top-review-author">
							<h2 class="text-4xl font-semibold text-bookish-main">{{book.title}}</h2>
						</div>
						<div class="flex top-review-tags mt-2">
							<h3 class="text-xl font-bold text-bookish-second">{{book.authors[0]}} - {{book.editorials[0]}}</h3>
						</div>
						<div class="top-review-preview mt-5">
							<p class=" text-sm text-bookish-gray">{{book.summary}}</p>
						</div>
						<button class="rounded px-4 py-3 bg-bookish-primary mt-5 text-bookish-white font-bold cursor-pointer w-40 hover:opacity-75 transition duration-500 ease-in-out">
							Leer Resena
						</button>
					</div>
				</div>
			</carousel>
		</section>

		<section class="mt-24 bg-gradient-to-t from-bookish-light to-bookish-white">
			<div class="latest-reviews p-10">
				<div class="section-title">
					<h3 class="text-center text-4xl font-semibold text-bookish-main py-10">Latest Reviews</h3>
				</div>
				<div class="min-h-full w-full flex items-center">
					<div class="container mx-auto flex flex-wrap justify-center">
						<article
						v-for="(book, item) in books" :key="item" 
						class="bg-bookish-white w-full max-w-sm rounded-xl border-bookish-dark flex flex-col mx-auto mb-10 mt-2 shadow-md md:ml-4 md:mr-4">
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
			</div>
		</section>
		<section>
			<div class="reading-spanish">
				<div class="section-title">
					<h3 class="text-center text-4xl font-semibold text-bookish-main py-10">My TBR</h3>
				</div>
				<div class="card-reading grid grid-cols-5 gap-4 p-10">
					<div class="content" v-for="(bookInfo, item) in books" :key="item">
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
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			books: [],
		}
	},
	 async fetch() {
		 this.books = await fetch('http://carosbookish.com/web/admin_dev.php/api/book/list?limit=12')
		 .then(res => res.json())
	 },

	// computed: {
	// 	apiBooks() {
	// 		return `http://carosbookish.com/web/admin_dev.php/api/book/list?limit=6`;
	// 	},
	// },
}
</script>

<style>
.top-reviews:before {
	content: '';
	position: absolute;
	background: #C6CEBE;
	width: 35%;
	height: 60%;
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
