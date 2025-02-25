<template>
	<Nav></Nav>
	<Main></Main>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import Main from './components/Main/Main.vue'
import Nav from './components/Nav.vue'

const amount = ref<number>(0)

provide('amount', amount)
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
