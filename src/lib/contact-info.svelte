<script>
	import Tidbit from '$lib/contact-tidbit.svelte';
</script>

<div class="flex basis-1/2 flex-col gap-10 pb-[5vh]">
	<Tidbit heading="Office" src="pin.png">999 Vanderbilt Beach Road, Naples, Florida</Tidbit>
	<Tidbit heading="Phone" href="tel:2396310018" src="phone.png">239.631.0018</Tidbit>
	<Tidbit heading="Email" href="mailto:info@forbescoastalbuilders.com" src="email.png"
		>info@forbescoastalbuilders.com</Tidbit
	>
	<div class="mt-3 flex flex-row gap-7 md:gap-5">
		<a href=""><img class="w-8 md:w-8 2xl:w-12" src="linkedin.png" alt="" /></a>
		<a href=""><img class="w-8 md:w-8 2xl:w-12" src="facebook.png" alt="" /></a>
		<a href=""><img class="w-8 md:w-8 2xl:w-12" src="instagram.png" alt="" /></a>
		<a href=""><img class="w-8 md:w-8 2xl:w-12" src="youtube.png" alt="" /></a>
	</div>
</div>
