<script>
	import ContactForm from '$lib/contact-form.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
</script>

<section class="relative md:px-20 2xl:px-40">
	<div class="font-primary text-navy md:pb-12 2xl:pb-24">
		<p class="md:text-lg 2xl:text-2xl">Message us</p>
		<h2 class="max-w-[70%] font-bold md:text-4xl 2xl:text-6xl">
			Get in touch below. Ask any question or schedule an appointment.
		</h2>
	</div>
	<div class="flex flex-row justify-between md:gap-20">
		<div class="flex-shrink basis-1/2">
			<ContactForm />
		</div>
		<div class="flex-shrink-[2] basis-1/2">
			<ContactInfo />
		</div>
	</div>
	<!--	<img src="logo.svg" class="absolute bottom-0 left-0" alt="" /> -->
</section>
