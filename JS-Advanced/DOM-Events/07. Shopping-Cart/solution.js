function solve() {
  document.querySelector(".shopping-cart").addEventListener("click", onClick);
  document.querySelector(".checkout").addEventListener("click", onCheck);
  let output = document.getElementsByTagName('textarea')[0];
  let cart = [];
  function onClick(ev) {
    if (ev.target.tagName === "BUTTON" && ev.target.classList.contains("add-product")) {
      let product = ev.target.parentNode.parentNode;
      let name = product.querySelector(".product-title").textContent;
      let price = Number(product.querySelector(".product-line-price").textContent);
      cart.push({
        name,
        price,
      });
      output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
    }
  }

  function onCheck (){
   let boughtProducts = new Set();
   cart.forEach(p => {
      boughtProducts.add(p.name);
   });
   let total = cart.reduce((t, c) => t + c.price, 0);

   output.textContent += `You bought ${[...boughtProducts.keys()].join(', ')} for ${total.toFixed(2)}.`
   document.querySelector(".checkout").removeEventListener("click", onCheck);
   document.querySelector(".shopping-cart").removeEventListener("click", onClick);
  }
}
