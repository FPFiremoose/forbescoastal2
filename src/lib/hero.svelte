<script>
	import Button from '$lib/button-sky.svelte';
	import { onMount } from 'svelte';

	// You can pass in props for the image URLs, heading, and button text if needed
	export let imageUrlM;
	export let imageUrlD;
	export let heading = 'Your Heading Here';
	export let message;

	let imageUrl = ''; // This will hold the URL for the currently appropriate image

	function updateImageUrl() {
		// Determine the correct image to load based on the viewport width
		if (window.innerWidth < 768) {
			imageUrl = imageUrlM;
		} else {
			imageUrl = imageUrlD;
		}
	}

	// Run this function on component mount
	onMount(() => {
		updateImageUrl();

		// Add an event listener to update the image URL when resizing
		window.addEventListener('resize', updateImageUrl);

		return () => {
			// Remove the event listener when the component is destroyed
			window.removeEventListener('resize', updateImageUrl);
		};
	});
</script>

<div class="relative w-full font-primary">
	<!-- Background Image -->
	{#if imageUrl}
		<div
			class="h-[75vh] w-full bg-cover bg-center md:h-[85vh] 2xl:h-[90vh]"
			style="background-image: url({imageUrl});"
		></div>
	{/if}

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-tl from-[#00194060] to-transparent"></div>

	<!-- Content (Text + Button) -->
	<div
		class="absolute inset-0 flex items-end justify-start px-[5vw] py-[6vh] text-sand md:px-10 md:py-10 2xl:px-[5vw] 2xl:py-[8vh]"
	>
		<div class="flex max-w-2xl flex-col text-left">
			<h1 class="2xl:text-4xl4xl4xl4xl text-3xl font-bold md:text-6xl">{@html heading}</h1>
			{#if message}
				<p class="text-lg font-semibold md:text-3xl">{message}</p>
			{/if}
			<!-- Button component can be imported and used here -->
			<div class="mt-4 md:mt-8">
				<Button>Schedule an appointment</Button>
			</div>
		</div>
	</div>
</div>
