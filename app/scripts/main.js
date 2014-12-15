var bill = window.prompt('How much did your bill cost?');
var percent = window.prompt('what percent tip do you want to pay?');
window.alert('You should pay $' + (percent * 0.01 * bill) + ' in tip for your meal');
