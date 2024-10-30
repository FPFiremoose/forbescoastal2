<script>
	import Hero from '$lib/hero2.svelte';
	import NavBar from '$lib/navbar.svelte';
	import CenterText from '$lib/center-text.svelte';
	import Services from '$lib/services.svelte';
	import Contact from '$lib/contact.svelte';

	const subheading = 'From concept to completion, we bring your dream home to life';
	const sec2heading = 'View our collection of custom projects';
</script>

<NavBar></NavBar>
<Hero
	imageUrlD="services-hero.jpg"
	imageUrlM="home-hero-min.jpg"
	heading="Create"
	message="Design anything, build everything"
></Hero>

<CenterText
	>As a family-owned business with 15 years of experience, we pride ourselves on the core values of
	craftsmanship, dedication, and an unwavering commitment to custom-home building excellence. Our
	journey is defined by Brady Forbes, owner and operator of Forbes Coastal Builders.</CenterText
>
<Services></Services>
<Contact></Contact>
