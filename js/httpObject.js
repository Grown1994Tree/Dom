function getXmlHttpRequest(){

     if(typeof XMLHttpRequest=='undefined'){
        XMLHttpRequest=function(){
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
     }

     return new XMLHttpRequest();
    
}