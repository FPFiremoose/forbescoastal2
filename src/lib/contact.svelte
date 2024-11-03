<script>
	import ContactForm from '$lib/contact-form.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
</script>

<section class="relative md:px-20 md:py-24 2xl:px-40">
	<div class="font-primary text-navy md:pb-12 2xl:pb-24">
		<p id="contact" class="md:text-lg 2xl:text-2xl">Message us</p>
		<h2 class="max-w-[70%] font-bold md:text-4xl 2xl:text-6xl">
			Get in touch below. Ask any question or schedule an appointment.
		</h2>
	</div>
	<div class="flex flex-col justify-between md:flex-row md:gap-20">
		<div class="order-2 flex-shrink basis-1/2 md:order-1">
			<ContactForm />
		</div>
		<div class="order-1 flex-shrink-[2] basis-1/2 md:order-2">
			<ContactInfo />
		</div>
	</div>
	<img src="logo-mark.svg" class="absolute bottom-0 left-0 opacity-30 md:w-[500px]" alt="" />
</section>
