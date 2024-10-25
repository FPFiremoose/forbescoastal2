<script>
	import Button from '$lib/button-sky.svelte';
	import { onMount } from 'svelte';

	// You can pass in props for the image URLs, heading, and button text if needed
	export let imageUrlM;
	export let imageUrlD;
	export let heading = 'Your Heading Here';
	export let message = 'Your message here';

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
			class="h-[90vh] w-full bg-cover bg-center md:h-screen"
			style="background-image: url({imageUrl});"
		></div>
	{/if}

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-tl from-[#00194060] to-transparent"></div>

	<!-- Content (Text + Button) -->
	<div
		class="absolute inset-0 flex items-center justify-center text-sand md:items-end md:justify-start md:px-10 md:py-10"
	>
		<div class="flex max-w-2xl flex-col text-center md:text-left">
			<h1 class="font-bold md:text-[150px] md:leading-[140px]">{heading}</h1>
			<p class="text-lg font-semibold md:text-4xl">{message}</p>

			<!-- Button component can be imported and used here -->
			<div class="mt-6">
				<Button>Schedule an appointment</Button>
			</div>
		</div>
	</div>
</div>
