var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    var selectors = selector.split('#');
    var selector = selectors[selectors.length -1];
    var tag_selector = selectors[0]
    if(selector.indexOf('.') > -1){
      var selector = selector.split('.')[0];
    } 
    var element_with_id = document.getElementById(selector);
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
    var selectors = selector.split('.');
    var selector = selectors[selectors.length -1];
    var tag_selector = selectors[0]
    var elements_with_class = document.getElementsByClassName(selector);
    if (tag_selector === ''){
      if (elements_with_class !== null){
        for (i = 0; i < elements_with_class.length; i++){
          elements.push(elements_with_class[i])
        }
      }
    } else {
      var elements_with_tag = document.getElementsByTagName(tag_selector)
      elements_with_class_and_tag = elements_with_class && elements_with_tag;
      if (elements_with_class_and_tag !== null){
        for (i = 0; i < elements_with_class_and_tag.length; i++){
          elements.push(elements_with_class_and_tag[i])
        }
      }
    }
  }

  var elements_with_tag = document.getElementsByTagName(selector)
  for (i = 0; i < elements_with_tag.length; i++){
    elements.push(elements_with_tag[i])
  }

  return elements;
}

