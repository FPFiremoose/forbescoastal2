<script>
	export let heading = '';
	import Button from '$lib/button.svelte';
</script>

<section class="flex w-full flex-col items-center bg-sky md:flex-row md:items-start">
	<div class="w-full md:w-1/2">
		<img src="/home2.jpg" alt="Image description" class="h-auto w-full" />
	</div>
	<div class="flex w-full flex-col justify-center px-[160px] md:w-1/2">
		<h2 class="text-center text-[60px] text-[#001940] md:text-left">{heading}</h2>
		<div class="mt-[60px] text-center text-[#001940] md:text-left">
			<slot></slot>
		</div>
		<Button>Schedule an appointment</Button>
	</div>
</section>
