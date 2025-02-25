<template>
	<section class="p-[2rem]">
		<p class="uppercase text-blue-200 font-k700 text-[1.1rem] tracking-widest mb-[1rem]">sneaker company</p>
		<h1 class="capitalize text-[2.7rem] font-k700 mb-[1.5rem]">fall limited edition sneakers</h1>
		<p class="text-blue-200 text-[1.5rem] leading-[1.6]">
			These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
			withstand everything the weather can offer.
		</p>
		<div class="flex justify-between mt-[2rem] items-center">
			<div class="flex items-center gap-x-[1.6rem]">
				<p class="text-[2.2rem] font-k700 tracking-wide">$125.00</p>
				<p class="px-[.8rem] py-[.2rem] bg-black text-white rounded-lg text-[1.3rem] font-k700">50%</p>
			</div>
			<p class="text-blue-200 text-[1.3rem] font-k700 tracking-wide line-through">$250.00</p>
		</div>
		<div class="flex justify-between items-center mt-[2rem] rounded-lg bg-blue-400">
			<button class="p-[1.7rem]" @click="decreaseAmount"><img :src="minus" alt="minus icon" /></button>
			<p class="font-k700">{{amount}}</p>
			<button class="p-[1.7rem]" @click="amount++"><img :src="plus" alt="plus icon" /></button>
		</div>
		<button
			class="mt-[1.1rem] btn no-animation bg-orange-100 text-[1.5rem] btn-block h-[4.6rem] leading-[0] hover:bg-orange-100">
			<img :src="cartIcon" alt="cart icon" class="cartIcon" /> Add to cart
		</button>
	</section>
</template>

<script setup lang="ts">
import { Ref, onUpdated, inject } from 'vue';
import plus from '@/images/icon-plus.svg'
import minus from '@/images/icon-minus.svg'
import cartIcon from '@/images/icon-cart.svg'
const emit = defineEmits(['updateAmount'])
const amount = inject<Ref<number>>('amount')


const decreaseAmount = ():void => {
    if(amount.value === 0) return
    amount.value--
}

onUpdated(()=>{
    emit('updateAmount', amount.value)
})
</script>

<style scoped>
.cartIcon {
	filter: hue-rotate(309deg) contrast(707%);
}
</style>
