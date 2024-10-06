<script>
	// Props for the button component
	export let href = null; // The href prop, defaults to null
	export let type = 'button'; // The type prop, defaults to "button" for form buttons
	export let disabled = false; // Prop to control disabled state for buttons
	export let className = ''; // Additional classes to apply for custom styling
</script>

{#if href}
	<!-- If href is passed, render an <a> tag -->
	<a
		{href}
		class={`inline-block rounded bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-navy ${className}`}
		role="button"
		aria-disabled={disabled ? 'true' : 'false'}
		on:click|preventDefault={disabled}
	>
		<slot></slot>
		<!-- Slot for button text/content -->
	</a>
{:else}
	<!-- If href is not passed, render a <button> tag -->
	<button
		{type}
		class={`rounded bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
		{disabled}
	>
		<slot></slot>
		<!-- Slot for button text/content -->
	</button>
{/if}

<style>
	/* Additional styles can go here */
	a[aria-disabled='true'] {
		pointer-events: none;
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
