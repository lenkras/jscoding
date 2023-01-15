var store = {};

store.cart = (function() {
  var products = [];
  function addProduct(productName) {
    if(!products[productName]) {
        products[productName] = 0;
    }
    products[productName]++;
  }

  function totalProducts() {
    var amount = 0;
    for(var productName in products) {
      amount += products[productName];
    }
    return amount;
  }

  return {
    add: addProduct,
    productAmount: totalProducts
  };
})();

store.cart.add("keksi");
store.cart.add("keksi");
store.cart.add("apple");
console.log(store.cart.productAmount()); 