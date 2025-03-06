// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Updated First';

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Updated Second</li>';
}

// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>New Second Item</li>' : '<li>Updated Item</li>')
  );
}

// replaceChild() Method
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Updated Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
