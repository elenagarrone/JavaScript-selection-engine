var $ = function (selector) {
  var elements = [];

  if (selector.indexOf('#') > -1){
    selector = selector.split('#');
    selector = selector[selector.length -1];
    id = document.getElementById(selector);
    if (id !== null){
      elements.push(id)}
    // }else{
    //   elements = []
    // }
  }

  if (selector !== undefined){
    tag = document.getElementsByTagName(selector)
    for (i = 0; i < tag.length; i++){
      elements.push(tag[i])
    }
  }

  return elements;
}