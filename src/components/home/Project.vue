<template>
	<div class="project" v-view="viewHandler">
		<div class="pos-r">
			<div class="project__bg">
				<div class="project__bg-item">
					<picture v-if="project.image_sizes">
						<source
							v-for="size in project.image_sizes"
							:key="size.id"
							:media="`(max-width: ${size}px)`"
							:srcset="require(`@/assets/${project.image}-${size}.jpg`)"
						/>
						<img :src="require(`@/assets/${project.image}.jpg`)" alt class="project__img" />
					</picture>
					<img v-else :src="require(`@/assets/${project.image}.jpg`)" alt class="project__img" />
				</div>
			</div>
			<div class="project__content pos-r zi-2">
				<ul class="project__services">
					<li class="link" v-for="service in project.services" :key="service" v-html="service"></li>
				</ul>
				<div class="project__title">
					<h2 class="title" v-html="project.title"></h2>
					<a href="#" class="project__link link">
						Ver más
						<span class="project__link-arrow"></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		viewHandler(e) {
			const element = e.target.element
			const elementClasses = element.className

			if (!elementClasses.includes('animate')) {
				if (elementClasses.includes('view-in--gt-half')) {
					element.classList.add('animate')
				}
			}
		}
	}
}
</script>