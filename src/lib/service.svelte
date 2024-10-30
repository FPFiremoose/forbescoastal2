<script>
	export let src = 'service1.jpg';
	export let heading = 'Kitchen Remodelling';
</script>

<div class="flex-shrink-0 flex-grow-0 basis-[30%] font-primary text-navy">
	<img {src} class="mb-12" alt="" />
	<h4 class="mb-5 text-2xl font-bold">{heading}</h4>
	<p class=""><slot></slot></p>
</div>
