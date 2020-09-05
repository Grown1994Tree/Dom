

// function positionMessage(){
//     if(!document.getElementById) return false;
//     if(!document.getElementById("position")) return false;
//     var position=document.getElementById("position");
//     position.style.position="absolute";
//     position.style.left="50px";
//     position.style.top="50px";
//     moveElement('position',200,200,10);
//     var position1=document.getElementById("position1");
//     position1.style.position="absolute";
//     position1.style.left="400px";
//     position1.style.top="400px";
//     moveElement('position1',200,200,10);
// }

// function moveMessage(){
//     if(!document.getElementById) return false;
//     if(!document.getElementById("position")) return false;
//     var position=document.getElementById("position");
//     position.style.position="absolute";
//     var x_box=parseInt(position.style.left);
//     var y_box=parseInt(position.style.top);
//     if(x_box==200&&y_box==200){
//         return true;
//     }

//     if(x_box>200){
//         x_box--;
//     }

//     if(x_box<200){
//         x_box++;
//     }

//     if(y_box>200){
//         y_box--;
//     }

//     if(y_box<200){
//         y_box++;
//     }

//     position.style.top=y_box+"px";
//     position.style.left=x_box+"px";
    
   
//     setTimeout("moveMessage()",10);

// }

function getLinkList(){

    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false; 
    var link_list=document.getElementById("linklist");
    var links=link_list.getElementsByTagName("a");
   
    var ele=document.createElement("div");//img-box
    ele.setAttribute("id","img-box");
    
    var img=document.createElement("img");
    img.setAttribute("src","./imgs/test.jpg");
    img.setAttribute("id","preview");

    ele.appendChild(img);
    insertAfter(link_list,ele);

    links[0].onmouseover=function(){
        moveElement("preview",-100,0,10);
    }

    links[1].onmouseover=function(){
        moveElement("preview",-200,0,10);
    }

    links[2].onmouseover=function(){
        moveElement("preview",-300,0,10);
    }


}

function moveElement(elementId,final_x,final_y,timer){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementId)) return false;
    var dist=0;
    var position=document.getElementById(elementId);
    position.style.position="absolute";
    if(!position.style.left){
        position.style.left=0;
    }
    if(!position.style.top){
        position.style.top=0;
    }
    var x_box=parseInt(position.style.left);
    var y_box=parseInt(position.style.top);
    if(position.timer){
       clearTimeout(position.timer);
    }
    if(x_box==final_x&&y_box==final_y){
        return true;
    }

    if(x_box>final_x){
        dist=Math.ceil((x_box-final_x)/10);
        x_box=x_box-dist;
    }

    if(x_box<final_x){
        dist=Math.ceil((final_x-x_box)/10);
        x_box=x_box+dist;
    }

    if(y_box>final_y){
        dist=Math.ceil((y_box-final_y)/10);
        y_box=y_box-dist;
    }

    if(y_box<final_y){
        dist=Math.ceil(final_y-y_box);
        y_box=y_box+dist;
    }

    position.style.top=y_box+"px";
    position.style.left=x_box+"px";
    
    var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+timer+")";
    position.timer=setTimeout(repeat,timer);
    
}

/***在元素后面插入的函数 */
function insertAfter(targetNode,newNode){
    var parent=targetNode.parentNode;
    if(parent.lastChild==targetNode){
        parent.appendChild(newNode);
    }else{
        parent.insertBefore(newNode,targetNode.nextSibling);
    }

}

addLoadEvent(getLinkList);