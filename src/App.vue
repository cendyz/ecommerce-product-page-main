<template>
	<Nav></Nav>
	<Main></Main>
</template>

<script setup lang="ts">
import Main from './components/Main/Main.vue'
import Nav from './components/Nav.vue'
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
