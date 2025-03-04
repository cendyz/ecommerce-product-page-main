<template>
	<nav class="container" ref="cartRef">
		<div
			class="absolute w-[60%] h-[100%] bg-white left-0 p-[1rem] pt-[9rem] transition-transform z-20 duration-300"
			:class="isOpen ? 'translate-x-0' : 'translate-x-[-100%]'">
			<ul class="menu bg-base-200 rounded-box w-fit gap-y-[2.5rem] bg-transparent">
				<li v-for="(item, index) in linksData" :key="index">
					<a class="capitalize text-[1.6rem] font-bold p-0 text-blue-100" href="#">{{ item }}</a>
				</li>
			</ul>
		</div>
		<div class="navbar bg-base-100 p-[2rem] z-[5] bg-transparent xl:p-[4rem] xl:px-0 border-b-2 border-gray-100">
			<div class="flex-1 gap-x-[2rem]">
				<Transition mode="out-in" class="xl:hidden">
					<img
						:src="burgir"
						alt="open menu"
						class="block z-[100] w-[1.7rem] h-[1.7rem]"
						@click="handleMenu"
						v-if="!isOpen" />
					<img
						:src="closeMenu"
						alt="close menu"
						class="block z-[100] w-[1.7rem] h-[1.7rem]"
						@click="handleMenu"
						v-else />
				</Transition>
				<img :src="logo" alt="sneakers" class="mb-[.4rem]" />
				<ul class="hidden ml-[4rem] xl:flex gap-x-[2.5rem]">
					<li
						v-for="(item, index) in linksData"
						:key="index"
						class="text-gray-600 capitalize cursor-pointer transition-colors duration-200 hover:text-gray-800 navLink">
						<a href="#">{{ item }}</a>
					</li>
				</ul>
			</div>
			<div class="flex gap-x-[1.7rem] xl:gap-x-[4rem] xl:mr-[6rem]">
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle no-animation" ref="cartRef">
						<div class="indicator">
							<img :src="cart" alt="cart" class="xl:w-[3rem] w-[2.2rem] cartImg hover:brightness-0" @click="handleCart" />
							<span
								class="badge badge-lg indicator-item z-[0] border-none text-white"
								:class="{
									hidden: !carAmount,
									'bg-orange-100': carAmount > 0,
								}"
								>{{ carAmount }}</span
							>

							<Cart class="hidden xl:block" :emptyCart="emptyCart" @cleanCart="carAmount = $event"></Cart>
						</div>
					</div>
				</div>
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost ghostBtn btn-circle avatar xl:w-[5.5rem]">
						<div
							class="w-full avatarBorder rounded-full xl:border-[2px] xl:border-transparent xl:hover:border-orange-100">
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
		<Cart class="xl:hidden" :emptyCart="emptyCart" @cleanCart="carAmount = $event"></Cart>
	</nav>
</template>

<script setup lang="ts">
import { ref, Ref, inject, onMounted } from 'vue'
import logo from '@/images/logo.svg'
import burgir from '@/images/icon-menu.svg'
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'
import closeMenu from '@/images/icon-close.svg'
import Cart from './utils/Cart.vue'

const linksData = ref<string[]>(['collections', 'men', 'women', 'about', 'contact'])
const emptyCart: Ref<boolean> = ref(false)
const isOpen = inject<Ref<boolean>>('isOpen')
const zIndexStatus = inject<Ref<boolean>>('zIndexStatus')
const carAmount = inject<Ref<number>>('carAmount')
const cartRef: Ref<HTMLElement | null> = ref()

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

const handleClickOutside = (e: Event): void => {
	if (cartRef.value && !cartRef.value.contains(e.target as Node)) {
		emptyCart.value = false
	}
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.btn-ghost {
	&:hover {
		background-color: white;
	}
}

.navLink {
	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: -5.9rem;
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

.avatarBorder {
	transition: border-color 0.2s;
}

.ghostBtn {
	&:hover {
		background-color: white;
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

.cartImg {
	transition: filter 0.2s;
}
</style>
