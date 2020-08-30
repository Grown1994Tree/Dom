function setStyle(){

    var h1s=document.getElementsByTagName("h1");
    for (let index = 0; index < h1s.length; index++) {
        let element = h1s[index];
        let next_ele=getNextElement(element.nextSibling);
        console.log(next_ele);
        next_ele.style.color="blue";
        // element.style.font="20px";
        // element.style.color="red";
    }

}

function getNextElement(ele){

    if(ele.nodeType==1){
         return ele;
    }
    if(ele.nextSibling)
    {
      return getNextElement(ele.nextSibling);
    }
    return null;

}

addLoadEvent(setStyle);