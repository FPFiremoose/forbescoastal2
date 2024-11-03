<script>
	import Service from '$lib/service.svelte';
</script>

<section class="bg-sky px-[5vh] py-[5vh] font-primary text-navy md:px-24 md:py-24 2xl:px-[300px]">
	<div>
		<h3 class="pb-2 text-4xl font-bold md:pb-5 md:text-5xl">Services</h3>
		<p class="pb-10 md:pb-20">Our attention to detail is unmatched in the industry</p>
	</div>
	<div class="flex flex-col flex-wrap gap-x-12 gap-y-24 md:flex-row 2xl:gap-24">
		<Service src="service1.jpg" heading="Kitchen Remodelling"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab, vero laborum aut
			praesentium, ipsum dicta fugiat delectus laudantium quia at iusto? Perferendis odit quibusdam
			sit exercitationem dolorem, fugit ipsa!</Service
		>
		<Service src="service2.jpg" heading="Bathroom Remodelling"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint magnam sed molestias
			quasi blanditiis neque explicabo fugit possimus! Non obcaecati id sequi sunt officia debitis
			minus asperiores, incidunt eius?</Service
		>
		<Service src="service3.jpg" heading="Full Home Remodelling"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta dolores commodi
			distinctio harum voluptatibus fugiat corrupti aliquam quos voluptatem. Voluptas quia officiis
			enim culpa dolores nemo, hic laudantium accusamus!</Service
		>
		<Service heading="Home Additions"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum adipisci quaerat quis
			hic numquam, dignissimos asperiores modi, excepturi fugit, quos reiciendis ad velit. Nobis
			blanditiis itaque mollitia animi nihil!</Service
		>
		<Service heading="Hardscaping"
			>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a placeat, obcaecati mollitia
			nam nihil nobis tenetur modi iure accusantium sit sint molestias. Laboriosam perferendis illum
			blanditiis earum optio in!</Service
		>
		<Service heading="Estate Management"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis assumenda voluptas
			perspiciatis esse doloremque fugiat atque maxime harum ducimus quaerat earum quae cupiditate.
			Omnis iure ipsam nihil pariatur quam!</Service
		>
	</div>
</section>
