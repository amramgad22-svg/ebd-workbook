// 11-dom-read — your work goes in this file.
//
// The lesson is example.js:   npm run open 11
// See your own page with:     npm run open 11 exercise
// Check your work with:       npm test 11
//
// exercise.html is written for you and must not be edited.
//
// These functions read the page. `document` is always there — in the browser
// because the browser provides it, and in the tests because they load
// exercise.html for you first. You write exactly the code you would write for
// a real page.
//
// The first four are started for you. The LAST one has no code — you write it.

/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */

export function pageHeading() {
  const heading = document.querySelector("h1");
  return heading.textContent;
}


/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */

export function productCount() {
  const products = document.querySelectorAll(".card");
  return products.length;
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 *
 * Each card holds its name in an <h3>.
 *
 * @returns {string[]}
 */

export function productNames() {
  const names = document.querySelectorAll(".card h3");
  return Array.from(names).map(name => name.textContent);
}


/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null, because there is no such card
 *
 * @param {string} name
 * @returns {string|null}
 */

export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(
    card => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");

  return Array.from(cards).map(card =>
    card.querySelector("h3").textContent
  );
}


// TODO: write soldOutNames here.
