<template>
	<Nav></Nav>
	<main>
		<!-- <VueSlickCarousel v-bind="settings">
			<div><img src="https://picsum.photos/300/300" /></div>
		</VueSlickCarousel> -->
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Nav from './components/Nav.vue'

const settings = ref({
	lazyLoad: 'ondemand',
	dots: true,
	fade: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
})
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
