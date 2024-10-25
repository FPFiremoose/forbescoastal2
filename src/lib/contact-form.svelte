<script>
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	async function handleSubmit() {
		try {
			const response = await fetch('https://your-lambda-url.amazonaws.com/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const result = await response.json();
			console.log('Form submitted successfully:', result);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	}
</script>

<form
	class="mx-auto w-full basis-1/2 space-y-4 rounded-lg bg-white p-4"
	on:submit|preventDefault={handleSubmit}
>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="name">Name</label>-->
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			class="w-full rounded border border-primary bg-sky bg-opacity-20 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Your Name"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="email">Email</label>-->
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			class="w-full rounded border border-primary bg-sky bg-opacity-20 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Your Email"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="phone">Phone</label>-->
		<input
			type="tel"
			id="phone"
			bind:value={formData.phone}
			class="w-full rounded border border-primary bg-sky bg-opacity-20 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Your Phone"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="message">Message</label>-->
		<textarea
			id="message"
			bind:value={formData.message}
			class="w-full rounded border border-primary bg-sky bg-opacity-20 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Your Message"
			rows="4"
			required
		></textarea>
	</div>
	<div>
		<button
			type="submit"
			class="focus:shadow-outline float-right w-1/3 rounded bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
			>Submit</button
		>
	</div>
</form>
