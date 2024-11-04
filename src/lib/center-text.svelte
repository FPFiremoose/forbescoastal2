<script>
	export let heading = '';
	export let bg = '';
</script>

<section
	class="flex {bg} items-center justify-center px-[5vw] py-[7vh] font-primary md:py-[100px] 2xl:py-[10vh]"
>
	<div class="text-left text-navy md:text-center">
		<h1 class="mb-5 text-xl font-bold md:mb-10 md:text-4xl 2xl:text-5xl 2xl:leading-none">
			{@html heading}
		</h1>
		<p class="md:text-xl 2xl:text-2xl"><slot></slot></p>
	</div>
</section>
