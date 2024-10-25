<script>
	export let heading = 'Default Heading';
</script>

<section class="flex items-center justify-center px-[300px] py-[160px] font-primary">
	<div class="text-left text-[#001940] md:text-center">
		<h1 class="mb-10 text-4xl font-bold md:text-[60px]">{heading}</h1>
		<p class="text-lg md:text-xl"><slot></slot></p>
	</div>
</section>
