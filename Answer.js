var $ = function (selector) {
  var elements = [];

  var getSelectors = function(id_or_class){
    splitWhenFind(id_or_class)
    getSelector(selectors);
    getTagSelector(selectors);
  }

  var splitWhenFind = function(id_or_class){
    selectors = selector.split(id_or_class);
  }

  var getSelector = function(selectors){
    selector = selectors[selectors.length -1];
  }

  var getTagSelector = function(selectors){
    tag_selector = selectors[0];
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
    var element_id = document.getElementById(selector);
    var elements_tag = document.getElementsByTagName(tag_selector);
    elements_tag.length > 0 ? elementsWithSame(element_id, elements_tag) : elements.push(element_id)
  } 

  if (selector.indexOf('.') > -1 && selector.indexOf('#') === -1){
    getSelectors('.');
    var elements_with_class = document.getElementsByClassName(selector);
    if (tag_selector === ''){
      if (elements_with_class !== null){
        addEachElementOf(elements_with_class);
      }
    } else {
      var elements_with_tag = document.getElementsByTagName(tag_selector)
      elements_with_class_and_tag = elements_with_class && elements_with_tag;
      if (elements_with_class_and_tag !== null){
        addEachElementOf(elements_with_class_and_tag);
      }
    }
  }

  var elements_with_tag = document.getElementsByTagName(selector)
  addEachElementOf(elements_with_tag)

  return elements;
}

