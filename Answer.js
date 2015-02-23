var $ = function (selector) {
  var elements = [];
  var id_selector, class_selector, elementsWithTag;
  var new_arr = [];

  var selectors = selector.split(/(?=#)|(?=\.)/)

  for (i = 0; i < selectors.length; i++){
    if (selectors[i].indexOf('#') > -1){
      id_selector = selectors[i].slice(1);
    } else if (selectors[i].indexOf('.') > -1){
      class_selector = selectors[i].slice(1);
    } else if (selectors[i].indexOf('#') === -1 && selectors[i].indexOf('.') === -1){
      tag_selector = selectors[i];
      elementsByTag = document.getElementsByTagName(tag_selector) 
      elementsWithTag = [].slice.call(elementsByTag)
    }
  }

      console.log(elementsWithTag)
      console.log('tag>>>>>>>>>>>')
  elementWithId = document.getElementById(id_selector) 
      console.log(elementWithId)
      console.log('>>>>>>>>>>>')
  elementsByClass = document.getElementsByClassName(class_selector)
  elementsWithClass = [].slice.call(elementsByClass)
  console.log(elementsWithClass)
  console.log('__________')

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
              if ( elementsWithTag[i].Id == elementsWithClass[j].Id ) {
                elements.push( elementsWithTag[i] );
              }
            }
          }
        } else {

        console.log('in')
        }
      } else {
        for (var i=0; i < elementsWithTag.length; i++) {
          elements.push( elementsWithTag[i] );
        }
      }
    }


  // var getSelectorsBy = function(idOrClass){
  //   splitWhenFind(idOrClass);
  //   getSelector(selectors);
  //   getTagSelector(selectors);
  // }

  // var splitWhenFind = function(idOrClass){
  //   selectors = selector.split(idOrClass);
  // }

  // var getSelector = function(selectors){
  //   selector = selectors[selectors.length -1];
  // }

  // var getTagSelector = function(selectors){
  //   tagSelector = selectors[0];
  // }

  // var getIdSelector = function(){
  //   selector = selector.split('.')[0]; 
  // }

  // var addEachElementOf = function(array){
  //   for (i = 0; i < array.length; i++){
  //     elements.push(array[i]);
  //   }
  // }

  // var isElementWithTagSameAsElementWithId = function(id, tag){
  //   for (i = 0; i < tag.length; i++){
  //     id === tag[i] ? elements.push(id) : elements = []
  //   }
  // }

  // var elementsBy = function(idClassOrTag, selector){
  //   if (idClassOrTag === 'id')   { return document.getElementById(selector)         }
  //   if (idClassOrTag === 'class'){ return document.getElementsByClassName(selector) }
  //   if (idClassOrTag === 'tag')  { return document.getElementsByTagName(selector)   }
  // }

  // var elementsWithSameClassAndTag = function(){
  //   return elementsBy('class', selector) && elementsBy('tag', tagSelector)
  // }

  // if (selector.indexOf('#') > -1){
  //   getSelectorsBy('#');
  //   if(selector.indexOf('.') > -1){ getIdSelector() } 
  //   elementsBy('tag', tagSelector).length > 0 ? isElementWithTagSameAsElementWithId(elementsBy('id', selector), elementsBy('tag', tagSelector)) : elements.push(elementsBy('id', selector))
  // } 

  // if (selector.indexOf('.') > -1 && selector.indexOf('#') === -1){
  //   getSelectorsBy('.');
  //   if (tagSelector === ''){
  //     addEachElementOf(elementsBy('class', selector));
  //   } else {
  //     addEachElementOf(elementsWithSameClassAndTag());
  //   }
  // }

  // addEachElementOf(elementsBy('tag', selector));

  return elements;
}

