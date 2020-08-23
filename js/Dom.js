    /**1\document.getElementById() */
    //alert(typeof document.getElementById("purchase")); //Object

    /**2、document.getElementsByTagName() */
    //document.getElementsByTagName("li")是一个数组，但不继承于Array.
    // alert(document.getElementsByTagName("li") instanceof Array);//false
    //alert(Array.isArray(document.getElementsByTagName("li")));//false
    //console.log([].__proto__); //constructor: ƒ Array()
    //console.log(document.getElementsByTagName("li").__proto__);//constructor: ƒ HTMLCollection()
    
    //同样，数组中每一个元素也不继承Object
    // var lis=document.getElementsByTagName("li");
    // for(var i=0;i<lis.length;i++){
    //      alert(typeof lis[i]);
    //      console.log(lis[i].__proto__);//constructor: ƒ HTMLLIElement()
    // }

    //使用"*"来匹配所有标签
    // var lis=document.getElementsByTagName("*");
    // alert(lis.length);

    //与document.getElementById()使用
    // var purchase=document.getElementById("purchase");
    // var lis=purchase.getElementsByTagName("*");
    // alert(lis.length);

    /**3、document.getElementsByClassName */
    //sale import的位置不重要，只要有就可以
    // var sales=document.getElementsByClassName("sale");
    // alert(sales.length);//2
    // var sale_imports=document.getElementsByClassName("sale import");
    // alert(sale_imports.length);//2

    //不是所有浏览器都支持document.getElementsByClassName
    // function getElementsByClassName(node,classname){
    //     var result=[];
    //     if(node.getElementsByClassName){
    //         result=node.getElementsByClassName(classname);
    //     }else{
    //         var nodes=node.getElementsByTagName("*");
    //         for(var i=0;i<nodes.length;i++){
    //            if(nodes[i].className.indexOf(classname)!=-1){
    //             result.push(nodes[i]);
    //            }
    //         }
    //     }
    //     return result;
    // }

    // var sale_imports=getElementsByClassName(document,"sale import");
    // alert(sale_imports.length);//2

    /**4、setAttribute和getAttribute */
    //这两个方法存在于元素节点
    var ps=document.getElementsByTagName("p");
    for(let i=0;i<ps.length;i++){
       
       if(!ps[i].getAttribute("title")){
         ps[i].setAttribute("title","very good");
       }else{
        ps[i].setAttribute("title","very very good");
       }
       alert(ps[i].getAttribute("title"));
    }








    

