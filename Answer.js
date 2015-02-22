var $ = function (selector) {
  var elements = [];

  var getSelectors = function(idOrClass){
    splitWhenFind(idOrClass)
    getSelector(selectors);
    getTagSelector(selectors);
  }

  var splitWhenFind = function(idOrClass){
    selectors = selector.split(idOrClass);
  }

  var getSelector = function(selectors){
    selector = selectors[selectors.length -1];
  }

  var getTagSelector = function(selectors){
    tagSelector = selectors[0];
  }

  var getIdSelector = function(){
    selector = selector.split('.')[0]; 
  }

  var addEachElementOf = function(array){
    for (i = 0; i < array.length; i++){
      elements.push(array[i]);
    }
  }

  var elementsWithSame = function(id, tag){
    for (i = 0; i < tag.length; i++){
      if (id === tag[i]){
        elements.push(id);
      } else {
        elements = [];
      }
    }
  }

  if (selector.indexOf('#') > -1){
    getSelectors('#');
    if(selector.indexOf('.') > -1){ getIdSelector() } 
    var elementWithId = document.getElementById(selector);
    var elementsWithTag = document.getElementsByTagName(tagSelector);
    elementsWithTag.length > 0 ? elementsWithSame(elementWithId, elementsWithTag) : elements.push(elementWithId)
  } 

  if (selector.indexOf('.') > -1 && selector.indexOf('#') === -1){
    getSelectors('.');
    var elementsWithClass = document.getElementsByClassName(selector);
    if (tagSelector === ''){
      if (elementsWithClass !== null){
        addEachElementOf(elementsWithClass);
      }
    } else {
      var elementsWithTag = document.getElementsByTagName(tagSelector)
      elementsWithClassAndTag = elementsWithClass && elementsWithTag;
      if (elementsWithClassAndTag !== null){
        addEachElementOf(elementsWithClassAndTag);
      }
    }
  }

  var elements_with_tag = document.getElementsByTagName(selector)
  addEachElementOf(elements_with_tag)

  return elements;
}

