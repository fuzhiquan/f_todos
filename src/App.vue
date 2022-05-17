<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="router">
		<router-link to="/home" active-class="active">home</router-link>
		<router-link to="/todos" active-class="active">todos</router-link>
    </div>
	<keep-alive include="Todos">
		<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.router {
		display: flex;
		justify-content: space-around;
	}
</style>
