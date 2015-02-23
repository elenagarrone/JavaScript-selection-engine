var $ = function (selector) {
  var elements = [];
  var idSelector, class_selector, elementsWithTag;
  var new_arr = [];

  var selectors = selector.split(/(?=#)|(?=\.)/)

  for (i = 0; i < selectors.length; i++){
    if (selectors[i].indexOf('#') > -1){
      idSelector = selectors[i].slice(1);
    } else if (selectors[i].indexOf('.') > -1){
      class_selector = selectors[i].slice(1);
    } else if (selectors[i].indexOf('#') === -1 && selectors[i].indexOf('.') === -1){
      tagSelector = selectors[i];
      elementsByTag = document.getElementsByTagName(tagSelector) 
      elementsWithTag = [].slice.call(elementsByTag)
    }
  }

  elementWithId = document.getElementById(idSelector) 
  elementsByClass = document.getElementsByClassName(class_selector)
  elementsWithClass = [].slice.call(elementsByClass)

  if (elementWithId){
    if (elementsWithTag){
      for (i = 0; i < elementsWithTag.length; i++){
        if (elementWithId === elementsWithTag[i]){
          elements.push(elementWithId)
        } else {
          elements = []
        }
      }
    } else {
      elements.push(elementWithId)
    }
  } else {
    if (elementsWithClass.length > 0){
      if (elementsWithTag){
        for (var i=0; i < elementsWithTag.length; i++) {
          for (var j=0; j < elementsWithClass.length; j++) {
            if ( elementsWithTag[i] === elementsWithClass[j] ) {
              elements.push( elementsWithTag[i] );
            }
          }
        }
      } else {
        for (var i=0; i < elementsWithClass.length; i++) {
          elements.push( elementsWithClass[i] );
        }
      }
    } else {
      for (var i=0; i < elementsWithTag.length; i++) {
        elements.push( elementsWithTag[i] );
      }
    }
  }

  return elements;
}

