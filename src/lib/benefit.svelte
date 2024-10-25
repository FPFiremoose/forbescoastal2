<script>
	export let src = 'https://via.assets.so/img.jpg?w=760&h=620&tc=blue&bg=#cecece';
	export let heading = 'test';
</script>

<div class="">
	<img {src} alt="" />
	<h3 class="text-5xl font-bold text-navy">{heading}</h3>
	<p class="text-4xl text-navy"><slot></slot></p>
</div>
