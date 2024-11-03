<script>
	import Button from '$lib/button.svelte';
	import MobileMenu from '$lib/mobile-menu.svelte';
</script>

<div
	class="flex flex-row items-center justify-between font-primary text-navy lg:h-24 lg:px-12 2xl:h-52 2xl:px-28"
>
	<div class="">
		<a href="/"
			><img src="logo.svg" class="w-24 lg:w-52 2xl:w-[250px]" alt="Forbes Coastal Logo" /></a
		>
	</div>
	<div class="hidden w-auto flex-row items-center gap-10 md:flex">
		<a data-sveltekit-preload-code="eager" href="/about" class="text-center">About</a>
		<a data-sveltekit-preload-code="eager" href="/services">Services</a>
		<a href="#contact">Contact</a>
		<Button>Schedule an Appointment</Button>
	</div>
	<MobileMenu />
</div>
