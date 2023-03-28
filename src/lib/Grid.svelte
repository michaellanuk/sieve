<script>
  import { sieveOfEratosthenes } from '../sieves/eratosthenes';

  export let max = 120;

  let selectedSieve = 'eratosthenes';

  const SIEVES = Object.freeze({
    eratosthenes: async () => sieveOfEratosthenes(max),
    //sundaram
    //atkin
  })

  function handleSelect(event) {
    selectedSieve = event.target.value;
  }
  
  function getGridItems() {
    const items = [];
    for (let i = 1; i <= max; i++) {
      items.push(i);
    }
    return items;
  }

  async function runSieve() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((div) => {
      // @ts-ignore
      div.style.backgroundColor = '#ececec';
    });

    await SIEVES[selectedSieve]();
  }
</script>

<div class="select-wrapper">
  <select name="sieves" id="sieves" class="select" on:change={handleSelect}>
    <option value="eratosthenes">Eratosthenes</option>
    <option value="sundaram">Sundaram</option>
    <option value="atkin">Atkin</option>
  </select>
  <span class="arrow"></span>
</div>

<button type="submit" class="button" on:click={runSieve}>Run</button>
<div class="grid">
  {#each getGridItems() as item}
    <div class="grid-item" id={String(item)}>{item}</div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin: 20px 0;
  }
  
  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color: #ececec;
    font-size: 15px;
  }

  .select-wrapper {
    padding: 15px;
  }
	/* Reset default select styles */
  select {
    background-color: rgb(0, 162, 255);
    padding: 10px;
    margin: 0;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    border: none;
    font-size: 15px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #555 transparent transparent transparent;
  }

  /* Custom button styles */
  .button {
    padding: 8px 16px;
    background-color: #ececec;
    color: #2d2d2d;
    border: none;
    /* border-radius: 4px; */
    cursor: pointer;
    transition: 30;
  }

  .button:hover {
    background-color: rgb(255, 195, 31);
  }
</style>
