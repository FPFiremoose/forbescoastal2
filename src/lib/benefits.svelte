<script>
	import Benefit from '$lib/benefit.svelte';
	import Button from '$lib/button.svelte';
	export let bg = '';
</script>

<section class="flex flex-col items-center">
	<div
		class="flex flex-col justify-center gap-20 md:flex-row md:gap-10 {bg} px-[5vw] py-[10vh] md:px-24 md:pt-24"
	>
		<Benefit src="benefit1.jpg" heading="Personalized Process"
			>We work with you from start to finish to bring your custom dream home to life. We bring
			together a team of skilled architects, designers, landscape architects, subcontractors, and
			more to build your perfect custom home.</Benefit
		>
		<Benefit src="benefit2.jpg" heading="Meticulously Crafted"
			>Our team approach allows us to meticulously craft your home to fit your specific dreams,
			needs and style. We pay special attention to every detail, ensuring a beautiful end result
			that will stand the test of time.</Benefit
		>
		<Benefit src="benefit3.jpg" heading="Indoor and Outdoor Harmony"
			>We believe that your outdoor living space should be an extension of your indoor living space.
			Indoor and outdoor harmony is an essential element of your home. By blurring the lines between
			the indoors and outdoors, we ensure that every space fits your lifestyle.</Benefit
		>
	</div>
	<Button href="/services">Our Services</Button>
</section>
