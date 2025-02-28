<template>
	<Nav></Nav>
	<!-- <Main></Main> -->
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import Main from './components/Main/Main.vue'
import Nav from './components/Nav.vue'

const amount = ref<number>(0)
const carAmount = ref<number>(0)
const isOpen = ref<boolean>(false)
const zIndexStatus = ref<boolean>(false)
provide('amount', amount)
provide('isOpen', isOpen)
provide('zIndexStatus', zIndexStatus)
provide('carAmount', carAmount)
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
