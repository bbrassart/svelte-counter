<script>
  import FirstChild from "./lib/components/FirstChild.svelte";
	import SecondChild from "./lib/components/SecondChild.svelte";
	import { base } from '$app/paths';
</script>

<div class="flex flex-wrap p-6">
	<div class="w-full text-center mt-8">

		<h1 class="text-4xl mb-6 text-red">Welcome to my app</h1>
		<p class="mb-2">Testing Svelte with TailwindCSS</p>
	</div>
	<FirstChild />
	<SecondChild />
	<section class="w-full">
		<div class="text-center my-20">
			<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><a href="{base}/about">About my site</a></button>
	</section>
</div>