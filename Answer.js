var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    var selectors = selector.split('#');
    var id_selector = selectors[selectors.length -1];
    var tag_selector = selectors[0]
    if(id_selector.indexOf('.') > -1){
      var id_selector = id_selector.split('.')[0];
    } 
    var element_with_id = document.getElementById(id_selector);
    var elements_with_tag = document.getElementsByTagName(tag_selector);
    if (elements_with_tag.length > 0){
      for (i = 0; i < elements_with_tag.length; i++){
        if (element_with_id === elements_with_tag[i]){
          elements.push(element_with_id)
        } else {
          elements = []
        }
      }
    } else {
      elements.push(element_with_id)
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