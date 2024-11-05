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
	imageUrlM="services-hero-mobile.jpg"
	heading="Build Anything"
	btnTxt="Next Steps"
	href="#contact"
></Hero>

<CenterText heading="Transform Your Home with FCB"
	>At Forbes Coastal Builders, we specialize in full house remodels that transform your living space
	into the home of your dreams. Whether you're considering a partial home renovation to update your
	interiors or a full home remodel to create an entirely new layout, our experienced team is here to
	help. <br /><br />

	Our comprehensive services include everything from initial design consultations to final touches,
	ensuring that your full house renevation meets your expectations in every way. With a committment
	to quality and attentiont to detail, we bring your vision to life while adhering to your budget
	and timeline.</CenterText
>
<Services></Services>
<Contact></Contact>
