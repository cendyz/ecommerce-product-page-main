<template>
	<section>
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
</template>

<script setup lang="ts">
import { Ref, ref, inject } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import product1 from '@/images/image-product-1.jpg'
import product2 from '@/images/image-product-2.jpg'
import product3 from '@/images/image-product-3.jpg'
import product4 from '@/images/image-product-4.jpg'

const imgData: Ref<string[]> = ref([product1, product2, product3, product4])
const isOpen = inject<Ref<boolean>>('isOpen')
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
</style>
