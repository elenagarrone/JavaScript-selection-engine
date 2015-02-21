var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    array = selector.split('#');
    selector = array[array.length -1];
    if(selector.indexOf('.') > -1){
      selector = selector.split('.');
      selector = selector[0];
    } else if (array[0].indexOf('.') > -1){
      array = array[0].split('.'); 
    }

    id = document.getElementById(selector);
    tag = document.getElementsByTagName(array[0])
    if (tag.length > 0){
      for (i = 0; i < tag.length; i++){
        if (id === tag[i] || array[0] === ''){
          elements.push(id)
        } else {
          elements = []
        }
      }
    } else {
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