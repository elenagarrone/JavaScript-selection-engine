var $ = function (selector) {
  var elements = [];
  var elementWithId, elementsWithTag, elementsWithClass = [];
  var new_arr = [];

  var selectors = selector.split(/(?=#)|(?=\.)/)

  var addAllElementsFrom = function(array){
    for (var i=0; i < array.length; i++) {
      elements.push( array[i] );
    }
  }

  var addElementsWith= function(id, tags){
    id === tags ? elements.push(id) : elements = []
  }

  var addSameElementsInArrays = function(tags, classes){
    for (var i=0; i < tags.length; i++) {
      for (var j=0; j < classes.length; j++) {
        if ( tags[i] === classes[j] ) {
          elements.push( tags[i] );
        }
      }
    }
  }

  for (i = 0; i < selectors.length; i++){
    if (selectors[i].indexOf('#') > -1){
      idSelector = selectors[i].slice(1);
      elementWithId = document.getElementById(idSelector) 
    } else if (selectors[i].indexOf('.') > -1){
      class_selector = selectors[i].slice(1);
      elementsByClass = document.getElementsByClassName(class_selector)
      elementsWithClass = [].slice.call(elementsByClass)
    } else {
      tagSelector = selectors[i];
      elementsByTag = document.getElementsByTagName(tagSelector) 
      elementsWithTag = [].slice.call(elementsByTag)
    }
  }


  if (elementWithId){

    if (elementsWithTag){
      for (i = 0; i < elementsWithTag.length; i++){
        addElementsWith(elementWithId, elementsWithTag[i])
      }
    } else {
      elements.push(elementWithId)
    }

  } else {
    if (elementsWithClass.length > 0){

      if (elementsWithTag){
        addSameElementsInArrays(elementsWithTag, elementsWithClass)
      } else {
        addAllElementsFrom(elementsWithClass)
      }

    } else {
      addAllElementsFrom(elementsWithTag)
    }
  }

  return elements;
}

