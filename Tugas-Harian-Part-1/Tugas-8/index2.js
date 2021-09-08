var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function reads(index, books, time) {
  if (index >= books.length || index < 0) return;
  readBooksPromise(time, books[index])
    .then((time_remaining) => {
      if (time_remaining > 0) reads(index + 1, books, time_remaining);
    })
    .catch((_) => {
      return;
    });
}

reads(0, books, 10000);
