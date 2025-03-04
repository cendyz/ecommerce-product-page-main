<template>
	<section class="p-[2rem] xl:w-[50%]">
		<p class="uppercase text-blue-200 font-k700 text-[1.1rem] tracking-widest mb-[1rem]">sneaker company</p>
		<h1 class="capitalize text-[2.7rem] font-k700 mb-[1.5rem] xl:text-[5rem] xl:leading-[1.1]">
			fall limited edition sneakers
		</h1>
		<p class="text-blue-200 text-[1.5rem] leading-[1.6] xl:mt-[3rem]">
			These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
			withstand everything the weather can offer.
		</p>
		<div class="flex justify-between mt-[2rem] items-center xl:block">
			<div class="flex items-center gap-x-[1.6rem] xl:mb-[1rem]">
				<p class="text-[2.2rem] font-k700 tracking-wide">$125.00</p>
				<p class="px-[.8rem] py-[.2rem] bg-black text-white rounded-lg text-[1.3rem] font-k700">50%</p>
			</div>
			<p class="text-blue-200 text-[1.3rem] font-k700 tracking-wide line-through">$250.00</p>
		</div>
		<div class="xl:flex xl:items-center xl:justify-between xl:w-full xl:mt-[3rem]">
			<div class="flex justify-between items-center mt-[2rem] rounded-lg bg-blue-400 xl:mt-0 xl:w-[14rem]">
				<button type="button" class="p-[1.7rem] xl:w-[5rem]" @click="decreaseAmount"><img :src="minus" alt="minus icon" /></button>
				<p class="font-k700 xl:px-[2rem] xl:w-[5rem]">{{ amount }}</p>
				<button type="button" class="p-[1.7rem]" @click="amount++"><img :src="plus" alt="plus icon" /></button>
			</div>
			<button
				@click="checkE"
				class="mt-[1.1rem] rounded-2xl btn no-animation bg-orange-100 text-[1.5rem] btn-block h-[4.6rem] leading-[0] hover:bg-orange-400 xl:mt-0 xl:w-[67%] xl:h-[5.2rem]">
				<img :src="cartIcon" alt="cart icon" class="cartIcon" /> Add to cart
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue'
import plus from '@/images/icon-plus.svg'
import minus from '@/images/icon-minus.svg'
import cartIcon from '@/images/icon-cart.svg'
const emit = defineEmits(['updateAmount'])
const amount = inject<Ref<number>>('amount')
const carAmount = inject<Ref<number>>('carAmount')

const decreaseAmount = (): void => {
	if (amount.value === 0) return
	amount.value--
}

const checkE = () => {
	if (amount.value === 0) return
	carAmount.value += amount.value
}
</script>

<style scoped>
.cartIcon {
	filter: hue-rotate(309deg) contrast(707%);
}
</style>
