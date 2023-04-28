<script>
  import { base } from '$app/paths';
  import '../../global.css';
  import { counter } from '../../stores';
</script>

<div class="flex flex-wrap p-6">
	<div class="w-full text-center mt-8">

		<h1 class="text-4xl mb-6 text-red">About section</h1>
		<p class="mb-2">I can still see the counter: {$counter}</p>
	</div>
	<section class="w-full">
		<div class="text-center my-20">
			<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><a href="{base}/">Cool! Now back to home</a></button>
	</section>
</div>