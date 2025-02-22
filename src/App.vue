<template>
	<Nav></Nav>
	<Header></Header>
	<main></main>
	<!-- <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg> -->
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
