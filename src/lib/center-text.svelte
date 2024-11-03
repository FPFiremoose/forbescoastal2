<script>
	export let heading = '';
	export let bg = '';
</script>

<section
	class="flex {bg} items-center justify-center px-[5vw] py-[7vh] font-primary md:py-[100px] 2xl:py-[160px]"
>
	<div class="text-left text-[#001940] md:text-center">
		<h1 class="mb-5 text-xl font-bold md:mb-10 md:text-4xl 2xl:text-[60px]">{@html heading}</h1>
		<p class="md:text-xl"><slot></slot></p>
	</div>
</section>
