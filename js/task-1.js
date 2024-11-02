const categories = document.querySelectorAll('#categories li.item');
console.log('Number of categories: ' + categories.length);
categories.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  console.log('Category: ' + categoryName);
  const nestedListItemsQty = item.querySelectorAll('li').length;
  console.log('Elements: ' + nestedListItemsQty);
});
