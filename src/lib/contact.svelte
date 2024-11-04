<script>
	import ContactForm from '$lib/contact-form.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
</script>

<section
	class="relative overflow-hidden px-[5vw] py-[5vh] pb-[10vh] md:px-20 md:py-24 2xl:px-[5vw]"
>
	<div class="pb-14 font-primary text-navy md:pb-12 2xl:pb-24">
		<p id="contact" class="mb-1 text-sm md:text-lg 2xl:text-2xl">Message us</p>
		<h2 class="max-w-[80vw] text-2xl font-bold leading-5 md:max-w-[70%] md:text-4xl 2xl:text-6xl">
			Get in touch below. Ask any question or schedule a free appointment.
		</h2>
	</div>
	<div class="flex flex-col justify-between md:flex-row md:gap-32">
		<div class="order-2 flex-shrink basis-1/2 md:order-1">
			<ContactForm />
		</div>
		<div class="order-1 flex-shrink-[2] basis-1/2 md:order-2">
			<ContactInfo />
		</div>
	</div>
	<img
		src="logo-mark.svg"
		class="absolute bottom-0 left-0 w-[500px] opacity-5 md:w-[50vw] md:opacity-10"
		alt=""
	/>
</section>
