<script lang="ts">
  import Router from "svelte-spa-router";
  import { Toaster } from "svelte-french-toast";
  import { routes } from "./router.ts";
  import SwitchTheme from "./components/SwitchTheme.svelte";

</script>

<main data-theme="winter">
  <SwitchTheme />
  <Toaster />
  <div class="card text-center">
    <Router {routes} />
  </div>
</main>

<style>
</style>
