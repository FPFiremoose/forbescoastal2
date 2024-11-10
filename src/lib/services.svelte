<script>
	import Service from '$lib/service.svelte';
</script>

<section class="bg-sky px-[5vw] py-[5vh] font-primary text-navy md:px-24 md:py-24 2xl:px-[5hw]">
	<div>
		<h3 class="pb-2 text-4xl font-bold md:pb-5 md:text-5xl">Services</h3>
		<p class="pb-10 md:pb-20 2xl:text-2xl">Our attention to detail is unmatched in the industry</p>
	</div>
	<div
		class="flex flex-col flex-wrap gap-x-12 gap-y-16 md:flex-row md:gap-y-24 2xl:justify-between 2xl:gap-y-24"
	>
		<Service src="service1.jpg" heading="New Construction"></Service>
		<Service src="services2.jpg" heading="Bathroom Remodelling"></Service>
		<Service src="services3.jpg" heading="Full Home Remodelling"></Service>
		<Service src="services4.jpg" Fheading="Home Additions"></Service>
		<Service src="services5.jpg" heading="Hardscaping"></Service>
		<Service src="services6.jpg" heading="Estate Management"></Service>
	</div>
</section>
