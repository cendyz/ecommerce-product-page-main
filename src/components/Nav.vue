<template>
	<nav ref="navRef" class="container">
		<div
			class="absolute w-[60%] h-[100%] bg-white left-0 p-[1rem] pt-[9rem] transition-transform z-20 duration-300"
			:class="isOpen ? 'translate-x-0' : 'translate-x-[-100%]'">
			<ul class="menu bg-base-200 rounded-box w-fit gap-y-[2.5rem] bg-transparent">
				<li v-for="(item, index) in linksData" :key="index">
					<a class="capitalize text-[1.6rem] font-bold p-0 text-blue-100">{{ item }}</a>
				</li>
			</ul>
		</div>
		<div class="navbar bg-base-100 p-[2rem] z-[5] bg-transparent xl:p-[4rem] xl:px-0 border-b-2 border-gray-100">
			<div class="flex-1 gap-x-[2rem]">
				<Transition mode="out-in" class="xl:hidden">
					<img :src="burgir" alt="menu icon" class="block z-[100] w-[1.7rem]" @click="handleMenu" v-if="!isOpen" />
					<img :src="closeMenu" alt="menu icon" class="block z-[100] w-[1.7rem]" @click="handleMenu" v-else />
				</Transition>
				<img :src="logo" alt="sneakers" class="mb-[.4rem]" />
				<ul class="hidden ml-[4rem] xl:flex gap-x-[2.5rem]">
					<li
						v-for="(item, index) in linksData"
						:key="index"
						class="text-gray-600 capitalize cursor-pointer transition-colors duration-200 hover:text-gray-800 navLink">
						{{ item }}
					</li>
				</ul>
			</div>
			<div class="flex gap-x-[1.7rem]">
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle" @click="handleCart">
						<div class="indicator">
							<img :src="cart" alt="" cart />
							<span
								class="badge badge-lg indicator-item z-[0] border-none text-white"
								:class="{
									hidden: !carAmount,
									'bg-orange-100': carAmount > 0,
								}"
								>{{ carAmount }}</span
							>
						</div>
					</div>
				</div>
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
						<div class="w-full rounded-full">
							<img alt="your avatar" :src="avatar" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="bg-black absolute w-full h-full top-0 left-0 transition-opacity duration-200"
			@click="checkE"
			:class="[isOpen ? 'z-10 opacity-[.75]' : 'opacity-0', zIndexStatus && 'z-[-10]']"></div>
		<Transition mode="out-in">
			<div v-if="emptyCart" class="absolute top-[9.5%] w-[97%] left-1/2 translate-x-[-50%] bg-white rounded-lg z-[11]">
				<p class="font-k700 p-[2.2rem] pb-[2.5rem] border-b-[1px]">Cart</p>
				<p v-show="carAmount === 0" class="text-center font-k700 text-blue-200 py-[11rem]">Your cart is Empty.</p>
				<div v-show="carAmount > 0" class="p-[2.2rem]">
					<div class="flex items-center justify-between">
						<img :src="thumbCart" alt="product icon" class="w-[5rem] rounded-lg" />
						<div class="text-gray-500">
							<p>Fall Limited Ediion Sneakers</p>
							<p>
								$125.00 x {{ carAmount }}
								<span class="text-black font-k700 ml-[0.2rem]">${{ (125 * carAmount).toFixed(2) }}</span>
							</p>
						</div>
						<img :src="trash" alt="delete icon" class="block" @click="carAmount = 0" />
					</div>
					<button
						class="btn btnCheckout no-animation btn-block text-[1.6rem] mt-[2.2rem] py-[2.5rem] font-k700 leading-[0] bg-orange-100 rounded-2xl">
						Checkout
					</button>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<script setup lang="ts">
import { ref, Ref, inject } from 'vue'
import logo from '@/images/logo.svg'
import burgir from '@/images/icon-menu.svg'
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'
import closeMenu from '@/images/icon-close.svg'
import thumbCart from '@/images/image-product-1-thumbnail.jpg'
import trash from '@/images/icon-delete.svg'

const linksData = ref<string[]>(['collections', 'men', 'women', 'about', 'contact'])
const emptyCart: Ref<boolean> = ref(false)
const navRef = ref(null)
const carAmount = inject<Ref<number>>('carAmount')
const isOpen = inject<Ref<boolean>>('isOpen')
const zIndexStatus = inject<Ref<boolean>>('zIndexStatus')

const handleMenu = (): void => {
	if (isOpen.value) {
		isOpen.value = false
		setTimeout(() => {
			zIndexStatus.value = true
		}, 300)
	} else {
		emptyCart.value = false
		isOpen.value = true
		zIndexStatus.value = false
	}
}

const checkE = (e: Event): void => {
	if (e.target) {
		isOpen.value = false
		setTimeout(() => {
			zIndexStatus.value = true
		}, 300)
	}
}

const handleCart = (): void => {
	emptyCart.value = !emptyCart.value
}
</script>

<style scoped lang="scss">
.btnCheckout {
	&:hover {
		background-color: hsl(26, 100%, 55%);
		border-color: white;
	}
}

.navLink {
	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: -4.65rem;
		left: 50%;
		transform: translateX(-50%);
		width: 0%;
		height: 3px;
		background-color: hsl(26 100% 55%);
		transition: width 0.2s;
	}

	&:hover {
		&::before {
			width: 100%;
		}
	}
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: 0.1s;
}

.v-enter-to,
.v-leave-from {
	opacity: 1;
}

.show-enter-from,
.show-leave-to {
	animation: start 0.1s forwards;
}

.show-enter-to,
.show-leave-from {
	animation: end 0.1s forwards;
}

@keyframes start {
	from {
		opacity: 0;
	}
	to {
		opacity: 0.75;
	}
}

@keyframes end {
	from {
		opacity: 0.75;
	}
	to {
		opacity: 0;
	}
}
</style>
