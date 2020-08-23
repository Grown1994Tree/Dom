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
    var lis=document.getElementsByTagName("*");
    alert(lis.length);




    

