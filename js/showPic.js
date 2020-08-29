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

function addLoadEvent(fun){
    var old_load=window.onload;
    if(typeof window.onload!='function'){
           window.onload=fun;
    }else{
           window.onload=function(){
              old_load();
              fun();
           }
    }
}
addLoadEvent(prepare);
// window.onload=prepare;

