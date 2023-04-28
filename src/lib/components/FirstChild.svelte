<script lang="ts">
	import { counter } from '../../stores';
	const onCounterIncreaseClick = () => counter.update(n => n +1);
</script>

<section class="w-full">
	<div class="text-center mt-8">
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			on:click={onCounterIncreaseClick}>Click this button</button
		>
	</div>
	<div class="text-center mt-8">
		<h1 class="text-4xl mb-6">Clicked {$counter} {$counter == 1 ? 'time' : 'times'}</h1>
	</div>
</section>

