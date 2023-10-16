// cart.js

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const renderCart = () => {
  const source = $('#cart-template').html();
  const template = Handlebars.compile(source);
  const context = { cart };
  const html = template(context);
  $('#cart-container').html(html);
};

$(document).ready(() => {
  renderCart();
});
