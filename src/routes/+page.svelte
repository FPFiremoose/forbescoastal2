<script>
	import NavBar from '$lib/navbar.svelte';
	import Hero from '$lib/hero2.svelte';
	import CenterText from '$lib/center-text.svelte';
	import ImageSplit from '$lib/image-split.svelte';
	import InstaFeed from '$lib/insta-feed.svelte';
	import Benefits from '$lib/benefits.svelte';
	import Contact from '$lib/contact.svelte';

	const subheading = 'From concept to completion,</br> we bring your dream home to life';
	const sec2heading = 'View our collection of custom projects';
</script>

<NavBar></NavBar>
<Hero
	imageUrlD="home-hero-min.jpg"
	imageUrlM="home-hero-mobile.jpg"
	heading="Create"
	message="Design anything, build everything"
></Hero>
<CenterText heading={subheading}
	>At Forbes Coastal Builders, we treat your home as our own. We know full-house remodels can be
	stressful, so we offer a comprehensive approach to make it easier. Choosing us means getting a
	dedicated team to help you through the process. We specialize in full-service remodelling,
	committed to quality craftsmanship, client satisfaction, and exceptional designs.</CenterText
>
<ImageSplit heading={sec2heading}
	>At FCB, we work to offer our clients a smooth, transparent experience, resulting in a beautifully
	renovated home designed and built for their specific needs. We believe tha tyour outdoor living
	space should be an extension of the rest of your home, so we consider the sunrise, sunset, and
	views before even starting the construction process to ensure you</ImageSplit
>
<!-- <InstaFeed></InstaFeed> -->
<Benefits bg=""></Benefits>
<Contact></Contact>
