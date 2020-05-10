<template>
	<div class="project">
		<div class="pos-r">
			<div class="project__bg">
				<div class="project__bg-item">
					<img :src="require(`@/assets/${project.image}`)" alt class="project__img" />
				</div>
			</div>
			<div class="project__content pos-r zi-2">
				<ul class="project__services">
					<li class="link" v-for="service in project.services" :key="service" v-html="service"></li>
				</ul>
				<div class="project__title">
					<h2 class="title" v-html="project.title"></h2>
					<a href="#" class="project__link link">Ver más <span class="project__link-arrow"></span></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project']
}
</script>