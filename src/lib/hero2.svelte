<script>
	import { onMount } from 'svelte';

	// You can pass in props for the image URLs, heading, and button text if needed
	export let imageUrlM;
	export let imageUrlD;
	export let heading = 'Your Heading Here';

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

<div class="relative w-full">
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
		class="absolute inset-0 flex items-center justify-center text-sand md:items-end md:justify-start md:p-10"
	>
		<div class="max-w-2xl space-y-4 text-center md:text-left">
			<h1 class="text-4xl font-bold md:text-6xl">{heading}</h1>
			<p class="text-lg md:text-xl">Design anything, build everything</p>

			<!-- Button component can be imported and used here -->
		</div>
	</div>
</div>
