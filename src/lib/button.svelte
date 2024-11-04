<script>
	// Props for the button component
	export let href = null; // The href prop, defaults to null
	export let className = ''; // Additional classes to apply for custom styling
</script>

<!-- If href is passed, render an <a> tag -->
<a
	{href}
	class={`w-fit rounded bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
>
	<slot></slot>
	<!-- Slot for button text/content -->
</a>
