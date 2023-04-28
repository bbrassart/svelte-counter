<script lang="ts">
  import { counter } from "../../stores";
  const reset = () => counter.set(0);
</script>

<section class="w-full mt-8">
  <div class="text-center">
    <button
      class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      on:click={reset}>Reset counter</button
    >
  </div>
  <div class="text-center mt-8">
    <h1 class="text-2xl mb-6">The state is shared between components : {$counter}</h1>
  </div>
</section>
