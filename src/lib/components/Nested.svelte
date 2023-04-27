<script lang="ts">
	let counter = 0;
	const onCounterIncreaseClick = () => (counter += 1);
</script>

<div class="w-full text-center mt-8">
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={onCounterIncreaseClick}>Click this button</button
	>
</div>
<div class="w-full text-center mt-8">
	<h1 class="text-4xl mb-6">Clicked {counter} time{counter !== 1 ? 's' : ''}</h1>
</div>
