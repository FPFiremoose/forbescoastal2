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
	class="relative z-10 mx-auto w-full basis-1/2 space-y-4 rounded-lg"
	on:submit|preventDefault={handleSubmit}
>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="name">Name</label>-->
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			class="w-full rounded border border-primary bg-[#f6fcff] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:p-4"
			placeholder="Name"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="email">Email</label>-->
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			class="w-full rounded border border-primary bg-[#f6fcff] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:p-4"
			placeholder="Email"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="phone">Phone</label>-->
		<input
			type="tel"
			id="phone"
			bind:value={formData.phone}
			class="w-full rounded border border-primary bg-[#f6fcff] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:p-4"
			placeholder="Phone"
			required
		/>
	</div>
	<div>
		<!--		<label class="mb-2 block text-sm font-bold text-gray-700" for="message">Message</label>-->
		<textarea
			id="message"
			bind:value={formData.message}
			class="w-full rounded border border-primary bg-[#f6fcff] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Message"
			rows="4"
			required
		></textarea>
	</div>
	<div>
		<button
			type="submit"
			class="focus:shadow-outline float-right rounded bg-primary px-4 py-2 text-lg font-bold text-white hover:bg-blue-700 focus:outline-none 2xl:px-12"
			>Submit</button
		>
	</div>
</form>
