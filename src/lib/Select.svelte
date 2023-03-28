<div class="sieve-select">
  <div class="select-wrapper">
    <select name="sieves" id="sieves" class="select">
      <option value="eratosthenes">Eratosthenes</option>
      <option value="sundaram">Sundaram</option>
      <option value="atkin">Atkin</option>
    </select>
    <span class="arrow"></span>
  </div>
</div>

<style>
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
    background-color: #bbbbbb;
    color: #fff;
    border: none;
    /* border-radius: 4px; */
    cursor: pointer;
    transition: 30;
  }

  .button:hover {
    background-color: rgb(255, 195, 31);
  }

</style>