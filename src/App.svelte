<script lang="ts">
  import Router from "svelte-spa-router";
  import { Toaster } from "svelte-french-toast";
  import { routes } from "./router.ts";
  import Header from "./layouts/header.svelte";
  import Bottom from "./layouts/bottom.svelte";
</script>

<main data-theme="winter">
  <Header />
  <Toaster />
  <div class="card text-center">
    <Router {routes} />
  </div>
  <Bottom />
</main>

<style>
</style>
