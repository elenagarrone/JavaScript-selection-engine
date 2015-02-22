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

  var isElementWithTagSameAsElementWithId = function(id, tag){
    for (i = 0; i < tag.length; i++){
      id === tag[i] ? elements.push(id) : elements = []
    }
  }

  var elementsBy = function(idClassOrTag, selector){
    if (idClassOrTag === 'id')   { return document.getElementById(selector) }
    if (idClassOrTag === 'class'){ return document.getElementsByClassName(selector) }
    if (idClassOrTag === 'tag')  { return document.getElementsByTagName(selector) }
  }

  var elementsWithSameClassAndTag = function(){
    return elementsBy('class', selector) && elementsBy('tag', tagSelector)
  }

  if (selector.indexOf('#') > -1){
    getSelectors('#');
    if(selector.indexOf('.') > -1){ getIdSelector() } 
    elementsBy('tag', tagSelector).length > 0 ? isElementWithTagSameAsElementWithId(elementsBy('id', selector), elementsBy('tag', tagSelector)) : elements.push(elementsBy('id', selector))
  } 

  if (selector.indexOf('.') > -1 && selector.indexOf('#') === -1){
    getSelectors('.');
    if (tagSelector === ''){
      addEachElementOf(elementsBy('class', selector));
    } else {
      addEachElementOf(elementsWithSameClassAndTag());
    }
  }

  addEachElementOf(elementsBy('tag', selector))

  return elements;
}

