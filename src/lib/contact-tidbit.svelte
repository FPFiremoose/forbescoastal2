<script>
	export let src;
	export let heading;
</script>

<div class="flex flex-row gap-x-8">
	<div><img class="w-12" {src} alt="" /></div>
	<div class="flex flex-col gap-1">
		<h3 class="font-primary text-5xl font-bold text-navy">{heading}</h3>
		<p class="text-4xl">
			<slot></slot>
		</p>
	</div>
</div>
