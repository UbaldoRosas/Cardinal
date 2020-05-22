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
				<div class="intro__footer">
					<ContactLinks />
				</div>
			</article>
		</div>

		<Project :project="projects.anteojeria" />

		<ProjectsGrid>
			<Project :project="projects.fotografia" />
			<Project :project="projects.social" />
		</ProjectsGrid>

		<Project :project="projects.iconico" />

		<ProjectsGrid>
			<Project :project="projects.studio_visit" />
			<Project :project="projects.codigo_pm" />
		</ProjectsGrid>

		<Project :project="projects.epets" />
	</section>
</template>

<script>
import IntroBg from '@/components/home/intro/IntroBg.vue'
import Project from '@/components/home/Project.vue'
import ProjectsGrid from '@/components/home/ProjectsGrid.vue'

export default {
	data() {
		return {
			projects: {
				anteojeria: {
					title: '<span>Anteojería<br/>de Barrio</span>',
					services: ['Branding', 'Dirección de arte', 'Ecommerce'],
					image: 'home/anteojeria'
				},
				fotografia: {
					title: '<span>Fotografía</span>',
					services: ['Branding', 'Dirección de arte', '<br>'],
					image: 'home/foto',
					image_sizes: ['768']
				},
				social: {
					title: '<span>Social Media</span>',
					services: ['Diseño gráfico', 'Dirección de arte', '<br>'],
					image: 'home/social',
					image_sizes: ['768']
				},
				iconico: {
					title: '<span>Icónico</span>',
					services: ['Branding', 'Dirección de arte', '<br>'],
					image: 'home/iconico'
				},
				studio_visit: {
					title: '<span>Studio Visit</span>',
					services: ['Fotografía', 'Video', '<br>'],
					image: 'home/studio',
					image_sizes: ['768']
				},
				codigo_pm: {
					title: '<span>Código PM</span>',
					services: ['Diseño web', 'Dirección de arte', '<br>'],
					image: 'home/codigo',
					image_sizes: ['768']
				},
				epets: {
					title: '<span>E-pets</span>',
					services: ['Branding', 'Dirección de arte', '<br>'],
					image: 'home/epets'
				}
			}
		}
	},
	components: {
		IntroBg,
		Project,
		ProjectsGrid
	}
}
</script>

<style lang="scss" scoped>
@import '../sass/pages/home';
</style>
