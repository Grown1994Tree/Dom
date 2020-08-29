

function replaceTestDiv(str){
    var text_div=document.getElementById("textDiv");
    var para=document.createElement("p");
    var txt1=document.createTextNode("that is ");
    var emphasis=document.createElement("em");
    var txt2=document.createTextNode(str);
    var txt3=document.createTextNode(" new Node");
    //var html_str="that is <em>"+str+"</em> content.";
    emphasis.appendChild(txt2);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    text_div.appendChild(para);
   // text_div.append(txt1,emphasis,txt3);
    // text_div.innerHTML=html_str;
    
}

function appendEle(){
    var element_div=document.getElementById("elementDiv");
    var para=document.createElement("p");
    var txt=document.createTextNode("hello world");
    para.appendChild(txt);
    element_div.appendChild(para);
}

addLoadEvent(replaceTestDiv("hello"));
addLoadEvent(appendEle);