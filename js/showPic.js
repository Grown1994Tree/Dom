function showPic(which_pic){
    var source=which_pic.getAttribute("href");
    var get_img=document.getElementById("placeholder");
    get_img.setAttribute("src",source);
    var pic_text=which_pic.getAttribute("title");
    var description=document.getElementById("description");
    // alert(description.nodeType);description是元素节点，所以nodeValue的值为空。
    // alert(description.nodeValue);
    // alert(description.childNodes[0].nodeType);
    // alert(description.childNodes[0].nodeValue);
    description.childNodes[0].nodeValue=pic_text;
    
}

function showPicCount(){
    var element_body=document.getElementsByTagName("body")[0];
    var element_number=element_body.childNodes.length;
    alert(element_number);
}

function openUrl(which_url){
    window.open(which_url,"showpic","width=80;height=40");
}


function prepare(){
    var element_a=document.getElementsByTagName("a");
    for(var i=0;i<element_a.length;i++){
        if(element_a[i].getAttribute("class")!="popup"){
            element_a[i].onclick=function(){
                showPic(this);//不能传element_a[i]，这时i=element_a.length
                return false;
            };
        }else{
            element_a[i].onclick=function(){
                openUrl(this.getAttribute("href"));
                return false;
            };
        }
    }
}

// window.onload=function(){
//     prepare();
//     showPicCount();
// }

window.onload=prepare();

