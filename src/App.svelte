<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'

  import Counter from './lib/Counter.svelte'
  import Header from './lib/Header.svelte'
</script>

<main>
  <Header title="Sieve"/>
  <h1>Sieve</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Built using:
  </p>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
</main>

<style>
  .logo {
    height: 3em;
    padding: 1.5em;
    will-change: filter;
    transition: 0.3s;
  }
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #646cff);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
