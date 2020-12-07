<template>
	<div>
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
						<img :src="book.image" :alt="book.title - book.authors[0]">
					</div>
					<div class="flex flex-col justify-center top-review-summary">
						<div class="-top-review-author">
							<h2 class="text-4xl font-semibold">{{book.title}}</h2>
						</div>
						<div class="flex top-review-tags mt-2">
							<h3 class="text-xl font-bold">{{book.authors[0]}} - {{book.editorials[0]}}</h3>
						</div>
						<div class="top-review-preview mt-5">
							<p class=" text-sm text-gray-700">{{book.summary}}</p>
						</div>
						<button class="rounded px-4 py-3 bg-pink-500 mt-5 text-white cursor-pointer w-40">Leer Resena</button>
					</div>
				</div>
			</carousel>
		</section>

		<section class="mt-24">
			<div class="latest-reviews bg-red-100 p-10">
				<h3 class="text-center text-4xl font-semibold text-purple-400 py-10">Latest Reviews</h3>
				<div class="min-h-full w-full flex items-center">
					<div class="container mx-auto flex flex-wrap justify-center">
						<div
						v-for="(book, item) in books" :key="item" 
						class="bg-white w-full max-w-sm rounded-xl flex flex-col mx-auto mb-10 mt-2 shadow-md md:ml-4 md:mr-4">
							<img :src="book.image" class="object-cover h-64 hover:opacity-75 transition duration-500 ease-in-out rounded-t-xl">
							<div class="mt-2 h-56 p-4">
								<h2 class="font-bold text-black text-2xl text-center">{{book.title}}</h2>
								<h3 class="font-semibold text-gray-700 text-lg text-center mt-2">{{book.authors[0]}}</h3>
								<p class="text-gray-600 text-base mt-5">{{book.summary}}</p>
							</div>
							<div class="mt-4 flex justify-between items-center p-4">
								<div class="ml-2">
									<h3 class="text-gray-700 text-base font-semibold">{{book.editorials[0]}}</h3>
								</div>
								<div class="mr-2">
									<a href="#" class="uppercase text-purple-600 text-xs font-bold hover:text-purple-400 transition duration-500 ease-in-out">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination -->
				<div class="pagination container mx-auto p-4">
					<ul class="flex justify-center">
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">«</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white active:bg-green-700">1</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">2</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">3</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">4</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">5</a>
						</li>
						<li class="p-2">
							<a href="#" class="px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white">»</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			books: [],
		}
	},
	async fetch() {
        this.books = await fetch(
            'http://carosbookish.com/web/admin_dev.php/api/book/list?limit=6'
            ).then(res => res.json())
	},
}
</script>

<style>
.top-reviews:before {
	content: '';
	position: absolute;
	background: #fceef5;
	width: 35%;
	height: 60%;
	left: 0;
	z-index: -1;
	margin-top: -40px;
}

.top-reviews-img img {
	object-fit: cover;
	width: 40vw;
	height: 400px;
}

/* Latest Reviews */
.card-img img {
	object-fit: cover;
	height: 400px;
}
</style>
