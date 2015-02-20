var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    selector = selector.split('#');
    selector = selector[selector.length -1];
    id = document.getElementById(selector);
    if (id !== null){
      elements.push(id)
    }
  }

  if (selector.indexOf('.') > -1){
    selector = selector.split('.');
    selector = selector[selector.length -1];
    classes = document.getElementsByClassName(selector);
    if (classes !== null){
      for (i = 0; i < classes.length; i++){
        elements.push(classes[i])
      }
    }
  }

  if (selector !== undefined){
    tag = document.getElementsByTagName(selector)
    for (i = 0; i < tag.length; i++){
      elements.push(tag[i])
    }
  }

  return elements;
}