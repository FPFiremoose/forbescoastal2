<script>
	export let src = 'https://via.assets.so/img.jpg?w=760&h=620&tc=blue&bg=#cecece';
	export let heading = 'test';
</script>

<div class="basis-1/3 text-center">
	<img class="w-auto" {src} alt="" />
	<h3 class="mt-6 font-bold text-navy md:text-2xl">{heading}</h3>
	<p class="mt-3 text-navy md:text-xl"><slot></slot></p>
</div>
