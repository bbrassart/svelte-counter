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
			<a
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				href="{base}/">Cool! Now back to home</a
			>
		</div>
	</section>
</div>
