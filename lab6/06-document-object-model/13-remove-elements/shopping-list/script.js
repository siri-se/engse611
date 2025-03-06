// remove() Method
function removeDeleteButton() {
  const deleteBtn = document.querySelector('#clear');
  if (deleteBtn) deleteBtn.remove();
}

// removeChild() Method
function removeFirstListItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  if (li) ul.removeChild(li);
}

// Remove specific item by index (1-based)
function deleteItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  if (li) ul.removeChild(li);
}

// Alternative way using querySelectorAll (0-based)
function deleteItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  if (li) ul.removeChild(li);
}

// Another way using remove() directly
function deleteItem3(itemNumber) {
  const li = document.querySelectorAll('li');

  if (li[itemNumber - 1]) li[itemNumber - 1].remove();
}

// Arrow function version
const deleteItem4 = (itemNumber) => {
  const li = document.querySelectorAll('li');
  if (li[itemNumber - 1]) li[itemNumber - 1].remove();
};

// Event listeners for testing
document.querySelector('#clear')?.addEventListener('click', removeDeleteButton);

// Call functions to test removing items
removeDeleteButton();
removeFirstListItem();
deleteItem(2); // Removes the 2nd item in the list
deleteItem4(3); // Removes the 3rd item in the list











/*
// remove() Method
function removeDeleteButton() {
  const deleteBtn = document.querySelector('#clear');
  deleteBtn.remove();
}

// removeChild() Method
function removeFirstListItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// Other examples

function deleteItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function deleteItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function deleteItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const deleteItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeDeleteButton();
// removeFirstListItem();
// deleteItem(2);
deleteItem4(2);
*/