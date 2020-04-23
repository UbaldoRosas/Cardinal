<template>
	<div class="intro__bg" v-if="!$isMobile()">
		<Norte></Norte>
		<Sur></Sur>
		<Este></Este>
		<Oeste></Oeste>
	</div>
</template>

<script>
import gsap from 'gsap'

import Norte from '@/components/home/Norte.vue'
import Sur from '@/components/home/Sur.vue'
import Este from '@/components/home/Este.vue'
import Oeste from '@/components/home/Oeste.vue'

export default {
	components: {
		Norte,
		Sur,
		Este,
		Oeste
	},
	methods: {
		animate(tl, el) {
			tl.to(el, {
				opacity: 1,
				stagger: {
					each: 0.1
				}
			})
			tl.to(el, {
				opacity: 0,
				stagger: {
					each: 0.1
				}
			})
		}
	},
	mounted() {
		let _this = this

		if (!this.$isMobile()) {
			let tl = gsap.timeline({ repeat: -1 })

			let texts = document.querySelectorAll('.bg-text')

			texts.forEach(function(el) {
				let letters = `#${el.id} .letter`

				_this.animate(tl, letters)
			})
		}
	}
}
</script>
