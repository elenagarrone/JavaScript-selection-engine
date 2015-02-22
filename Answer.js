var $ = function (selector) {
  var elements = [];

  var dividingBy = function(id_or_class){
    selectors = selector.split(id_or_class);
    selector = selectors[selectors.length -1];
    tag_selector = selectors[0]
  }
  var addEachElementOf = function(array){
    for (i = 0; i < array.length; i++){
      elements.push(array[i])
    }
  }

  if (selector.indexOf('#') > -1){
    dividingBy('#')
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
    dividingBy('.')
    var elements_with_class = document.getElementsByClassName(selector);
    if (tag_selector === ''){
      if (elements_with_class !== null){
        addEachElementOf(elements_with_class)
      }
    } else {
      var elements_with_tag = document.getElementsByTagName(tag_selector)
      elements_with_class_and_tag = elements_with_class && elements_with_tag;
      if (elements_with_class_and_tag !== null){
        addEachElementOf(elements_with_class_and_tag)
      }
    }
  }

  var elements_with_tag = document.getElementsByTagName(selector)
  addEachElementOf(elements_with_tag)

  return elements;
}

