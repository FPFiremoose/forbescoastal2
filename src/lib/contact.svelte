<script>
	import ContactForm from '$lib/contact-form.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
</script>

<section class="px-40">
	<div class="pb-24 font-primary text-navy">
		<p class="text-2xl">Message us</p>
		<h2 class="text-6xl font-bold">
			Get in touch below. Ask any question or schedule an appointment.
		</h2>
	</div>
	<div class="flex flex-row justify-between">
		<div class="basis-1/2">
			<ContactForm />
		</div>
		<div>
			<ContactInfo />
		</div>
	</div>
</section>
