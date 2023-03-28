<script>
  export let title = 'My App'; // optional prop for the title text
</script>

<header>
  <h1>{title}</h1>
  <nav>
    <!-- Navigation links would go here -->
  </nav>
</header>

<style>
  /* Add your styling for the header here */
  header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  
  h1 {
    margin: 0;
  }
</style>
