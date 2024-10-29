<script>
	export let src = 'service1.jpg';
	export let heading = 'Kitchen Remodelling';
</script>

<div class="basis-1/3">
	<img {src} alt="" />
	<h4>{heading}</h4>
	<p><slot></slot></p>
</div>
