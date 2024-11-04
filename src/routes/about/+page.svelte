<script>
	import NavBar from '$lib/navbar.svelte';
	import Hero from '$lib/hero.svelte';
	import CenterText from '$lib/center-text.svelte';
	import Contact from '$lib/contact.svelte';
	import Team from '$lib/team.svelte';
	import Banner from '$lib/banner.svelte';

	const subheading = 'From concept to completion, we bring your dream home to life';
	const sec2heading = 'View our collection of custom projects';
</script>

<NavBar></NavBar>
<Hero
	imageUrlD="about-hero.jpg"
	imageUrlM="about-hero-mobile.jpg"
	heading="Take Your Project To <br>the Next Level"
	href="#contact"
></Hero>
<CenterText heading="Our History"
	>As a family-owned business with 15 years of experience, we pride ourselves on the core values of
	craftsmanship, dedication, and an unwavering commitment to custom-home building excellence. Our
	journey is defined by Brady Forbes, owner and operator of Forbes Coastal Builders.</CenterText
>
<CenterText bg="bg-sky"
	>Forbes Coastal Builders is a full-service, family-owned construction services company with
	expertise in alll phases of residential construction. <br /><br />

	Located in Naples, florida, Forbes Coastal Builders conducts it's general contracting operations
	throughout Southwest FLorida with its focus in Naples. With the full understanding of our client's
	goals, FCB applies comprehensive construction and project management capabilities, focusing on
	delivering each project with quality and high standards. <br /><br />

	As your trusted partner, we leverage decades of expertise to navigate the unique considerations
	and regulations htat come with recreating your dream home. Our expertise spans both contemporary
	and traditional homes, all showcasing elegant indoor-outdoor living. <br /><br />

	At FCB reputation is our biggest asset and our commitment to providing quality homes begins from
	the time that we start discussions with a landowner, through our dealings with the local
	municipalities all the way through delivering our homes to our staisfied homeowners.</CenterText
>
<Team></Team>
<Banner></Banner>
<Contact></Contact>
