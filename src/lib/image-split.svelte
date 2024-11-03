<script>
	// Define a prop for the heading text
	export let heading = '';

	// Import a reusable Button component
	import Button from '$lib/button.svelte';
</script>

<!-- Main container section with responsive layout for alignment -->
<section
	class="flex h-[100vh] w-full flex-col items-center bg-sky font-primary text-navy md:h-[540px] md:flex-row md:items-start"
>
	<!-- Image section (left on larger screens, top on smaller screens) -->
	<div class="w-full md:w-1/2">
		<!-- Responsive image that fills the container width -->
		<img src="/home2.jpg" alt="" class="h-auto w-full" />
	</div>

	<!-- Content section containing heading, slot content, and button -->
	<div
		class="flex h-full w-full flex-col justify-center px-[5vw] text-left md:w-1/2 md:items-center md:px-20 md:text-center 2xl:px-[160px]"
	>
		<!-- Heading with responsive text alignment and styling -->
		<h2 class="text-xl font-bold md:text-4xl 2xl:text-[60px]">
			{heading}
		</h2>

		<!-- Slot for injecting additional content from the parent component -->
		<div class="mb-6 mt-5 text-[#001940] md:mb-11 md:mt-[30px]">
			<slot></slot>
		</div>

		<!-- Button component for a call-to-action -->
		<Button>Schedule an appointment</Button>
	</div>
</section>
