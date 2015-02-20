var $ = function (selector) {
  var elements = [];

  tag = document.getElementsByTagName(selector)
  for (i = 0; i < tag.length; i++){
    elements.push(tag[i])
  }

  return elements;
}