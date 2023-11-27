<script>
  export let data;
  $: ({ productsInCart } = data);
</script>

<div>
  <ul>
    {#each productsInCart as product}
      <li>
        <a href="/products/{product.id}">{product.name}</a>
        : {product.price} 円
      </li>
    {/each}
  </ul>
</div>
