<script>
	import '../app.css';
	import background from '$lib/images/background.webp';
</script>

<div class="absolute w-full h-full bg-cover bg-center -z-50" style="background-image: url({background})"></div>
<div class="container bg-white text-black h-fit p-8 flex flex-col gap-2 lg:gap-0">
	<div class="flex flex-row gap-3 mb-3 font-bold">
		<a href="/">Home</a>
		<a href="/leaderboard">Leaderboard</a>
	</div>
<slot></slot>
</div>


