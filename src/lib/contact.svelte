<script>
	import ContactForm from '$lib/contact-form.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
</script>

<section>
	<div></div>
	<div class="flex flex-row justify-between">
		<div class="basis-1/2">
			<ContactForm />
		</div>
		<div>
			<ContactInfo />
		</div>
	</div>
</section>
