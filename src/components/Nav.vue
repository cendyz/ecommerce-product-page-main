<template>
	<nav>
		<div
			class="absolute w-[60%] h-[100%] bg-white left-0 p-[1rem] pt-[9rem] transition-transform z-20 duration-300"
			:class="isOpen ? 'ranslate-x-0' : 'translate-x-[-100%]'">
			<ul class="menu bg-base-200 rounded-box w-fit gap-y-[2.5rem] bg-transparent">
				<li v-for="(item, index) in linksData" :key="index">
					<a class="capitalize text-[1.6rem] font-bold p-0 text-blue-100">{{ item }}</a>
				</li>
			</ul>
		</div>
		<div class="navbar bg-base-100 p-[2rem] z-[5] bg-transparent">
			<div class="flex-1 gap-x-[2rem]">
				<Transition mode="out-in">
					<img :src="burgir" alt="menu icon" class="block z-[100] w-[1.7rem]" @click="handleMenu" v-if="!isOpen" />
					<img :src="closeMenu" alt="menu icon" class="block z-[100] w-[1.7rem]" @click="handleMenu" v-else />
				</Transition>
				<img :src="logo" alt="" class="mb-[.4rem]" />
			</div>
			<div class="flex gap-x-[1.7rem]">
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<img :src="cart" alt="" cart />
							<span class="badge badge-lg indicator-item z-[0] border-none" :class="amount !== 0 && 'bg-orange-100'">{{
								amount
							}}</span>
						</div>
					</div>
					<div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
						<div class="card-body">
							<span class="text-lg font-bold">8 Items</span>
							<span class="text-info">Subtotal: $999</span>
							<div class="card-actions">
								<button class="btn btn-primary btn-block">View cart</button>
							</div>
						</div>
					</div>
				</div>
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
						<div class="w-full rounded-full">
							<img alt="your avatar" :src="avatar" />
						</div>
					</div>
					<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li>
							<a class="justify-between">
								Profile
								<span class="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div
			class="bg-black absolute w-full h-full top-0 transition-opacity duration-200"
			@click="checkE"
			:class="[isOpen ? 'z-10 opacity-[.75]' : 'opacity-0', zIndexStatus && 'z-[-10]']"></div>
	</nav>
</template>

<script setup lang="ts">
import { ref, Ref, inject } from 'vue'
import logo from '@/images/logo.svg'
import burgir from '@/images/icon-menu.svg'
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'
import closeMenu from '@/images/icon-close.svg'

const linksData = ref<string[]>(['collections', 'men', 'women', 'about', 'contact'])
const isOpen = ref<boolean>(false)
const zIndexStatus = ref<boolean>(false)
const handleMenu = (): void => {
	if (isOpen.value) {
		isOpen.value = false
		setTimeout(() => {
			zIndexStatus.value = true
		}, 300)
	} else {
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

const amount = inject<Ref<number>>('amount')
</script>

<style scoped>
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
