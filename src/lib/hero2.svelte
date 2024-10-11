<script>
	// You can pass in props for the image, heading, and button text if needed
	export let imageUrl;
	export let heading = 'Create';
</script>

<div class="relative w-full">
	<!-- Background Image -->
	<div
		class="h-[90vh] w-full bg-cover bg-center md:h-screen"
		style="background-image: url({imageUrl});"
	></div>

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-tl from-[#00194060] to-transparent"></div>

	<!-- Content (Text + Button) -->
	<div
		class="absolute inset-0 flex items-center justify-center md:justify-start md:items-end md:p-10 text-sand"
	>
		<div class="max-w-2xl space-y-4 text-center md:text-left">
			<h1 class="text-4xl font-bold md:text-6xl">{heading}</h1>

			<!-- Button component can be imported and used here -->
			<!-- <ButtonComponent text="Get Started" />-->
		</div>
	</div>
</div>
