<script>
	// Props for the button component
	export let href = null; // The href prop, defaults to null
	export let className = ''; // Additional classes to apply for custom styling
</script>

<!-- If href is passed, render an <a> tag -->
<a
	{href}
	class={`rounded bg-sky px-6 py-2 text-navy transition-all duration-300 hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-50 2xl:py-3 2xl:text-2xl ${className}`}
>
	<slot></slot>
	<!-- Slot for button text/content -->
</a>

<style>
	/* Additional styles can go here */
	a[aria-disabled='true'] {
		pointer-events: none;
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
