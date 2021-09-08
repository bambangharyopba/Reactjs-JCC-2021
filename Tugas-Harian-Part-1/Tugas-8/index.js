// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

function reads(index, books, time) {
  if (index >= books.length || index < 0) return;
  readBooks(time, books[index], function (time_remaining) {
    if (time_remaining > 0) reads(index + 1, books, time_remaining);
  });
}

reads(0, books, 10000);
