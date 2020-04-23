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
					<li class="link" v-for="service in project.services" :key="service">{{ service }}</li>
				</ul>
				<h2 class="project__title title" v-html="project.title"></h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project']
}
</script>