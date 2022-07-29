export default (items, item, className) => {
  if (!item.classList.contains(className)) {
    items.forEach(function(el) {
      el.classList.remove(className);
    });
    item.classList.add(className);
  }
}