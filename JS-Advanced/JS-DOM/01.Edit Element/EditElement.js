function editElement(element, matcher, replacer) {
  let text = element.textContent;
  let pattern = new RegExp(matcher, 'g');
  let result = text.replace(pattern, replacer);
  element.textContent = result;
}