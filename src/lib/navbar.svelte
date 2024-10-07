<script>
	import Button from '$lib/button.svelte';
</script>

<div class="flex flex-row items-center justify-between lg:h-24 lg:px-12 2xl:h-52 2xl:px-28">
	<div class="">
		<!-- Add  here -->
		<img src="logo.svg" class="lg:w-52 2xl:w-[250px]" alt="Forbes Coastal Logo" />
	</div>
	<div class="hidden w-auto flex-row items-center gap-10 md:flex">
		<a href="#" class="text-center">About</a>
		<a href="#">Services</a>
		<a href="#">Contact</a>
		<Button>Schedule an Appointment</Button>
	</div>
</div>
