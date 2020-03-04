//welcome message
var user = 'Kee';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest console reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContext = studentPrice.toFixed(2);