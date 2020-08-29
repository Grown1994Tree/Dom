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