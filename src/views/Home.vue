<template>
	<section>
		<div class="intro">
			<article class="intro__content">
				<div class="intro__header">
					<div class="intro__header-content">
						<h1 class="intro__title">
							Llevamos a tu marca
							<br />en la dirección correcta.
						</h1>
						<a href="#" class="btn intro__btn">Contáctanos</a>
					</div>
					<IntroBg />
				</div>
				<div class="intro__footer flex flex-justify-between">
					<div class="intro__contact flex flex-column">
						<a href="tel:" class="link light">12 3456 7890</a>
						<a href="mailto:joaquin@agenciacardinal.com" class="link light">joaquin@agenciacardinal.com</a>
						<a href="mailto:anibal@agenciacardinal.com" class="link light">anibal@agenciacardinal.com</a>
					</div>
					<div class="intro__social flex">
						<a href="#" class="intro__social-item link light">facebook</a>
						<a href="#" class="intro__social-item link light">instagram</a>
						<a href="#" class="intro__social-item link light">behance</a>
					</div>
				</div>
			</article>
		</div>

		<Project :project="projects.anteojeria" />
		<Project :project="projects.iconico" />
		<Project :project="projects.epets" />
	</section>
</template>

<script>
import IntroBg from '@/components/home/intro/IntroBg.vue'
import Project from '@/components/home/Project.vue'

export default {
	data() {
		return {
			projects: {
				anteojeria: {
					title: 'Anteojería<br/>de Barrio',
					services: ['Branding', 'Dirección de arte', 'Ecommerce'],
					image: 'home/anteojeria.jpg'
				},
				iconico: {
					title: '<br/> <span>Icónico</span>',
					services: ['Branding', 'Dirección de arte', ' '],
					image: 'home/iconico.jpg'
				},
				epets: {
					title: '<br/> <span>E-pets</span>',
					services: ['Branding', 'Dirección de arte', ' '],
					image: 'home/epets.jpg'
				}
			}
		}
	},
	components: {
		IntroBg,
		Project
	}
}
</script>

<style lang="scss" scoped>
@import '../sass/pages/home';
</style>
