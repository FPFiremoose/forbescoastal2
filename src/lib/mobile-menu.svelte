<script>
	let open = false;

	function toggleMenu() {
		console.log('Clicked');
		open = !open;
		var contentDiv = document.getElementById('content');

		if (open) {
			contentDiv.style.overflowY = 'hidden';
		} else {
			contentDiv.style.overflowY = 'auto';
		}
	}

	function contactClick() {
		open = !open;
		document.getElementById('contact').scrollIntoView();
	}
</script>

<div
	id="hamburger"
	on:click={toggleMenu}
	class="absolute right-[15vw] top-1/2 z-10 flex -translate-y-[40%] cursor-pointer flex-col gap-[3px] md:hidden"
>
	<div class="h-[3px] w-8 bg-primary"></div>
	<div class="h-[3px] w-8 bg-primary"></div>
	<div class="h-[3px] w-8 bg-primary"></div>
	<p class="self-center font-primary text-[10px] font-light text-primary">Menu</p>
	<!-- <img src="ham.png" alt="" /> -->
</div>
<div
	id="mobile-menu"
	class:open
	class="bg-tertiary fixed left-0 top-0 z-10 h-[100vh] w-[100vw] -translate-x-full px-6 pt-4 duration-500"
>
	<div class="mb-24 flex flex-row justify-between">
		<div class=" h-10 w-[150px]">
			<a href="/"><img src="logo-reverse.svg" alt="" /></a>
		</div>
		<span on:click={toggleMenu} class="cursor-pointer text-3xl text-white">X</span>
	</div>
	<div class="flex flex-col gap-10 font-primary text-white">
		<a class="text-3xl tracking-tighter" href="/about">About</a>
		<a class="text-3xl tracking-tighter" href="/services">Services</a>
		<p class="text-3xl tracking-tighter" on:click={contactClick}>Contact</p>
	</div>
	<img src="sky-mark.svg" class="absolute bottom-0 right-0 z-10 w-[500px] opacity-25" alt="" />
</div>

<style>
	.open {
		transform: translateX(0%);
	}
</style>
