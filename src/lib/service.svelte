<script>
	export let src = 'service1.jpg';
	export let heading = 'Kitchen Remodelling';
</script>

<div class="flex-shrink-0 flex-grow-0 basis-[30%] font-primary text-navy">
	<img {src} class="mb-6 md:mb-8" alt="" />
	<h4 class="mb-2 text-2xl font-bold md:mb-5">{heading}</h4>
	<p class=""><slot></slot></p>
</div>
