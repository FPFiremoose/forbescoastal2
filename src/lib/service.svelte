<script>
	export let src = 'service1.jpg';
	export let heading = 'Kitchen Remodelling';
</script>

<div class="flex-shrink-0 flex-grow-0 basis-[30%] font-primary text-navy">
	<img {src} class="mb-6 md:mb-5 2xl:mb-8" alt="" />
	<h4 class="mb-2 text-xl font-bold md:mb-3 2xl:text-2xl">{heading}</h4>
	<p class="2xl:text-xl"><slot></slot></p>
</div>
