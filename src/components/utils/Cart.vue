<template>
	<Transition mode="out-in">
		<div
			v-if="props.emptyCart"
			class="absolute top-[9.5%] w-[97%] left-1/2 translate-x-[-50%] bg-white rounded-lg z-[11] xl:top-[200%] xl:w-[40rem] boxShadow">
			<p
				class="font-k700 p-[2.2rem] pb-[2.5rem] border-b-[1px] xl:text-[1.8rem] xl:text-left xl:p-[3rem] cursor-default">
				Cart
			</p>
			<p
				v-show="carAmount === 0"
				class="text-center font-k700 text-blue-200 py-[11rem] xl:text-[1.8rem] cursor-default">
				Your cart is Empty.
			</p>
			<div v-show="carAmount > 0" class="p-[2.2rem] xl:p-[3rem] cursor-default">
				<div class="flex items-center justify-between">
					<img :src="thumbCart" alt="product icon" class="w-[5rem] xl:w-[7rem] rounded-lg" />
					<div class="text-gray-500 xl:text-[1.6rem] text-left">
						<p class="xl:mb-[2rem]">Fall Limited Ediion Sneakers</p>
						<p>
							$125.00 x {{ carAmount }}
							<span class="text-black font-k700 ml-[0.2rem]">${{ (125 * carAmount).toFixed(2) }}</span>
						</p>
					</div>
					<img
						:src="trash"
						alt="delete items"
						class="block xl:w-[1.8rem] cursor-pointer"
						@click="emits('cleanCart', 0)" />
				</div>
				<button type="button"
					class="btn btnCheckout no-animation btn-block text-[1.6rem] mt-[2.2rem] py-[2.5rem] font-k700 leading-[0] bg-orange-100 rounded-2xl xl:py-[3rem] hover:bg-orange-400">
					Checkout
				</button>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue'
import thumbCart from '@/images/image-product-1-thumbnail.jpg'
import trash from '@/images/icon-delete.svg'
const carAmount = inject<Ref<number>>('carAmount')

const props = defineProps({
	emptyCart: Boolean,
})

const emits = defineEmits(['cleanCart'])
</script>

<style scoped lang="scss">
@media (min-width: 1280px) {
	.boxShadow {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
}
</style>
