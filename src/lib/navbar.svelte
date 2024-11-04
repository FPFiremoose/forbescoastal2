<script>
	import Button from '$lib/button.svelte';
	import MobileMenu from '$lib/mobile-menu.svelte';
</script>

<div
	class="relative flex h-24 flex-row items-center justify-between px-[5vw] font-primary text-navy lg:h-24 lg:px-12 2xl:h-32 2xl:px-[5vw]"
>
	<div class="">
		<a href="/"
			><img src="logo.svg" class="w-44 lg:w-52 2xl:w-[250px]" alt="Forbes Coastal Logo" /></a
		>
	</div>
	<div class="hidden w-auto flex-row items-center gap-10 md:flex">
		<a data-sveltekit-preload-code="eager" href="/about" class="2xl:text-2xl">About</a>
		<a data-sveltekit-preload-code="eager" href="/services" class="2xl:text-2xl">Services</a>
		<a class="2xl:text-2xl" href="#contact">Contact</a>
		<Button href="#contact">Schedule an Appointment</Button>
	</div>
	<MobileMenu />
</div>
