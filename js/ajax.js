function getData(){
    
    var ajax_object=getXmlHttpRequest();
    ajax_object.open("Get","./data.txt",true);
    ajax_object.onreadystatechange=function(){
       
        if(ajax_object.readyState==4){
            var bodys=document.getElementsByTagName("body")[0];
            var p=document.createElement("p");
            var txt=document.createTextNode(ajax_object.responseText);
            p.appendChild(txt);
            bodys.appendChild(p);
        }

    }
    ajax_object.send(null);
}

addLoadEvent(getData);