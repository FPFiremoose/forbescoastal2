<script>
	export let src;
	export let heading;
</script>

<div class="flex flex-row gap-x-10">
	<div class="flex-shrink-0"><img class="w-6 md:w-6 md:pt-2 2xl:w-12" {src} alt="" /></div>
	<div class="flex flex-col gap-3 md:gap-0">
		<h3
			class=" relative font-primary text-lg font-bold leading-[0px] text-navy md:text-3xl 2xl:text-4xl"
		>
			{heading}
		</h3>
		<p class="md:text-xl 2xl:text-2xl">
			<slot></slot>
		</p>
	</div>
</div>
