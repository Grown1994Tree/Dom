function setLine(){

    var tables=document.getElementsByTagName("table");
    for(let i=0;i<tables.length;i++){
        
         var tbody=tables[i].getElementsByTagName("tbody");
         var trs=tbody[0].getElementsByTagName("tr");

         for(let j=0;j<trs.length;j++){
             if(j%2!=0){
                addClass(trs[j],"intro");
                // trs[j].style.backgroundColor="blue";
             }
             
             trs[j].onmouseover=function(){
                addClass(this,"addBold","calBold",);
                //   this.style.fontWeight="bold";
             }
             
             trs[j].onmouseout=function(){
                //   this.style.fontWeight="normal"
                addClass(this,"calBold","addBold");
             }

         }
         
         
    }


}

function addClass(){    //避免添加太多class
    var [ele,classname,other_arr]=[...arguments];
    var ele_arr=ele.className.split(" ");
    if(arguments.length>2){
        ele_arr=ele_arr.filter(str=>str!=other_arr);
    }
    ele_arr.push(classname);
    console.log(ele_arr);
    ele.className=ele_arr.join(" ");

}

addLoadEvent(setLine);