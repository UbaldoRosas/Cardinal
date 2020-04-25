<template>
	<main id="app">
		<header class="header">
			<div class="header__logo">
				<img src="@/assets/logo.svg" alt="" class="header__logo-img" />
			</div>
		</header>
		<router-view />
		<footer class="footer">
			<ContactLinks />
		</footer>
	</main>
</template>

<style lang="scss">
@import '@/sass/main';
</style>
