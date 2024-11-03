<script>
	export let src;
	export let heading;
</script>

<div class="flex flex-row gap-x-4">
	<div class="flex-shrink-0"><img class="2x:w-12 md:w-6 md:pt-2" {src} alt="" /></div>
	<div class="flex flex-col gap-1">
		<h3 class="relative font-primary font-bold leading-[0px] text-navy md:text-3xl 2xl:text-5xl">
			{heading}
		</h3>
		<p class="md:text-xl 2xl:text-4xl">
			<slot></slot>
		</p>
	</div>
</div>

<style>
	h3:before {
		content: url('{src}');
	}
</style>
