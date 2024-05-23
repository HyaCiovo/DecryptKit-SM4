<script lang="ts">
  import { decryptBySM4, copyText } from "./../../utils/crypto.ts";
  import toast from "svelte-french-toast";
  let raw: string,
    result: any,
    KEY: string = localStorage.getItem("KEY");

  const decrypt = () => {
    localStorage.setItem("KEY", KEY);
    try {
      result = decryptBySM4(raw, KEY, true);
      console.log(JSON.parse(result));
    } catch (e) {
      toast.error(`😣${e.message}`);
    }
  };
</script>

<h1 class="mt-4 text-3xl">Decrypt By SM4</h1>

<div class="card lg:card-side bg-base-100 shadow-x my-8 glass p-4">
  <div class="flex flex-col justify-center p-2 min-w-[40vw]">
    <div class="label">
      <span class="label-text">Need to be decrypted</span>
    </div>
    <textarea
      class="textarea textarea-bordered h-48 w-full resize-none"
      placeholder="Need to be decrypted"
      bind:value={raw}
    />

    <div class="label">
      <span class="label-text">KEY</span>
    </div>
    <input
      placeholder="KEY"
      class="input input-bordered w-full"
      bind:value={KEY}
    />

    <button class="btn mt-8" on:click={decrypt} disabled={!KEY || !raw}
      >Decrypt🤔</button
    >
  </div>
  <div class="card-body p-2">
    <div class="label">
      <span class="label-text">Output</span>
    </div>
    <textarea
      class={`textarea textarea-bordered h-48 w-full
      ${result ? "cursor-auto" : "cursor-default"} resize-none mb-8`}
      placeholder="result"
      disabled
      bind:value={result}
    />
    <button
      class="btn btn-ghost"
      disabled={!result}
      on:click={() => copyText(result)}>copy the result🫡</button
    >
    {#if result}
      JSON object can be seen in the console🧐
    {/if}
  </div>
</div>
