function showPic(which_pic){
    if(!document.getElementById) return false;
    var source=which_pic.getAttribute("href");
    var get_img=document.getElementById("placeholder");
    var pic_text=which_pic.getAttribute("title");
    var description=document.getElementById("description");
    get_img.setAttribute("src",source);
    if(description){
        description.childNodes[0].nodeValue=pic_text;
    }
    return true;
}

function openUrl(which_url){
    window.open(which_url,"showpic","width=80;height=40");
}


function prepare(){
    if(!document.getElementsByTagName) return false;
    var element_a=document.getElementsByTagName("a");
    for(var i=0;i<element_a.length;i++){
        if(element_a[i].getAttribute("class")!="popup"){
            element_a[i].onclick=function(){
               return !showPic(this);  
            };
        }else{
            element_a[i].onclick=function(){
                openUrl(this.getAttribute("href"));
                return false;
            };
        }
    }
}



function insertAfter(newEle,targetEle){
    var parent=targetEle.parentNode;
    if(parent.lastChild==targetEle){
        parent.appendChild(newEle);
    }else{
        parent.insertBefore(newEle,targetEle.nextSibling);
    }
}


function appendPlaceHolder(){
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    if(!document.appendChild) return false;

    var img=document.createElement("img");
    var para=document.createElement("p");
    var txt=document.createTextNode("description");
    img.setAttribute("src","");
    img.setAttribute("alt","my img gallery");
    img.setAttribute("id","placeholder");
    
    para.setAttribute("id","description");
    para.appendChild(txt);
    
    /***加在后面 */
    // document.body.appendChild(img);
    // document.body.appendChild(para);

    /***加在前面insertBefore */
     var pic_lists=document.getElementById("picLists");
    // pic_lists.parentNode.insertBefore(img,pic_lists);
    // pic_lists.parentNode.insertBefore(para,pic_lists);
    
    /**使用自定义函数insertAfter */
    insertAfter(para,pic_lists);
    insertAfter(img,pic_lists);

}

addLoadEvent(appendPlaceHolder);
addLoadEvent(prepare);
