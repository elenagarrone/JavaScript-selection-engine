var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    array = selector.split('#');
    selector = array[array.length -1];
    if(selector.indexOf('.') > -1){
      selector = selector.split('.');
      selector = selector[0];
    }
    id = document.getElementById(selector);
    if (id !== null){
      elements.push(id)
    }
  } 

  if (selector.indexOf('.') > -1 && selector.indexOf('#') === -1){
    array = selector.split('.');
    selector = array[array.length -1];
    if (array[0] === ''){
      classes = document.getElementsByClassName(selector);
      if (classes !== null){
        for (i = 0; i < classes.length; i++){
          elements.push(classes[i])
        }
      }
    } else {
      classes = document.getElementsByClassName(selector) && document.getElementsByTagName(array[0]);
      if (classes !== null){
        for (i = 0; i < classes.length; i++){
          elements.push(classes[i])
        }
      }
    }
  }

  tag = document.getElementsByTagName(selector)
  for (i = 0; i < tag.length; i++){
    elements.push(tag[i])
  }

  return elements;
}

// realArray = Array.prototype.slice.call(classes)