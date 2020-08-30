function displayAbbr(){

    if(!document.getElementsByTagName) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    
    var abbr=document.getElementsByTagName("abbr");
    if (abbr.length<=0) return false;
    var bef=[];
    for (let index = 0; index < abbr.length; index++) {
        let cur_abbr = abbr[index];
        if (cur_abbr.childNodes.length<0) continue;
        let title=cur_abbr.getAttribute("title");
        //let text=cur_abbr.childNodes[0].nodeValue;
        let text=cur_abbr.firstChild.nodeValue;
        bef[text]=title;
    }
    var dlist=document.createElement("dl");
    for (const key in bef) {
      
        var dtable=document.createElement("dl");
        var ddesk=document.createElement("dd");
        var dtable_txt=document.createTextNode(key);
        var ddesk_txt=document.createTextNode(bef[key]);
        dtable.appendChild(dtable_txt);
        ddesk.appendChild(ddesk_txt);
        dlist.appendChild(dtable);
        dlist.appendChild(ddesk);

    }

    document.body.appendChild(dlist);


}


function displayQuote(){
    
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var quotes=document.getElementsByTagName("blockquote");
    if(quotes.length<1) return false;

    for (let index = 0; index < quotes.length; index++) {
        const quote = quotes[index];
        var src=quote.getAttribute("cite");
        if(!src){
            continue;
        }else{
            var a=document.createElement("a");
            var a_txt=document.createTextNode("source");
            a.appendChild(a_txt);
            a.setAttribute("href",src);
            var sup=document.createElement("sup");
            sup.appendChild(a);
        }
        var arr=[];
        var quote_elems=quote.getElementsByTagName("*");//getElementsByTagName会获取所有元素，但我们需要的是只有子元素
        for (let i = 0; i < quote_elems.length; i++) {
            let cur_ele = quote_elems[i];
            if(cur_ele.parentNode==quote){
               arr.push(cur_ele);
            }
        }
        arr[arr.length-1].appendChild(sup);
        

    }

}

function displayAccessKey(){

    var navigation=document.getElementById("navigation");
    var links=document.getElementsByTagName("a");
    var buf=[];
    for (let index = 0; index < links.length; index++) {
        let cur_link = links[index];
        if(!cur_link.getAttribute("accesskey")) continue;
        var key=cur_link.getAttribute("accesskey");
        var value=cur_link.firstChild.nodeValue;
        buf[key]=value;
    }
    var ul=document.createElement("ul");
    for (const key in buf) {
        
        var str=key+":"+buf[key];
        var li=document.createElement("li");
        var text=document.createTextNode(str);
        li.appendChild(text);
        ul.appendChild(li);

    }

    document.body.appendChild(ul);



}

addLoadEvent(displayAbbr);
addLoadEvent(displayQuote);
addLoadEvent(displayAccessKey);