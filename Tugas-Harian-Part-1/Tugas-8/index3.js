var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 40)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

async function filterBooks(colorful, page) {
  try {
    result = await filterBooksPromise(colorful, page);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

filterBooks(false, 250);
filterBooks(true, 30);
