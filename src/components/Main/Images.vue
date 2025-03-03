<template>
	<section class="xl:hidden">
		<Splide
			:options="{
				type: 'loop',
				perPage: 1,
				interval: 2500,
				rewind: true,
				autoplay: true,
			}"
			aria-label="My Favorite Images">
			<SplideSlide v-for="(item, index) in imgData" :key="index">
				<img
					:src="item"
					class="w-full transition-all duration-[400ms]"
					:class="{ 'brightness-[65%]': isOpen, 'brightness-100': !isOpen }" />
			</SplideSlide>
		</Splide>
	</section>
	<section class="hidden xl:block w-[50%]">
		<img :src="actualImage" alt="product icon" class="w-[65rem] rounded-[2rem] cursor-pointer" />
		<div class="flex justify-between mt-[3rem]">
			<div
				v-for="(item, index) in imgData"
				:key="index"
				class="border-[3px] rounded-[1.8rem]"
				:class="[actualImage === item ? 'border-orange-100' : 'border-transparent']">
				<img
					:src="item"
					alt="Product icon"
					class="w-[10rem] rounded-[1.5rem] cursor-pointer hover:opacity-30 transition-opacity duration-300"
					@click="actualImage = item"
					:class="{ 'opacity-30': item === actualImage }" />
			</div>
		</div>
		<div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30">
			<img :src="close" alt="close" class="brightness-[2.1] scale-[1.4] block mb-[1rem] ml-auto" />
			<div class="relative">
				<img :src="nextArrow" alt="next" :class="arrowStyles" class="left-[96.5%]" />
				<img :src="previousArrow" alt="previous" :class="arrowStyles" />
				<img :src="actualImage" alt="product icon" class="w-[63rem] rounded-[2rem] cursor-pointer" />
				<div class="flex justify-center gap-x-[1.7rem] mt-[3rem]">
					<div
						v-for="(item, index) in imgData"
						:key="index"
						class="borderBorder border-[3px] rounded-[1.8rem] z-[20]"
						:class="[actualImage === item ? 'border-orange-100' : 'border-transparent']">
						<img
							:src="item"
							alt="Product icon"
							class="w-[8rem] rounded-[1.5rem] bg-white cursor-pointer hover:opacity-30 transition-opacity duration-300"
							@click="actualImage = item"
							:class="{ 'opacity-30': item === actualImage }" />
					</div>
				</div>
			</div>
		</div>
		<div class="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[20]"></div>
	</section>
</template>

<script setup lang="ts">
import { Ref, ref, inject } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import product1 from '@/images/image-product-1.jpg'
import product2 from '@/images/image-product-2.jpg'
import product3 from '@/images/image-product-3.jpg'
import product4 from '@/images/image-product-4.jpg'
import nextArrow from '@/images/icon-next.svg'
import previousArrow from '@/images/icon-previous.svg'
import close from '@/images/icon-close.svg'

const imgData: Ref<string[]> = ref([product1, product2, product3, product4])
const isOpen = inject<Ref<boolean>>('isOpen')
let actualImage: Ref<string> = ref(product1)
const isOpenImages: Ref<boolean> = ref(false)
const arrowStyles = [
	'absolute z-30 bg-white top-[42%] left-[-4%] translate-y-[-50%] px-[1.7rem] py-[1.5rem] scale-[1.2] rounded-full',
]
</script>

<style lang="scss">
.splide {
	z-index: 1;
}

.splide__arrow {
	background-color: white;
	width: 4.5rem;
	height: 4.5rem;
	opacity: 1;

	svg {
		width: 1.2rem;
		height: 1.8rem;
		stroke: #000000;
		stroke-width: 3;
	}
}

.splide__arrow:hover:not(:disabled) {
	opacity: 1;
}

.borderBorder {
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: -1;
		border-radius: 1.5rem;
	}
}
</style>
